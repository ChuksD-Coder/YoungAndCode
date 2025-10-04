import axios from 'axios'

const api = axios.create({
  baseURL: '/api', // IMPORTANT: relative path, works with Vite proxy
  timeout: 8000,
})

export default api
