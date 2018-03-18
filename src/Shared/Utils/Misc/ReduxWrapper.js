// @flow
import React, {Component} from 'react'
import configureStore from '../../Redux/index'
import rootSaga from '../../Sagas/index'
import { sagaMiddleware } from '../../Redux/CreateStore'
import MiscActions from '../../Redux/MiscRedux'
import withRedux from 'next-redux-wrapper'
import {END} from 'redux-saga'

let clientTask = null
let refreshTask = false

export default function reduxWrapper (ReduxComponent:Object, Identifier:String) {
  class ReduxContainer extends Component {
    static async getInitialProps ({ store, req, isServer, query }) {
      if (isServer) {
        const rootTask = sagaMiddleware.run(rootSaga)
        if (Identifier === 'checkout') {
          store.dispatch(MiscActions.miscProvinceRequest())
        }
        store.dispatch(END)
        await rootTask.done.then(() => {
          return
        })
        return {query, isServer}
      }
    }

    constructor (props:any) {
      super(props)
      if (!clientTask) {
        clientTask = sagaMiddleware.run(rootSaga)
        refreshTask = true
      }
    }

    render () {
      return (
        <ReduxComponent {...this.props} />
      )
    }
  }
  return withRedux(configureStore)(ReduxContainer)
}
