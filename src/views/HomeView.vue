<template>
    <div class="home-container">
        <div class="hero-section">

            <img :src="almafuerteLogo" alt="Logo de Almafuerte" class="main-logo" />
            <p class="subtitle">
                "El rock del alma es la razón." — Noticias, Discografía y Biografía del metal criollo.
            </p>

        </div>

        <!-- Estados de carga y error -->
        <div v-if="loading" class="loading">Cargando datos del artista...</div>
        <div v-else-if="error" class="error">No se pudieron cargar los datos</div>

        <!-- Datos del artista -->
        <div v-else-if="artista" class="artista-section">
            <img :src="artista.fotoPerfilPrincipal" alt="Foto del artista" class="foto-artista" />
            <h2 class="nombre-artista">{{ artista.nombreReal }}</h2>
            <p class="bio-resumen">{{ bioResumen }}</p>
            <router-link to="/biografia" class="link-noticias">Leer biografía completa</router-link>
        </div>
    </div>
</template>

<script>
// Importa el logo de Almafuerte
import almafuerteLogo from '../img/malvinas.jpg';
// importo el servicio de artista.
import { getArtistaCompleto } from '../services/artistaService.js';
import { ref, onMounted, computed } from 'vue';

export default {
    name: 'HomeView',
    setup() {
    const artista = ref(null);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
        try {
            const { data } = await getArtistaCompleto();
            artista.value = data;
        } catch (err) {
            console.error(
            'Error al obtener datos del artista:',
            err.response ? err.response.data : err.message
            );
            error.value = err.message || 'Error desconocido';
        } finally {
            loading.value = false;
        }
    });

    const bioResumen = computed(() => {
        if (!artista.value?.biografia?.biografiaCompleta) return '';
        const texto = artista.value.biografia.biografiaCompleta;
        return texto.length > 300 ? texto.slice(0, 300) + '...' : texto;
    });

    return { almafuerteLogo, artista, loading, error, bioResumen };
    }
};
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
    max-width: 100%;
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    display: block;
    margin: 0 auto 30px auto;
    border-bottom: 5px solid #CC0000;
    padding-bottom: 10px;
}


.hero-section h1 {
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

.artista-section {
    margin-top: 60px;
    color: #f0f0f0;
    text-align: center;
}

.foto-artista {
    max-width: 220px;
    border-radius: 8px;
    margin-bottom: 20px;
    border: 3px solid #cc0000;
}

.nombre-artista {
    font-size: 2rem;
    color: #cc0000;
    margin-bottom: 10px;
}

.bio-resumen {
    font-size: 1.1rem;
    color: #c0c0c0;
    margin-bottom: 20px;
}

.loading {
    color: #00bcd4;
    font-size: 1.2rem;
    margin-top: 40px;
}

.error {
    color: #ff4444;
    font-size: 1.2rem;
    margin-top: 40px;
}
</style>
