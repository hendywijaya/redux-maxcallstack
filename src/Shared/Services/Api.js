// a library to wrap and simplify api calls
import config from '../../../config'
import apisauce from 'apisauce'
// import qs from 'querystringify'

const apiURL = config.apiURL || 'http://localhost'

const create = (baseURL = apiURL) => {
  const apiWrapper = apisauce.create({
    baseURL: apiURL,
    timeout: 30000
  })

  // misc
  const getProvince = () => {
    console.log('calling api callback')
    return {'error':false,'data':[
        {'province_id':'485','country_id':'102','province_code':'ID-BA','province_name':'NORTH'},
        {'province_id':'486','country_id':'102','province_code':'ID-BB','province_name':'SOUTH'}
    ]}
  }

  const getCity = (provinceId) => {
    return {'error':false,'data':[
      {'province_id':'485','country_id':'102','province_code':'ID-BA','province_name':'NORTH'},
      {'province_id':'486','country_id':'102','province_code':'ID-BB','province_name':'SOUTH'}
  ]}
  }

  const getKecamatan = (cityId) => {
    return {'error':false,'data':[
        {'province_id':'485','country_id':'102','province_code':'ID-BA','province_name':'NORTH'},
        {'province_id':'486','country_id':'102','province_code':'ID-BB','province_name':'SOUTH'}
    ]}
  }

  return {
    getProvince,
    getCity,
    getKecamatan
  }
}

export default {
  create
}
