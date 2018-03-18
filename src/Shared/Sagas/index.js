import { fork, all } from 'redux-saga/effects'
// sagas
// mofo server sagas
import { provinceData, cityData, kecamatanData } from './MiscSagas'

import API from '../Services/Api'
const api = API.create()

function * clientSagas () {
  yield all([
    fork(provinceData, api),
    fork(kecamatanData, api),
    fork(cityData, api)
  ])
}

export default function * root () {
  yield all([
    fork(clientSagas)
  ])
}
