<template>
    <div class="historia-container">
        <h1 class="text-4xl font-extrabold mb-12 text-yellow-500 text-center">
            🎸 Historia 🤘
        </h1>

        <img :src="historiaBanner" alt="Almafuerte en el tiempo" class="historia-banner-img" />

        <div class="timeline space-y-20">
            <div 
                v-for="(etapa, index) in historia" 
                :key="index" 
                class="timeline-item flex flex-col lg:gap-4 py-4 px-0 rounded-lg transition-shadow duration-300 lg:items-center"
                :class="{ 'lg:flex-row-reverse': index % 2 === 0, 'lg:flex-row': index % 2 !== 0 }"
            >
                <div class="flex justify-center items-center timeline-columna lg:p-0">
                    <img 
                        :src="etapa.imagenUrl" 
                        :alt="etapa.titulo" 
                        class="timeline-image w-full max-w-sm rounded-lg shadow-2xl object-cover"
                        loading="lazy"
                    />
                </div>

                <div class="flex items-center timeline-columna lg:p-0">
                    <div class="bg-gray-800 p-6 rounded-lg shadow-xl border-t-4 border-yellow-600 w-full">
                        <span class="text-sm font-semibold text-yellow-500 uppercase mb-1 block">{{ etapa.fecha }}</span>
                        <h2 class="text-2xl font-bold mb-3 text-white">{{ etapa.titulo }}</h2>
                        <p class="text-gray-300 leading-relaxed">{{ etapa.descripcion }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 🛑 PASO 1: IMPORTAR TODAS LAS IMÁGENES
// Estas rutas deben coincidir EXACTAMENTE con el nombre de archivo en src/img/
import historiaBanner from '../img/lahistoria.jpg';
import mundoGuanacoHistoria from '../img/historiamundoguanaco.jpg'; 
import giraNacional from '../img/giranacional.jpg'; 
import toroYPampa from '../img/toroypampa.jpg'; 
import legado from '../img/legado.jpg'; 

export default {
    name: 'HistoriaView',
    data() {
        return {
            // 🛑 PASO 2: DECLARAR LAS VARIABLES IMPORTADAS EN data()
            historiaBanner: historiaBanner, 
            
            // Declaraciones para las imágenes de la línea de tiempo
            mundoGuanacoHistoria: mundoGuanacoHistoria, 
            giraNacional: giraNacional,
            toroYPampa: toroYPampa,
            legado: legado,

            historia: [
                {
                    fecha: '1995',
                    titulo: 'El Origen y Mundo Guanaco',
                    descripcion: 'Almafuerte nace de la disolución de Hermética. Ricardo Iorio forma la banda junto a Claudio Marciello (guitarra), Ricardo Peluá (batería) y Juan Ledesma (bajo). Su primer álbum, "Mundo Guanaco", establece inmediatamente el estilo único de Iorio: letras profundas sobre la identidad argentina y el rock pesado.',
                    // 🛑 PASO 3: REFERENCIAR LA VARIABLE DECLARADA EN data()
                    imagenUrl: mundoGuanacoHistoria 
                },
                {
                    fecha: '1998 - 2001',
                    titulo: 'Consolidación y Gira Nacional',
                    descripcion: 'Con álbumes como "Almafuerte" (1998) y "Piedra Libre" (2001), la banda se consolida como una de las más grandes del heavy metal argentino. Realizan extensas giras por todo el país, afianzando una base de fanáticos leales y devotos al mensaje de sus canciones.',
                    imagenUrl: giraNacional
                },
                {
                    fecha: '2005 - 2008',
                    titulo: 'Período de Máxima Creatividad',
                    descripcion: 'Lanzamientos como "Toro y Pampa" y "Trillando la Fina" son aclamados por la crítica, mostrando una madurez lírica y musical. Iorio experimenta con ritmos folklóricos argentinos fusionados con el metal, manteniendo siempre su compromiso con las raíces nacionales.',
                    imagenUrl: toroYPampa
                },
                {
                    fecha: '2016 - 2017',
                    titulo: 'Últimos Shows y Final',
                    descripcion: 'Almafuerte realiza sus últimas grandes presentaciones en el país. Aunque nunca se anunció una disolución formal, la banda entró en un hiato indefinido, con sus miembros dedicándose a proyectos individuales. Su legado permanece intacto como un pilar fundamental del rock nacional.',
                    imagenUrl: legado
                },
            ]
        };
    }
};
</script>

<style scoped>
/* Estilos para la nueva imagen de Banner */
.historia-banner-img {
    max-height: 450px; 
    object-fit: cover; 
    display: block;
    margin: 0 auto 50px auto; 
    border: 3px solid #CC0000; 
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.6);
}

.historia-container {
    padding: 40px 20px;
    max-width: 1400px;
    margin: 0 auto;
    background-color: #000000; 
}

@media (min-width: 1024px) { 
    /* Forzamos el comportamiento de Fila (row) solo en desktop */
    .timeline-item {
        display: flex !important;
        flex-direction: row !important;
        /* Eliminar el padding horizontal para que quede pegado */
        padding-left: 15px !important;
        padding-right: 15px !important;
    }

    /* Aseguramos que la columna no tenga padding de separación extra */
    .timeline-columna {
        padding-left: 15px !important;
        padding-right: 15px !important;
    }
}

.timeline-item:hover {
    box-shadow: 0 8px 25px rgba(255, 153, 0, 0.2);
}

.timeline-image {
    max-height: 250px;
    object-fit: cover;
  height: auto;
  width: 250px;
  height: 250px;
  display: block;
  margin: 0 auto;
}

.bg-gray-800 {
    background-color: #2a2a2a;
}
</style>