<template>
  <div id="app-container">
    <!-- Usamos PvMenubar porque lo registramos así en main.js -->
    <PvMenubar :model="items">
      <!-- Slot #start: Usamos este slot para añadir un logo al menú -->
      <template #start>
          <div class="logo-container">
            <span class="logo-text">⚡ ALMAFUERTE BLOG</span>
          </div>
      </template>
    </PvMenubar>
    
    <div class="content-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      items: [
        {
          label: 'Inicio',
          icon: 'pi pi-home',
          // CRÍTICO: Usamos command para forzar la navegación a través del router
          command: () => { this.$router.push('/'); } 
        },
        {
          label: 'Biografia',
          icon: 'pi pi-book',
          command: () => { this.$router.push('/biografia'); }
        },
        {
          label: 'Discografía',
          icon: 'pi pi-palette',
          command: () => { this.$router.push('/discografia'); }
        },
        {
          label: 'Videos',
          icon: 'pi pi-youtube',
          command: () => { this.$router.push('/videos'); }
        },
        {
          label: 'Contacto',
          icon: 'pi pi-envelope',
          command: () => { this.$router.push('/contacto'); }
        }
      ]
    }
  }
}
</script>

<style>
/* Estilos globales de la aplicación */
#app-container {
  background-color: #121212; /* Fondo oscuro tipo rock */
  color: #e0e0e0; /* Letras claras */
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

/* --- ESTILOS DEL LOGO --- */
.logo-container {
  padding-right: 20px;
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 1.2rem;
  font-weight: bold;
  color: #CC0000; /* Color de acento de Almafuerte */
  letter-spacing: 1px;
}


/* --- ESTILOS ESPECÍFICOS DEL MENUBAR (Asegurar Dark Mode) --- */
.p-menubar {
  /* Forzamos el color para evitar problemas de temas */
  background: #000000 !important; 
  border-bottom: 2px solid #CC0000; /* Borde de color de acento */
  border-radius: 0 !important; /* Es un menú superior, quitamos redondeo */
}

/* Asegurar que los íconos y textos del menú sean blancos */
.p-menuitem-text,
.p-menuitem-icon {
  color: #e0e0e0 !important;
}

/* Resaltar el enlace activo/hover */
.p-menubar .p-menuitem .p-menuitem-link:hover {
    background-color: #000000 !important; 
}

/* Estilo para el enlace activo */
.p-menubar .p-menuitem.router-link-active .p-menuitem-link {
  background-color: #CC0000!important; /* El botón activo usa el color de acento */
  color: #121212 !important; 
  font-weight: bold;
}

.content-wrapper {
  padding: 20px;
}
</style>
