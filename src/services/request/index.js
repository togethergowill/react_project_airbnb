import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

class lyRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use(res => res.data, err => err)
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}
const lyInstance = new lyRequest(BASE_URL, TIMEOUT)

export default  lyInstance