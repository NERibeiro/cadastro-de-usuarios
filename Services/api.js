
import axios from "axios"

const api = axios.create({
    baseURL:'http://localhost3000/usuarios'
})

export default api