<template>
  <div class="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <PvCard style="width: 25em">
      <template #header>
        <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" class="w-full h-48 object-cover"/>
      </template>
      <template #title>
        El nuevo álbum de Iorio
      </template>
      <template #subtitle>
        15 de Octubre, 2025
      </template>
      <template #content>
        <p>
          Ricardo Iorio ha anunciado el lanzamiento de su próximo material discográfico, explorando ritmos...
        </p>
      </template>
      <template #footer>
        <Button label="Leer Más" icon="pi pi-angle-right" icon-pos="right" severity="secondary" />
      </template>
    </PvCard>

    </div>
</template>

<script>
import Button from 'primevue/button'; // Importamos el botón aquí porque lo usamos en esta vista.

export default {
  name: 'NoticiasView',
  components: {
    Button // Registramos el Button
  }
}
</script>

<style scoped>

/* --- ESTILOS DE TU LAYOUT (Ya estaban) --- */
.p-4 {
    padding: 1rem;
}

.grid {
    display: grid;
    justify-content: center;
}
/* ----------------------------------------- */


/* --- NUEVO CSS PARA OSCURECER LA TARJETA (AÑADIDO AQUÍ) --- */
/* Esta clase apunta a todas las tarjetas de PrimeVue */
.p-card {
    /* Fondo oscuro para la tarjeta */
    background-color: #000000!important; 
    
    /* El borde de la tarjeta lo hacemos gris oscuro o del color de acento */
    border: 1px solid #CC0000 !important; 
    
    /* Aseguramos que el texto dentro de la tarjeta sea claro */
    color: #e0e0e0 !important;
}

/* También arreglamos el color del subtítulo si sigue oscuro */
.p-card .p-card-subtitle {
    color: #aaaaaa !important; 
}
/* -------------------------------------------------------- */

</style>