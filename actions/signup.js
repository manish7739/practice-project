import axios from 'axios'
export default {
  async signup(data, cb) {
    try {
      // console.log(process.env.post)
      const res = await axios.post(`${process.env.baseUrl}`, data)
      console.log(res)
      if (res && res.data.status == 201) {
        cb(null, res.data.data)
      } else {
        cb(res.data.message, null)
      }
    } catch (error) {
      console.log(error)
    }
  },
}
