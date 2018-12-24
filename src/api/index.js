import axios from 'axios'
import router from '../router'

const domain = 'http://localhost:3000'
const Unauthorized = 401
const onUnauthorized = () => {
  router.push(`/login?returnPath=${encodeURIComponent(location.pathname)}`)
}

const request = {
  get (path) {
    return axios.get(`${domain + path}`)
      .catch(({ response }) => {
        const { status } = response
        if (status === Unauthorized) return onUnauthorized()
        throw Error(response)
      })
  },
  post (path, data) {
    return axios.post(`${domain + path}`, data)
  },
  delete (path) {
    return axios.delete(`${domain + path}`)
  },
  put (path, data) {
    return axios.put(`${domain + path}`, data)
  },
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

export const auth = {
  login (email, password) {
    return request.post('/login', { email, password })
  },
}

export const board = {
  fetch (id) {
    return id ? request.get(`/boards/${id}`) : request.get('/boards')
  },
  create (title) {
    return request.post('/boards', { title })
  },
  destroy (id) {
    return request.delete(`/boards/${id}`)
  },
  update (id, payload) {
    return request.put(`/boards/${id}`, payload)
  },
}

export const list = {
  create (payload) {
    return request.post('/lists', payload)
  },
  update (id, payload) {
    return request.put(`/lists/${id}`, payload)
  },
  destroy (id) {
    return request.delete(`/lists/${id}`)
  },
}

export const card = {
  create (title, listId, pos) {
    return request.post('/cards', { title, listId, pos })
  },
  fetch (id) {
    return request.get(`/cards/${id}`)
  },
  update (id, data) {
    return request.put(`/cards/${id}`, data).then(({ data }) => data)
  },
  destroy (id) {
    return request.delete(`/cards/${id}`)
  },
}
