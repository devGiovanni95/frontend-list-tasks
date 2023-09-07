import axios from "axios"
import dotenv from 'dotenv'

const api = axios.create({
  baseURL: process.env.API_URL
 // baseURL: "http://localhost:3001" // url da api - aqui podemos utilizar variáveis de ambiente para definir a url
})

export default api