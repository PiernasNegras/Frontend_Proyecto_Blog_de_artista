<template>
    <div class="reproductor-container">
        <h2>🎧 Canciones destacadas</h2>
        <div class="lista-reproductores">
            <AudioPlayer
                v-for="(cancion, index) in canciones"
                :key="index"
                :titulo="cancion.titulo"
                :url="`${audioBaseUrl}${cancion.archivo}`"
            />
        </div>
    </div>
</template>

<script>
import AudioPlayer from './AudioPlayer.vue';

export default {
    name: 'CancionesDestacadas',
    components: { AudioPlayer },
    setup() {
        const audioBaseUrl = process.env.VUE_APP_AUDIO_BASE_URL || '';

        const canciones = [
            { titulo: 'Tú Eres Su Seguridad', archivo: '67/T__Eres_Su_Seguridad_xdoqys.mp3' },
            { titulo: 'Masa Anestesiada', archivo: '66/Masa_Anestesiada_iybvo5.mp3' },
            { titulo: 'Triunfo', archivo: '61/Triunfo_mw1mum.mp3' },
            { titulo: 'Soy de la Esquina', archivo: '60/Soy_de_la_Esquina_pt47rn.mp3' },
            { titulo: 'Si Me Estás Buscando', archivo: '60/Si_Me_Est_s_Buscando_vg5xnj.mp3' },
            { titulo: 'Sepulcro Civil', archivo: '58/Sepulcro_Civil_lqomgb.mp3' },
            { titulo: 'Ideando la Fuga', archivo: '57/Ideando_la_Fuga_xj9rob.mp3' },
            { titulo: 'Homenaje', archivo: '54/Homenaje_eza3mz.mp3' },
            { titulo: 'Gil Trabajador', archivo: '53/Gil_Trabajador_g54uye.mp3' },
            { titulo: 'Destrucción', archivo: '53/Destrucci_n_ybqlpn.mp3' },
            { titulo: 'En las Calles de Liniers', archivo: '52/En_las_Calles_de_Liniers_zvzuom.mp3' },
            { titulo: 'Almafuerte', archivo: '09/Almafuerte_gxni9f.mp3' }
        ];

        return { canciones, audioBaseUrl };
    }
};
</script>

<style scoped>
.reproductor-container {
    margin-bottom: 40px;
    text-align: center;
}

.reproductor-container h2 {
    color: #CC0000;
    margin-bottom: 20px;
    font-size: 1.2rem;
}

.lista-reproductores {
    max-height: 300px;
    overflow-y: auto;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    scrollbar-width: thin;
    scrollbar-color: #CC0000 #2a2a2a;
}

.lista-reproductores::-webkit-scrollbar {
    width: 6px;
}

.lista-reproductores::-webkit-scrollbar-track {
    background: #2a2a2a;
}

.lista-reproductores::-webkit-scrollbar-thumb {
    background-color: #CC0000;
    border-radius: 3px;
}
</style>
