import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia' // 👈 Importamos Pinia
import App from './App.vue'
import router from './router/index.js' // 👈 Importamos el Router

// Creamos la instancia de Pinia
const pinia = createPinia() 

const app = createApp(App)

// Usamos las herramientas en la aplicación
app.use(pinia) // 👈 ¡CLAVE! Habilita el gestor de estado para el reproductor
app.use(router) // 👈 ¡CLAVE! Habilita la navegación entre las 10 secciones

app.mount('#app')