<template>
 <Menubar :model="items" /> 
  <div class="content-wrapper">
    <router-view/>
  </div>
</template>

<script>
import Menubar from 'primevue/menubar'; 

export default {
  name: 'App',
  components: {
    Menubar,
  },
  data() {
    return {
      items: [
        { label: 'INICIO', icon: 'pi pi-home', to: '/' }, // <-- ¡Cambiado a 'to'!
        {
          label: 'DISCOS',
          icon: 'pi pi-bars',
          command: () => {},
          items: [
            { label: 'Discografía Completa', to: '/discografia' }, // <-- ¡Cambiado a 'to'!
            { label: 'Reseñas', to: '/reviews' } // *Debes agregar /reviews a tus rutas*
          ]
        },
        { label: 'NOTICIAS', icon: 'pi pi-megaphone', to: '/noticias' }, // <-- ¡Cambiado a 'to'!
        { label: 'BIOGRAFÍA', icon: 'pi pi-users', to: '/biografia' } // <-- ¡Cambiado a 'to'!
      ]
    };
  }
}
</script>

<style>
/* ... (Tu estilo) ... */
body, #app {
  margin: 0;
    padding: 0;
    background-color: #121212; /* Fondo muy oscuro, tipo rock */
    color: #e0e0e0; /* Letras claras */
    min-height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
/* src/App.vue -> DENTRO DEL BLOQUE <style> */

/* ... (código anterior de body, #app) ... */

/* Estilos específicos para el Menubar de PrimeVue */
.p-menubar {
    /* Forzar un fondo casi negro para que contraste */
    background: #1e1e1e !important; 
    
    /* Leve borde inferior para separarlo del contenido */
    border-bottom: 1px solid #333; 
    
    /* Centra el menú horizontalmente si es necesario */
    display: flex;
    justify-content: center;
}

.content-wrapper {
  padding: 20px;
}
</style>
