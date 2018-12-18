import axios from 'axios'
import router from '../router'

const Domain = 'http://localhost:3000'
const UNAUTHORIZED = 401
const onUnauthorized = () => {
  router.push('/login')
}

const request = (method, url, data) => {
  return axios({
    method,
    url: Domain + url,
    data,
  }).then(result => result.data)
    .catch(result => {
      const { status } = result.response
      if (status === UNAUTHORIZED) return onUnauthorized()
      throw result.response
    })
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

export const board = {
  fetch (id) {
    return id ? request('get', `/boards/${id}`) : request('get', '/boards')
  },
  create (title) {
    return request('post', '/boards', { title })
  },
  destroy (id) {
    return request('delete', `/boards/${id}`)
  },
}

export const auth = {
  login (email, password) {
    return request('post', '/login', { email, password })
  },
}

export const card = {
  create (title, listId, pos) {
    return request('post', '/cards', { title, listId, pos })
  },
  fetch (id) {
    return request('get', `/cards/${id}`)
  },
  update (id, data) {
    return request('put', `/cards/${id}`, data).then(({ data }) => data)
  },
  destroy (id) {
    return request('delete', `/cards/${id}`)
  },
}
