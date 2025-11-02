<template>
<div class="discografia-container">
    <h1>💿 Discografía Oficial de Almafuerte 💿</h1>

    <div v-if="audioMessage.length > 0" class="audio-message shadow-xl">
        <p class="font-bold mb-2">{{ audioMessage }}</p>
        <p class="text-xs italic opacity-80 mt-1">
            ⚠️ Esta es una **simulación de Riff Inicial**. El sistema no puede cargar clips de 30 segundos de canciones con derechos de autor.
        </p>
        <PvButton 
            icon="pi pi-times" 
            severity="contrast"
            class="p-button-rounded p-button-text p-button-sm absolute top-2 right-2" 
            @click="audioMessage = ``" 
        />
    </div>

    <div class="albums-grid">
        <PvCard v-for="(album, index) in discografia" :key="album.titulo" class="album-card">
        
            <template #header>
                <img alt="Carátula del Álbum" :src="album.imagenUrl" class="album-cover"/>
            </template>
            
            <template #title>
                {{ album.titulo }}
            </template>
            
            <template #subtitle>
                Año: {{ album.anio }}
            </template>
            
            <template #content>
                <p>{{ album.descripcion }}</p>
                
                <div v-if="album.mostrarDetalles" class="detalles-extra">
                    <h3 class="font-bold mt-3 text-lg text-amber-500">Pistas Destacadas:</h3>
                    <ul class="ml-0 mt-2 space-y-2">
                        <li v-for="pista in album.pistas" :key="pista" class="pista-item flex justify-between items-center">
                            <span class="text-base">{{ pista }}</span>
                            <PvButton 
                                icon="pi pi-play" 
                                label="Play Riff"
                                severity="success" 
                                class="p-button-rounded p-button-sm ml-2 p-button-text" 
                                @click.stop="playPista(pista)" 
                            />
                        </li>
                    </ul>
                    <p class="mt-3 text-sm font-medium">
                        <span class="font-bold text-amber-500">Formato:</span> {{ album.formato }}
                    </p>
                </div>
            </template>

            <template #footer>
                <PvButton 
                    :label="album.mostrarDetalles ? 'Ocultar Detalles' : 'Ver Detalles'" 
                    :icon="album.mostrarDetalles ? 'pi pi-times' : 'pi-headphones'" 
                    icon-pos="left" 
                    :severity="album.mostrarDetalles ? 'danger' : 'help'"
                    @click="alternarDetalles(index)" 
                />
            </template>
        </PvCard>
    </div>
</div>
</template>

<script>
// Importaciones de PrimeVue para Card y Button
import Card from 'primevue/card';
import Button from 'primevue/button';
import mundoGuanacoCover from '../img/mundoguanaco.jpeg';
import delEntornoCover from '../img/almafuerte-del-entorno.jpeg';
import aFondoBlancoCover from '../img/afondoblanco.jpeg';


export default {
    name: 'DiscografiaView',
    // Registro de Componentes
    components: {
        PvCard: Card,
        PvButton: Button,
    },
    data() {
        return {
            audioMessage: ``,
            discografia: [
                {
                    titulo: "Mundo Guanaco",
                    anio: 1995,
                    descripcion: "El debut, con himnos como &quot;A Fondo Blanco&quot; y &quot;Desencuentro&quot;.",
                    imagenUrl: mundoGuanacoCover,
                    pistas: ["A Fondo Blanco", "Desencuentro", "El Pibe Tigre", "De la Carne"],
                    formato: "CD, Vinilo",
                    mostrarDetalles: false
                },
                {
                    titulo: "Del Entorno",
                    anio: 1996,
                    descripcion: "Consolidación del estilo, incluyendo el tema homónimo &quot;Almafuerte&quot;.",
                    imagenUrl: delEntornoCover,
                    pistas: ["Del Entorno", "Darse Entero", "Ser Humano", "Voy a Encarar"],
                    formato: "CD, Cassette",
                    mostrarDetalles: false
                },
                {
                    titulo: "A Fondo Blanco (En Vivo)",
                    anio: 1999,
                    descripcion: "Álbum grabado en vivo, con la energía cruda de sus shows en Obras.",
                    imagenUrl: aFondoBlancoCover,
                    pistas: ["Aguante Bonavena", "El Visitante", "Sé Vos", "Tango Caballo"],
                    formato: "CD Doble",
                    mostrarDetalles: false
                }
            ]
        }
    },
    methods: {
        // Funciòn para alternar los detalles de la tarjeta
        alternarDetalles(index) {
            this.discografia[index].mostrarDetalles = !this.discografia[index].mostrarDetalles;
        },

        // 🛑 FUNCIÓN MEJORADA CON SONIDO MÁS METÁLICO
        playPista(trackTitle) {
            // Mostrar mensaje de simulación
            this.audioMessage = `Reproduciendo riff de "${trackTitle}"`;

            // 1. Crear contexto de audio y oscilador (la 'cuerda' de la guitarra)
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const audioCtx = new AudioContext();
            const oscillator = audioCtx.createOscillator();
            
            // 2. Crear un nodo de Ganancia (para volumen y simular overdrive)
            const gainNode = audioCtx.createGain();
            gainNode.gain.value = 0.5; // Volumen inicial

            // 3. Crear un nodo Waveshaper (la clave de la distorsión/fuzz)
            const waveshaper = audioCtx.createWaveShaper();
            waveshaper.curve = this.makeDistortionCurve(50); // Factor de distorsión (50 es un buen metal)

            // 4. Conectar los nodos: Oscilador -> Distorsión -> Ganancia -> Salida
            oscillator.connect(waveshaper);
            waveshaper.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            // 5. Configurar el sonido (Power Chord: C4/G4)
            oscillator.type = 'sawtooth'; // La onda de sierra suena más áspera (metal)
            oscillator.frequency.setValueAtTime(261.63, audioCtx.currentTime); // Frecuencia de C4

            // Simular un 'Power Chord' tocando rápidamente dos notas
            oscillator.frequency.linearRampToValueAtTime(392.00, audioCtx.currentTime + 0.05); // G4 (la quinta)

            // 6. Iniciar y detener
            oscillator.start();
            
            // Detener después de 1 segundo (duración del riff)
            setTimeout(() => {
                oscillator.stop();
                audioCtx.close(); 
            }, 1000);
        },
        
        // 🛑 FUNCIÓN AUXILIAR PARA CREAR LA CURVA DE DISTORSIÓN (FUZZ)
        makeDistortionCurve(amount) {
            let k = typeof amount === 'number' ? amount : 50,
                n_samples = 44100,
                curve = new Float32Array(n_samples),
                deg = Math.PI / 180,
                i = 0,
                x;
            for ( ; i < n_samples; ++i ) {
                x = i * 2 / n_samples - 1;
                curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
            }
            return curve;
        }
    }
};
</script>

<style scoped>
/* Estilos Globales del Contenedor */
.discografia-container {
padding: 40px 20px;
background-color: #000000;
min-height: 100vh;
color: #e0e0e0;
position: relative;
}

/* ESTILO DEL MENSAJE DE AUDIO FLOTANTE */
.audio-message {
position: fixed;
top: 20px;
left: 50%;
transform: translateX(-50%);
z-index: 1000;
background-color: #CC0000;
color: white;
padding: 15px 50px 15px 20px;
border-radius: 8px;
max-width: 90%;
text-align: left;
display: flex;
flex-direction: column;
align-items: flex-start;
animation: fade-in 0.3s ease-out;
border: 2px solid #CC0000;
}

@keyframes fade-in {
from { opacity: 0; transform: translate(-50%, -20px); }
to { opacity: 1; transform: translate(-50%, 0); }
}

h1 {
text-align: center;
color: #CC0000;
margin-bottom: 40px;
font-size: 2.5rem;
letter-spacing: 1px;
text-shadow: 0 0 10px rgba(255, 153, 0, 0.5);
}

.albums-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 30px;
max-width: 1200px;
margin: 0 auto;
}

/* Estilos de la Tarjeta de Álbum (PvCard) */
.album-card {
background-color: #212121 !important;
border: 2px solid #CC0000 !important;
color: #e0e0e0 !important;
border-radius: 12px;
overflow: hidden;
box-shadow: 0 6px 15px rgba(0, 0, 0, 0.7);
transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.album-card:hover {
transform: translateY(-8px);
box-shadow: 0 15px 25px rgba(255, 153, 0, 0.3);
}

.album-cover {
width: 100%;
height: auto;
object-fit: cover;
display: block;
}

/* Estilos para la sección de detalles que aparece al hacer clic */
.detalles-extra {
margin-top: 15px;
padding: 15px;
background-color: #000000;
border-radius: 8px;
border-left: 4px solid #CC0000;
animation: slide-in 0.4s ease-out;
}

/* Estilo para cada elemento de la pista */
.pista-item {
font-size: 0.9em;
color: #cccccc;
line-height: 1.5;
padding: 5px 0;
border-bottom: 1px solid #444;
list-style: none;
}
.pista-item:last-child {
border-bottom: none;
}

/* Animación simple de slide y fade */
@keyframes slide-in {
from { opacity: 0; transform: translateY(15px); }
to { opacity: 1; transform: translateY(0); }
}

/* Usamos :deep() para modificar estilos internos de PrimeVue (Títulos y Subtítulos) */
:deep(.p-card-title) {
color: #CC0000 !important;
font-size: 1.5rem !important;
font-weight: 700 !important;
}

:deep(.p-card-subtitle) {
color: #aaaaaa !important;
}

:deep(.p-card-footer) {
padding-top: 0.5rem;
padding-bottom: 0.5rem;
}
</style>