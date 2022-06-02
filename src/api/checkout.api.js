import http from '../utils/http'
 const URL = 'checkout'
 const checkoutApi = {
     checkout(data) {
         return http.post(URL,data)
     }
 }
 export default checkoutApi