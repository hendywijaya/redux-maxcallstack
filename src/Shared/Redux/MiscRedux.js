// @flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  miscRequest: ['data'],
  miscProvinceRequest: ['id'],
  miscCityRequest: ['id'],
  miscKecamatanRequest: ['id'],
  miscProvinceSuccess: ['payload'],
  miscCitySuccess: ['payload'],
  miscKecamatanSuccess: ['payload'],
  miscProvinceFailure: null,
  miscCityFailure: null,
  miscKecamatanFailure: null,
  miscFailure: null
})

export const MiscTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  province: null,
  city: null,
  kecamatan: null,
  err: null
})

/* ------------- Reducers ------------- */
// special for SSR
export const server = (state: Object, { category }: Object) => state
// we're attempting to fetch
export const request = (state: Object) => state.merge({ fetching: true })

export const provinceRequest = (state: Object) => {
  return {...state, fetching: true, province: null, city: null, kecamatan: null}
}
export const kecamatanRequest = (state: Object) => {
  return {...state, fetching: true, kecamatan: null}
}
export const cityRequest = (state: Object) => {
  return {...state, fetching: true, city: null, kecamatan: null}
}

// we've successfully fetch data - not using this yet
export const success = (state: Object, { payload }: Object) =>
  state.merge({
    fetching: false,
    payload
  })

export const kecamatanSuccess = (state: Object, { payload }: Object) => {
  return {...state, fetching: false, kecamatan: payload}
}

export const citySuccess = (state: Object, { payload }: Object) => {
  return {...state, fetching: false, city: payload}
}

export const provinceSuccess = (state: Object, { payload }: Object) => {
  return {...state, fetching: false, province: payload}
}

// we've had a problem fetch data
export const failure = (state: Object) =>
  state.merge({ fetching: false })

export const cityFailure = (state: Object) => {
  return {...state, fetching: false}
}

export const kecamatanFailure = (state: Object) => {
  return {...state, fetching: false}
}

export const provinceFailure = (state: Object) => {
  return {...state, fetching: false}
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.MISC_PROVINCE_REQUEST]: provinceRequest,
  [Types.MISC_CITY_REQUEST]: cityRequest,
  [Types.MISC_KECAMATAN_REQUEST]: kecamatanRequest,
  [Types.MISC_PROVINCE_SUCCESS]: provinceSuccess,
  [Types.MISC_CITY_SUCCESS]: citySuccess,
  [Types.MISC_KECAMATAN_SUCCESS]: kecamatanSuccess,
  [Types.MISC_PROVINCE_FAILURE]: provinceFailure,
  [Types.MISC_CITY_FAILURE]: cityFailure,
  [Types.MISC_KECAMATAN_FAILURE]: kecamatanFailure
})
