import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import Cookie from 'js-cookie'
import { router } from '@/router'
import { ACCESS_TOKEN } from '@/core/enums/cookie.enum'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config.headers) config.headers = {}

    const token = Cookie.get(ACCESS_TOKEN)
    if (token) config.headers.Authorization = 'Bearer ' + token

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    const { response } = error

    switch (response?.status) {
      case 401:
        router.push({ name: 'Login' }).then()
        break
      case 404:
        router.push({ name: 'Error404' }).then()
        break
      case 403:
        router.push({ name: 'Error403' }).then()
        break
      case 500:
        router.push({ name: 'Error500' }).then()
        break
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
