<template>
    <div class="video-container">
        <h1>🎬 Videografía de Almafuerte 🎬</h1>

        <input
            v-model="filtro"
            type="text"
            placeholder="Buscar por título..."
            class="buscador"
        />

        <div v-if="loading" class="loading">Cargando videos...</div>
        <div v-else-if="error" class="error">{{ error }}</div>

        <div v-else>
            <div v-for="(grupo, etapa) in videosFiltradosPorEtapa" :key="etapa" class="etapa-bloque">
                <h2 class="etapa-titulo">{{ etapa }}</h2>
                <div class="video-grid">
                    <div v-for="video in grupo" :key="video.id" class="video-card">
                        <h3>{{ video.titulo }}</h3>
                        <p>{{ video.descripcion }}</p>
                        <div class="iframe-wrapper">
                            <div v-if="!iframeCargado[video.id]" class="iframe-placeholder">
                                <span>Cargando video...</span>
                            </div>
                            <iframe
                                :src="formatYoutubeUrl(video.youtubeUrl)"
                                frameborder="0"
                                allowfullscreen
                                loading="lazy"
                                @load="iframeCargado[video.id] = true"
                            ></iframe>
                        </div>
                        <div class="ver-mas-wrapper">
                            <router-link :to="`/videos/${video.id}`" class="ver-mas-boton">
                                Ver más
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { getTodosLosVideos } from '../services/videoService';

export default {
    name: 'VideoView',
    setup() {
        const videos = ref([]);
        const loading = ref(true);
        const error = ref(null);
        const filtro = ref('');
        const iframeCargado = ref({});

        onMounted(async () => {
            try {
                const { data } = await getTodosLosVideos();
                videos.value = data;
            } catch (err) {
                console.error('Error al obtener videos:', err);
                error.value = 'No se pudieron cargar los videos';
            } finally {
                loading.value = false;
            }
        });

        const formatYoutubeUrl = (url) => {
            if (url.includes('shorts/')) {
                return url.replace('youtube.com/shorts/', 'www.youtube.com/embed/');
            }
            const match = url.match(/(?:v=|youtu\.be\/)([^&?]+)/);
            return match ? `https://www.youtube.com/embed/${match[1]}` : url;
        };

        const clasificarEtapa = (video) => {
            const t = video.titulo.toLowerCase();
            if (t.includes('v8')) return 'V8';
            if (t.includes('hermética') || t.includes('hermetica')) return 'Hermética';
            if (t.includes('almafuerte')) return 'Almafuerte';
            if (t.includes('iorio')) return 'Solista';
            return 'Otros';
        };

        const videosFiltradosPorEtapa = computed(() => {
            const agrupados = {
                V8: [],
                Hermética: [],
                Almafuerte: [],
                Solista: [],
                Otros: []
            };
            videos.value.forEach((video) => {
                if (
                    video.titulo.toLowerCase().includes(filtro.value.toLowerCase()) ||
                    video.descripcion.toLowerCase().includes(filtro.value.toLowerCase())
                ) {
                    const etapa = clasificarEtapa(video);
                    agrupados[etapa].push(video);
                }
            });
            return agrupados;
        });

        return {
            videos,
            loading,
            error,
            filtro,
            iframeCargado,
            formatYoutubeUrl,
            videosFiltradosPorEtapa
        };
    }
};
</script>

<style scoped>
.video-container {
    padding: 40px 20px;
    max-width: 1000px;
    margin: 0 auto;
    color: #f0f0f0;
}

h1 {
    text-align: center;
    color: #CC0000;
    margin-bottom: 30px;
}

.buscador {
    display: block;
    margin: 0 auto 30px auto;
    padding: 10px;
    width: 80%;
    max-width: 400px;
    border-radius: 4px;
    border: 1px solid #CC0000;
    background-color: #1e1e1e;
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

.etapa-bloque {
    margin-bottom: 50px;
}

.etapa-titulo {
    color: #CC0000;
    margin-bottom: 20px;
    border-bottom: 2px solid #CC0000;
    padding-bottom: 5px;
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
}

.video-card {
    background-color: #1e1e1e;
    padding: 20px;
    border-radius: 8px;
    border: 2px solid #CC0000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.iframe-wrapper {
    position: relative;
    width: 100%;
    height: 200px;
}

.iframe-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #1e1e1e 25%, #2a2a2a 50%, #1e1e1e 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    font-size: 0.9rem;
    border-radius: 4px;
    z-index: 1;
}

@keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}

iframe {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    z-index: 2;
    position: relative;
}

.ver-mas-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

.ver-mas-boton {
    padding: 8px 16px;
    background-color: #CC0000;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.ver-mas-boton:hover {
    background-color: #a00000;
}
</style>
