import api from './api'; // Servicio para obtener información de videos desde el backend.

// Devuelve la lista completa de videoclips y entrevistas.
export const getTodosLosVideos = () => api.get('/videos');

// Devuelve los detalles de un video específico por ID.
export const getVideoPorId = (id) => api.get(`/videos/${id}`);

