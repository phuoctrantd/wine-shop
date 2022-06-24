import http from '../utils/http'
 const URL = 'checkout'
 const checkoutApi = {
     checkout(data) {
         return http.post(URL,data)
     },
     getTracking(tracking) {
        return http.get(`${URL}/${tracking}`)
      },
      
 }
 export default checkoutApi