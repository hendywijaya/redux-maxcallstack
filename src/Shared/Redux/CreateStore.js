import { not, contains } from 'ramda'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
// import ReduxPersist from '../Config/ReduxPersist'
import config from '../../../config'
// import RehydrationServices from '../Services/RehydrationService'
import Immutable from 'seamless-immutable'

// the logger master switch
const USE_LOGGING = config.DEBUG

// silence these saga-based messages
const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE']

// create the logger
const logger = createLogger({
  predicate: (getState, { type }) => USE_LOGGING && not(contains(type, SAGA_LOGGING_BLACKLIST))
})

const sagaMiddleware = createSagaMiddleware()

exports.sagaMiddleware = sagaMiddleware

let enhancers = []
let middleware = []

export default (rootReducer, rootSaga, isServer, initialState) => {
  // create the saga middleware
  middleware.push(sagaMiddleware)

  if (USE_LOGGING) {
    middleware.push(logger)
  }

  // add our normal middleware to the list
  enhancers.push(applyMiddleware(...middleware))
  // a function which can create our store and auto-persist the data
  // if (!store) {
  const store = createStore(rootReducer, Immutable(initialState), compose(...enhancers))
  // }

  // if (ReduxPersist.active && !isServer) {
  //   RehydrationServices.updateReducers(store, isServer)
  // }

  // kick off the root saga
  // sagaMiddleware.run(rootSaga)

  return store
}
