import React, { Fragment, Component } from 'react'
import App from '../src/Components/App'
import ReduxWrapper from '../src/Shared/Utils/Misc/ReduxWrapper'

class Checkout extends Component {

  render () {
    const { query } = this.props
    return (
      <Fragment>
          <App token={query.token} url={query.token} />
      </Fragment>
    )
  }
}

export default ReduxWrapper(Checkout, 'checkout')
