import http from '../utils/http'

const URL = 'blog'

const blogdetailtApi = {
  getBlogDetail(id) {
    return http.get(`${URL}/${id}`)
  },
}

export default blogdetailtApi