<template>
  <div class="biografia-container">
    
    <h1>📜 Historia de Almafuerte y el Metal Criollo 📜</h1>

    <PvPanel header="Ricardo Iorio: Un Legado Inmortal" class="biografia-panel">
      
      <div class="p-grid p-nogutter">
        
        <div class="p-col-12 p-md-8 text-content">
          <p>
            Almafuerte, fundada por el ícono del metal argentino **Ricardo Iorio** tras la disolución de Hermética en 1995, se erigió rápidamente como el pilar fundamental del denominado "metal criollo". Su nombre, un tributo al poeta argentino Pedro Bonifacio Palacios (Almafuerte), refleja la conexión profunda de la banda con las raíces y la identidad nacional.
          </p>
          <p>
            La banda no fue solo un proyecto musical, sino un manifiesto cultural. Álbumes como *Mundo Guanaco* (1995) y *Del Entorno* (1996) capturaron la esencia del sentir popular argentino, con letras cargadas de crítica social, filosofía y un profundo arraigo al idioma. Iorio, como letrista, llevó el metal a un terreno de poesía épica y confrontación.
          </p>
          <p>
            A lo largo de sus más de dos décadas de trayectoria, Almafuerte pasó por diversas formaciones, pero mantuvo a Iorio como su alma y motor inmutable. Su música se convirtió en la banda sonora de varias generaciones que vieron en sus riffs pesados y su lírica contundente un espejo de su propia realidad. Almafuerte es, sin duda, una leyenda viva de la música popular argentina.
          </p>
        </div>
        
        <div class="p-col-12 p-md-4 image-content">
          <img 
            src="https://primefaces.org/cdn/primevue/images/usercard.png" 
            alt="Ricardo Iorio" 
            class="iorio-image"
          />
        </div>
      </div>
      
    </PvPanel>
    
  </div>
</template>

<script>
import PvPanel from 'primevue/panel'; // Importamos el componente (aunque esté globalmente)

export default {
  name: 'BiografiaView',
  components: {
    PvPanel
  }
}
</script>
<style scoped>
.biografia-container {
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #ff9900; /* Color de acento */
  margin-bottom: 30px;
}

/* --- CLAVE: FORZAR ESTILO OSCURO AL PANEL --- */
.biografia-panel {
    /* Fondo oscuro para que contraste con el fondo general */
    background-color: #1e1e1e !important; 
    border: 1px solid #ff9900 !important;
}

/* Forzar el color del texto del encabezado del Panel */
:deep(.p-panel-header) {
    background-color: #333333 !important; /* Fondo sutil para el header */
    color: #ff9900 !important;
    border-color: #ff9900 !important;
}

/* Forzar el color del texto del contenido del Panel */
:deep(.p-panel-content) {
    background-color: #1e1e1e !important; 
    color: #e0e0e0;
    line-height: 1.6;
}
/* -------------------------------------------------------- */


/* Estilos para el layout de imagen y texto */
.p-grid {
    display: flex;
    flex-wrap: wrap; /* Permite que las columnas se apilen en móviles */
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
    border-radius: 8px; /* Borde suave para la imagen */
    border: 3px solid #ff9900;
}

/* Ajuste para pantallas pequeñas */
@media (max-width: 768px) {
    .text-content {
        padding-right: 0;
        margin-bottom: 20px;
    }
}
</style>