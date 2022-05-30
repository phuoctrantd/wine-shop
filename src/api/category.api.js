import http from '../utils/http'

const URL = 'categories'

const categoryApi = {
  getCategory(config) {
    return http.get(URL, config)
  },
}

export default categoryApi