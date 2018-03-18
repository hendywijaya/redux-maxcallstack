import MiscActions, { MiscTypes } from '../Redux/MiscRedux'
import {baseListen, baseFetchNoToken} from './BaseSagas'

export function* provinceData (api) {
  yield baseListen(MiscTypes.MISC_PROVINCE_REQUEST,
    fetchMiscProvinceAPI,
    api)
}

export function* cityData (api) {
  yield baseListen(MiscTypes.MISC_CITY_REQUEST,
    fetchMiscCityAPI,
    api)
}

export function* kecamatanData (api) {
  yield baseListen(MiscTypes.MISC_KECAMATAN_REQUEST,
    fetchMiscKecamatanAPI,
    api)
}

export function* fetchMiscProvinceAPI (api, data) {
  yield baseFetchNoToken(api.getProvince,
    data,
    MiscActions.miscProvinceSuccess,
    MiscActions.miscProvinceFailure)
}

export function* fetchMiscCityAPI (api, data) {
  yield baseFetchNoToken(api.getCity,
    data.id,
    MiscActions.miscCitySuccess,
    MiscActions.miscCityFailure)
}

export function* fetchMiscKecamatanAPI (api, data) {
  yield baseFetchNoToken(api.getKecamatan,
    data.id,
    MiscActions.miscKecamatanSuccess,
    MiscActions.miscKecamatanFailure)
}
