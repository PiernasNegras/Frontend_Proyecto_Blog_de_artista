<template>
    <div class="discografia-container">
        <h1>💿 Discografía de Ricardo Iorio</h1>

        <div v-if="loading" class="loading">Cargando discos...</div>
        <div v-else-if="error" class="error">{{ error }}</div>

        <div v-else class="disco-grid">
            <div v-for="disco in discos" :key="disco.id" class="disco-card">
                <img :src="disco.imagenUrl" :alt="disco.nombreDisco" class="disco-imagen" />
                <h2 class="disco-titulo">{{ disco.nombreDisco }}</h2>
                <p class="disco-artista">🎤 {{ disco.nombreArtista }}</p>
                <details class="disco-temas">
                    <summary>🎶 Ver lista de temas</summary>
                    <ul>
                        <li v-for="(tema, index) in parsearTemas(disco.listaTemas)" :key="index">
                            {{ tema }}
                        </li>
                    </ul>
                </details>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getTodosLosDiscos } from '@/services/discoService';

export default {
    name: 'DiscografiaView',
    setup() {
        const discos = ref([]);
        const loading = ref(true);
        const error = ref(null);

        onMounted(async () => {
            try {
                const { data } = await getTodosLosDiscos();
                discos.value = data;
            } catch (err) {
                console.error('Error al obtener discos:', err);
                error.value = 'No se pudieron cargar los discos';
            } finally {
                loading.value = false;
            }
        });

        const parsearTemas = (lista) => {
            return lista.split(',').map(t => t.trim());
        };

        return {
            discos,
            loading,
            error,
            parsearTemas
        };
    }
};
</script>

<style scoped>
.discografia-container {
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
    color: #f0f0f0;
}

h1 {
    text-align: center;
    color: #CC0000;
    margin-bottom: 40px;
}

.loading {
    text-align: center;
    color: #00bcd4;
}

.error {
    text-align: center;
    color: #ff4444;
}

.disco-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
}

.disco-card {
    background-color: #1e1e1e;
    padding: 20px;
    border-radius: 8px;
    border: 2px solid #CC0000;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.disco-imagen {
    width: 100%;
    max-width: 220px;
    border-radius: 4px;
    margin-bottom: 15px;
}

.disco-titulo {
    color: #CC0000;
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.disco-artista {
    font-style: italic;
    color: #ccc;
    margin-bottom: 10px;
}

.disco-temas {
    width: 100%;
    text-align: left;
    margin-top: 10px;
    background-color: #2a2a2a;
    padding: 10px;
    border-radius: 4px;
    color: #f0f0f0;
}

.disco-temas summary {
    cursor: pointer;
    font-weight: bold;
    color: #CC0000;
    margin-bottom: 5px;
}

.disco-temas ul {
    padding-left: 20px;
    margin-top: 10px;
}

.disco-temas li {
    margin-bottom: 5px;
}
</style>
