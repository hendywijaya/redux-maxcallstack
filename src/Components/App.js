import React, { Component } from 'react'

// import config from '../../Config/config'
import { connect } from 'react-redux'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      token: this.props.token || '',
      cart: null,
      addressData: null,
      hasChosenAddress: false,
      initRendering: true,
      isCartOk: true,
      province: null
    }
  }

  componentWillReceiveProps (newProps) {
    const { cart, addressData, province } = newProps

    this.setState({
      cart,
      addressData,
      province
    })
  }

  hasChosenAddress = () => {
    this.setState({hasChosenAddress: true})
  }

  render () {
    const { initRendering } = this.state
    console.log(this.state)
    return (
      <div className='container-fluid w1200 pl0-pr0'>
        <div className='row'>
          <div>
            hello world
          </div>
        </div>
      </div>
    )
  }
}

const stateToProps = (state) => ({
  cart: state.cart,
  addressData: state.addressData,
  province: state.province
})

const dispatchToProps = (dispatch) => ({
  cartRequest: () => dispatch(CartActions.cartRequest())
})

export default connect(stateToProps, dispatchToProps)(App)
