// src/router/index.js

import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DiscografiaView from '../views/DiscografiaView.vue'
import NoticiasView from '../views/NoticiasView.vue'
import BiografiaView from '../views/BiografiaView.vue' 
// Creamos una vista de marcador de posición (placeholder) para Reseñas
import ReviewsView from '../views/ReviewsView.vue' 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // ¡CORREGIDO! Ahora coincide con /discografia del Menubar
    path: '/discografia', 
    name: 'discografia',
    component: DiscografiaView
  },
  {
    path: '/noticias',
    name: 'noticias',
    component: NoticiasView
  },
  {
    path: '/biografia',
    name: 'biografia',
    component: BiografiaView
  },
  {
    // NUEVO: Agregamos una ruta para el submenú "Reseñas"
    path: '/reviews', 
    name: 'reviews',
    component: ReviewsView // Usará el nuevo componente que crearemos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router