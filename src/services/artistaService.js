import api from './api'; // Servicio para obtener datos del artista desde el backend.


// Devuelve el perfil completo del artista con discos, videos y biografía.
export const getArtistaCompleto = () => api.get('/artista');

// Devuelve solo el texto biográfico y la imagen de fondo.
export const getBiografia = () => api.get('/artista/biografia');

