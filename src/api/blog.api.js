import http from '../utils/http'

const URL = 'blog'

const blogApi = {
  getBlog(config) {
    return http.get(URL, config)
  },
}

export default blogApi