import api from './api'; // Servicio para obtener información de discos desde el backend.

// Devuelve la lista completa de discos.
export const getTodosLosDiscos = () => api.get('/discos');

// Devuelve los detalles de un disco específico por ID.
export const getDiscoPorId = (id) => api.get(`/discos/${id}`);

