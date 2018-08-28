import { getDataApi } from './config'

//查询api接口列表
export const getAppMessage = (params) => {
    return getDataApi('/oauth2/getApplicationInfoForOauth2', params,'GET')
}
// 登录
export const getAppLogin = (params) => {
    return getDataApi('/oauth2/login', params,'POST')
}
