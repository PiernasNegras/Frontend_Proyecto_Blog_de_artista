<template>
    <div class="audio-player">
        <h4 class="tema-titulo">{{ titulo }}</h4>
        <audio :src="url" controls preload="none"></audio>
    </div>
</template>

<script>
export default {
    name: 'AudioPlayer',
    props: {
        titulo: { type: String, required: true },
        url: { type: String, required: true }
    }
};
</script>

<style scoped>
.audio-player {
    padding: 6px 12px;
    background-color: #1e1e1e;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
}

.tema-titulo {
    font-size: 0.95rem;
    color: #f0f0f0;
    margin: 0;
    line-height: 1.2;
}

audio {
    width: 100%;
    height: 28px;
    margin: 0;
}

</style>
