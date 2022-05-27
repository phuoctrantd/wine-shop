import http from '../utils/http'

const URL = 'products'

const productdetailtApi = {
  getProductDetail(id) {
    return http.get(`${URL}/${id}`)
  },
}

export default productdetailtApi