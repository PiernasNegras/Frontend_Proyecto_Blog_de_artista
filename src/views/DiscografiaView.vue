
<template>
  <div class="discografia-container">
    <h1>💿 Discografía Oficial de Almafuerte 💿</h1>
    
    <div class="albums-grid">
      <PvCard v-for="album in discografia" :key="album.titulo" class="album-card">
        
        <template #header>
          <img alt="Carátula del Álbum" :src="album.imagenUrl" class="album-cover"/>
        </template>
        
        <template #title>
          {{ album.titulo }}
        </template>
        
        <template #subtitle>
          Año: {{ album.anio }}
        </template>
        
        <template #content>
          <p>{{ album.descripcion }}</p>
        </template>
        
        <template #footer>
          <Button label="Ver Detalles" icon="pi pi-headphones" icon-pos="left" severity="help" />
        </template>
      </PvCard>
    </div>
  </div>
</template>

<script>
// Importamos los componentes que vamos a usar en esta vista
import PvCard from 'primevue/card'; // Asumiendo que registraste Card como PvCard
import Button from 'primevue/button';

export default {
  name: 'DiscografiaView',
  components: {
    PvCard,
    Button
  },
  data() {
    return {
      discografia: [
        {
          titulo: 'Mundo Guanaco',
          anio: 1995,
          descripcion: 'El debut, con himnos como "A Fondo Blanco" y "Desencuentro".',
          imagenUrl: 'https://i.imgur.com/kS5x84O.jpeg' // Placeholder
        },
        {
          titulo: 'Del Entorno',
          anio: 1996,
          descripcion: 'Consolidación del estilo, incluyendo "Almafuerte".',
          imagenUrl: 'https://i.imgur.com/G5qWf0z.png' // Placeholder
        },
        {
          titulo: 'A Fondo Blanco',
          anio: 1999,
          descripcion: 'Álbum grabado en vivo, con la energía cruda de sus shows.',
          imagenUrl: 'https://i.imgur.com/H1gQzJ8.jpeg' // Placeholder
        }
        // Puedes agregar más álbumes aquí
      ]
    }
  }
}
</script>
<style scoped>
.discografia-container {
  padding: 40px 20px;
}

h1 {
  text-align: center;
  color: #ff9900; /* Color de acento para el título */
  margin-bottom: 40px;
}

.albums-grid {
  display: grid;
  /* Muestra 3 columnas en pantallas grandes */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px; /* Espacio entre tarjetas */
  max-width: 1200px;
  margin: 0 auto; /* Centra la grilla */
}

/* --- CLAVE: FORZAR ESTILO OSCURO A LAS TARJETAS --- */
.album-card {
    background-color: #212121 !important; 
    border: 1px solid #ff9900 !important; 
    color: #e0e0e0 !important;
}

.album-cover {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 6px 6px 0 0; 
}

/* Arreglo de subtítulos (año) dentro de la tarjeta */
:deep(.p-card-subtitle) {
    color: #aaaaaa !important; 
}
</style>
