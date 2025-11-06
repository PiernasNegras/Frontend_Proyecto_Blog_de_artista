<template>
    <div class="reproductor-container">
        <h1>🎧 Reproductor de canciones destacadas</h1>
        <CancionesDestacadas />
    </div>
</template>

<script>
import CancionesDestacadas from '@/components/CancionesDestacadas.vue';

export default {
    name: 'ReproductorView',
    components: { CancionesDestacadas }
};
</script>

<style scoped>
.reproductor-container {
    padding: 40px 20px;
    max-width: 800px;
    margin: 0 auto;
    color: #f0f0f0;
    text-align: center;
}

h1 {
    color: #CC0000;
    margin-bottom: 30px;
}
</style>
