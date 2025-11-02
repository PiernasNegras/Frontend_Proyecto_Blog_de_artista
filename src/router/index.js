import { createRouter, createWebHistory } from 'vue-router';
// Volvemos a la ruta relativa (../views/) ya que el alias @/ no está funcionando en tu entorno.
import HomeView from '../views/HomeView.vue';
import DiscografiaView from '../views/DiscografiaView.vue';
import HistoriaView from '../views/HistoriaView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/discografia',
    name: 'Discografia',
    component: DiscografiaView
  },
  {
    path: '/historia',
    name: 'Historia',
    component: HistoriaView 
  },
  // Usamos import dinámico con ruta relativa para Contacto también
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/ContactoView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;