// src/main.js - Configuración PrimeVue, Registro Global de Componentes y Tema Aura

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' 
import PrimeVue from 'primevue/config'

// --- CAMBIO CRÍTICO: Usamos el nuevo tema Aura, que maneja mejor el dark mode ---
import Aura from '@primeuix/themes/aura' 
import 'primeicons/primeicons.css' 
// --------------------------------------------------------------------------------

// --- 1. IMPORTAR COMPONENTES DE PRIME VUE (Los errores de Vue están aquí) ---
// CAMBIO CRÍTICO: Importamos los componentes, pero usamos los nombres con 'Pv'
// para que no haya conflicto con el registro global 'PvButton' y 'PvMenubar'
import PvCard from 'primevue/card' // Cambiado de Card a PvCard
import PvButton from 'primevue/button' // Cambiado de Button a PvButton
import PvMenubar from 'primevue/menubar' // Cambiado de Menubar a PvMenubar
// ---------------------------------------------

const app = createApp(App)

app.use(router) 

// --- 2. REGISTRAR COMPONENTES CON NOMBRES DE DOS PALABRAS (PvNombre) ---
// Ahora registramos PvCard, PvButton y PvMenubar (ya tienen dos palabras)
app.component('PvCard', PvCard);
app.component('PvButton', PvButton); 
app.component('PvMenubar', PvMenubar); 
// ----------------------------------------------------------------------

app.use(PrimeVue, {
    theme: {
        // Usar Aura en lugar de Lara
        preset: Aura, 
        options: {
            // Forzamos la variante 'dark' del tema Aura para que se vea negro
            theme: 'dark' 
        }
    }
})

app.mount('#app')