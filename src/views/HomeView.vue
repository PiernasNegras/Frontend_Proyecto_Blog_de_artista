<template>
  <div class="home-container">
    <div class="hero-section">
      <h1>🎸 BLOG OFICIAL DE ALMAFUERTE 🎸</h1>
      
      <p class="subtitle">
        "El rock del alma es la razón." — Noticias, Discografía y Biografía del metal criollo.
      </p>

      <div class="latest-news">
          <h2>Últimas Novedades</h2>
          <p>La historia continúa... <router-link to="/noticias" class="link-noticias">Ver todas las noticias</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
/* Estilos para el contenedor principal de la Home */
.home-container {
  padding: 60px 20px;
  text-align: center;
}

.hero-section h1 {
  /* Letra más grande para el título principal */
  font-size: 3rem; 
  margin-bottom: 0.5rem;
  color: #ff9900; /* Color llamativo (naranja/oro) para contrastar el fondo oscuro */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
}

.subtitle {
  font-size: 1.5rem;
  color: #c0c0c0;
  margin-bottom: 40px;
}

.latest-news h2 {
    color: #f0f0f0;
    border-bottom: 2px solid #ff9900;
    padding-bottom: 10px;
    display: inline-block; /* Para que el borde no ocupe todo el ancho */
    margin-top: 60px;
}

.link-noticias {
    color: #00bcd4; /* Un color de enlace que destaque */
    text-decoration: none;
    font-weight: bold;
}
.link-noticias:hover {
    text-decoration: underline;
}
</style>