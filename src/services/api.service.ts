import axiosInstance from '@/plugins/axios'
import { formatJsonToUrlParams, instanceObject } from '@/shared/utils/format'
import { AxiosResponse } from 'axios'

const ApiService = {
  get<T = any> (url: string, data?: object): Promise<AxiosResponse<T>> {
    return axiosInstance.get(url, { params: data })
  },

  post<T = any> (url: string, data?: object, config?: object): Promise<AxiosResponse<T>> {
    return axiosInstance.post(url, data, config)
  },

  put<T = any> (url: string, data?: object, config?: object): Promise<AxiosResponse<T>> {
    return axiosInstance.put(url, data, config)
  },

  delete<T = any> (url: string, config?: object): Promise<AxiosResponse<T>> {
    return axiosInstance.delete(url, config)
  },

  upload: (url: string, file: FormData | File) =>
    axiosInstance.post(url, file, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }),

  download: (url: string, data: instanceObject) => {
    window.location.href = `${process.env.VUE_APP_ROOT_API}/${url}?${formatJsonToUrlParams(data)}`
  }
}

export default ApiService
