import axios from 'axios';
// Configuro la instancia de Axios para conectar con el backend.
// Esta instancia se reutiliza en todos los servicios específicos.
const api = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
