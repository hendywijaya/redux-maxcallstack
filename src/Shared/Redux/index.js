import { combineReducers } from 'redux'
import CreateStore from './CreateStore'
import { reducer as miscRedux } from './MiscRedux'
import rootSaga from '../Sagas'
import localforage from 'localforage'

export default (initialState:any, options:any) => {
  const rootReducer = combineReducers({
    // global application state
    misc: miscRedux
  })

  return CreateStore(rootReducer, rootSaga, options.isServer, initialState)
}
