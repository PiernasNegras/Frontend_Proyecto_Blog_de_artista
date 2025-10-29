// src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' 

import PrimeVue from 'primevue/config'

// --- 1. Importar el PRESET LARA (Más robusto) ---
import Lara from '@primeuix/themes/lara' 
// --------------------------------------------------

import 'primeicons/primeicons.css' 
import Card from 'primevue/card'
import Panel from 'primevue/panel';
const app = createApp(App)

app.use(router) 
app.component('PvCard', Card);
app.component('PvPanel', Panel);
// --- 2. USAR EL PRESET CON LA OPCIÓN DE MODO OSCURO ---
app.use(PrimeVue, {
    theme: {
        preset: Lara, // Usamos el preset Lara
        options: {
            // Este selector asegura que Vue cargue la versión oscura del tema.
            darkModeSelector: 'dark' 
        }
    }
})
// -------------------------------------------------------

app.mount('#app')