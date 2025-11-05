import axios from 'axios';
// Configuro la instancia de Axios para conectar con el backend.
// Esta instancia se reutiliza en todos los servicios específicos.
const api = axios.create({
    baseURL: 'https://backendproyectoblogdeartista-production.up.railway.app',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
