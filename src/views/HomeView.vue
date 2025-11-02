<template>
    <div class="home-container">
        <div class="hero-section">
            <img :src="almafuerteLogo" alt="Logo de Almafuerte" class="main-logo" />

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
// Importa el logo de Almafuerte
import almafuerteLogo from '../img/malvinas.jpg'; 

export default {
    name: 'HomeView',
    data() {
        return {
            // Hacemos la imagen accesible en la plantilla
            almafuerteLogo: almafuerteLogo 
        };
    }
}
</script>

<style scoped>
/* Estilos para el contenedor principal de la Home */
.home-container {
    padding: 60px 20px;
    text-align: center;
    min-height: 100vh;
    background-color: #000000;
}

/* Estilo para la nueva imagen */
.main-logo {
    max-width: 3000px; /* Ajusta el ancho */
    height: auto;
    display: block; 
    margin: 0 auto 30px auto; /* Centra y da espacio */
    border-bottom: 5px solid #CC0000; 
    padding-bottom: 10px;
}

.hero-section h1 {
    /* Letra más grande para el título principal */
    font-size: 3rem; 
    margin-bottom: 0.5rem;
    color: #CC0000; 
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
}

.subtitle {
    font-size: 1.5rem;
    color: #c0c0c0;
    margin-bottom: 40px;
}

.latest-news h2 {
    color: #f0f0f0;
    border-bottom: 2px solid #CC0000;
    padding-bottom: 10px;
    display: inline-block; 
    margin-top: 60px;
}

.link-noticias {
    color: #00bcd4; 
    text-decoration: none;
    font-weight: bold;
}
.link-noticias:hover {
    text-decoration: underline;
}
</style>