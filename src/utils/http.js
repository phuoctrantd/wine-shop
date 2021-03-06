import axios from 'axios'
class Http {
    constructor() {
      this.instance = axios.create({
        baseURL: 'https://secure-ravine-88114.herokuapp.com/',
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      this.instance.interceptors.response.use(
        response => {
          const result = { data: response.data, status: response.status }
          return result
        },
        ({ response }) => {
          const result = { data: response?.data, status: response?.status }
          return Promise.reject(result)
        }
      )
      
    }
    get(url, config = null) {
      return this.instance.get(url, config)
    }
    post(url, data, config = null) {
      return this.instance.post(url, data, config)
    }
    put(url, data, config = null) {
      return this.instance.put(url, data, config)
    }
    patch(url, data, config = null) {
      return this.instance.patch(url, data, config)
    }
    delete(url, data, config = null) {
      return this.instance.delete(url, {
        data,
        ...config
      })
    }}
    const http = new Http()
    export default http