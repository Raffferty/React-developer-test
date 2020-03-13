import axios from 'axios'

const url = 'http://newsapi.org/v2/top-headlines?' +
          'country=ua&' +
          'apiKey=cdb8e5a7893f441cac3a22da6380b1c2';

const instance = axios.create({
  baseURL: url,
})

instance.interceptors.response.use(
  response => {
    return response
  },
  function(error) {
    const errorText = `${error.response.status} (${error.response.statusText})`

    return Promise.reject(errorText)
  }
)

export default instance
