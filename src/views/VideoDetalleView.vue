<template>
    <div class="detalle-container">
        <div v-if="loading" class="loading">Cargando video...</div>
        <div v-else-if="error" class="error">{{ error }}</div>

        <div v-else class="detalle-card">
            <h1>{{ video.titulo }}</h1>
            <p class="descripcion">{{ video.descripcion }}</p>
            <p class="artista">🎤 Artista: {{ video.nombreArtista }}</p>

            <div class="iframe-wrapper">
                <iframe
                    :src="formatYoutubeUrl(video.youtubeUrl)"
                    frameborder="0"
                    allowfullscreen
                    loading="lazy"
                ></iframe>
            </div>

            <div class="navegacion-botones">
                <router-link
                    v-if="anteriorId !== null"
                    :to="`/videos/${anteriorId}`"
                    class="nav-boton"
                >
                    ← Anterior
                </router-link>

                <router-link
                    v-if="siguienteId !== null"
                    :to="`/videos/${siguienteId}`"
                    class="nav-boton"
                >
                    Siguiente →
                </router-link>
            </div>

            <router-link to="/videos" class="volver-boton">
                Volver a la videografía
            </router-link>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getVideoPorId, getTodosLosVideos } from '../services/videoService';

export default {
    name: 'VideoDetalleView',
    setup() {
        const route = useRoute();
        const video = ref(null);
        const loading = ref(true);
        const error = ref(null);
        const todos = ref([]);
        const anteriorId = ref(null);
        const siguienteId = ref(null);

        const cargarVideo = async (id) => {
            loading.value = true;
            error.value = null;
            try {
                const { data } = await getVideoPorId(id);
                video.value = data;
                calcularNavegacion(id);
            } catch (err) {
                console.error('Error al obtener el video:', err);
                error.value = 'No se pudo cargar el video';
            } finally {
                loading.value = false;
            }
        };

        const calcularNavegacion = (idActual) => {
            const index = todos.value.findIndex(v => v.id === parseInt(idActual));
            anteriorId.value = index > 0 ? todos.value[index - 1].id : null;
            siguienteId.value = index < todos.value.length - 1 ? todos.value[index + 1].id : null;
        };

        const formatYoutubeUrl = (url) => {
            if (url.includes('shorts/')) {
                return url.replace('youtube.com/shorts/', 'www.youtube.com/embed/');
            }
            const match = url.match(/(?:v=|youtu\.be\/)([^&?]+)/);
            return match ? `https://www.youtube.com/embed/${match[1]}` : url;
        };

        onMounted(async () => {
            const { data } = await getTodosLosVideos();
            todos.value = data;
            cargarVideo(route.params.id);
        });

        watch(() => route.params.id, (nuevoId) => {
            cargarVideo(nuevoId);
        });

        return {
            video,
            loading,
            error,
            anteriorId,
            siguienteId,
            formatYoutubeUrl
        };
    }
};
</script>

<style scoped>
.detalle-container {
    padding: 40px 20px;
    max-width: 800px;
    margin: 0 auto;
    color: #f0f0f0;
}

.loading {
    text-align: center;
    color: #00bcd4;
}

.error {
    text-align: center;
    color: #ff4444;
}

.detalle-card {
    background-color: #1e1e1e;
    padding: 30px;
    border-radius: 8px;
    border: 2px solid #CC0000;
    text-align: center;
}

h1 {
    color: #CC0000;
    margin-bottom: 20px;
}

.descripcion {
    margin-bottom: 10px;
    font-size: 1.1rem;
}

.artista {
    margin-bottom: 20px;
    font-style: italic;
    color: #ccc;
}

.iframe-wrapper {
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
}

iframe {
    width: 100%;
    height: 100%;
    border-radius: 4px;
}

.navegacion-botones {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.nav-boton {
    padding: 10px 16px;
    background-color: #333;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.nav-boton:hover {
    background-color: #555;
}

.volver-boton {
    display: inline-block;
    padding: 10px 16px;
    background-color: #CC0000;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.volver-boton:hover {
    background-color: #a00000;
}
</style>
