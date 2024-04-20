import axios, { AxiosError, InternalAxiosRequestConfig } from "axios"

const BASE_URL = "http://localhost:3000/"

interface AxiosErrorType extends AxiosError {
  config: AxiosConfigType
}

interface AxiosConfigType extends InternalAxiosRequestConfig {
  _retries: number
}

export const $api = axios.create({
  baseURL: BASE_URL,
})

$api.interceptors.request.use((config) => {
  // имитируем 50% шанс, что вернется ошибка
  if (Math.random() < 0.5) {
    config.url = "error"
  }
  return config
})

$api.interceptors.response.use(
  (config) => config,
  async (error: AxiosErrorType) => {
    const originalRequest = error.config
    originalRequest._retries ??= 0

    if (originalRequest._retries < 2) {
      originalRequest._retries += 1
      originalRequest.url = "tickets"

      return new Promise((resolve) => {
        setTimeout(() => resolve($api.request(originalRequest)), 2000)
      })
    } else {
      return error.response
    }
  },
)
