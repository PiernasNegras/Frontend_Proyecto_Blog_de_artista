<template>
  <div class="biografia-container">
    <h1>📜 Historia de Almafuerte y el Metal Criollo 📜</h1>

    <PvPanel header="Ricardo Iorio: Un Legado Inmortal" class="biografia-panel">
      <div class="p-grid p-nogutter">
        <!-- Texto biográfico -->
        <div class="p-col-12 p-md-8 text-content">
          <p v-if="biografia">{{ biografia.biografiaCompleta }}</p>
          <p v-else>Cargando biografía...</p>
        </div>

        <!-- Imagen del artista -->
        <div class="p-col-12 p-md-4 image-content">
          <img
            v-if="biografia"
            :src="biografia.imagenFondoUrl"
            :alt="biografia.nombreArtista"
            class="iorio-image"
          />
        </div>
      </div>
    </PvPanel>
  </div>
</template>

<script>
import PvPanel from 'primevue/panel';
import { getBiografia } from '../services/artistaService';
import { ref, onMounted } from 'vue';

export default {
  name: 'BiografiaView',
  components: {
    PvPanel
  },
  setup() {
    const biografia = ref(null);
    const error = ref(null);

    onMounted(async () => {
      try {
        const { data } = await getBiografia();
        biografia.value = data;
      } catch (err) {
        console.error('Error al obtener biografía:', err);
        error.value = 'No se pudo cargar la biografía';
      }
    });

    return { biografia, error };
  }
};
</script>

<style scoped>
.biografia-container {
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #CC0000;
  margin-bottom: 30px;
}

.biografia-panel {
  background-color: #000000 !important;
  border: 1px solid #CC0000 !important;
}

:deep(.p-panel-header) {
  background-color: #333333 !important;
  color: #CC0000 !important;
  border-color: #CC0000 !important;
}

:deep(.p-panel-content) {
  background-color: #1e1e1e !important;
  color: #e0e0e0;
  line-height: 1.6;
}

.p-grid {
  display: flex;
  flex-wrap: wrap;
}

.text-content {
  padding-right: 20px;
}

.image-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.iorio-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  border: 3px solid #CC0000;
}

@media (max-width: 768px) {
  .text-content {
    padding-right: 0;
    margin-bottom: 20px;
  }
}
</style>
