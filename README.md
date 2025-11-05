# ⚡ Almafuerte Blog

Aplicación web dedicada a la historia, discografía y legado de Almafuerte, ícono del metal argentino. Este proyecto combina diseño moderno, interactividad y contenido cultural para rendir homenaje al "metal criollo".

## 🧰 Tecnologías utilizadas

- Vue 3 con Vue CLI
- Vue Router para navegación SPA
- PrimeVue para componentes UI
- Tailwind CSS (vía CDN en vistas estáticas)
- Web Audio API para simulación de riffs
- JavaScript moderno (ESNext) con Babel
- Estilos oscuros personalizados y diseño responsive

## 📁 Estructura del proyecto

```plaintext
almafuerte-blog/
├── public/                 # Archivos estáticos accesibles directamente (Discografia.html, index.html)
├── src/                    # Código fuente principal de la aplicación Vue
│   ├── assets/             # Imágenes y recursos visuales
│   ├── components/         # Componentes reutilizables (ej. HelloWorld.vue)
│   ├── views/              # Vistas de cada sección (Home, Historia, Discografía, etc.)
│   ├── router/             # Configuración de rutas con Vue Router
│   ├── services/           # Servicios para conexión con el backend
│   │   ├── api.js
│   │   ├── artistaService.js
│   │   ├── discoService.js
│   │   └── videoService.js
│   ├── App.vue             # Componente raíz con layout y menú
│   └── main.js             # Punto de entrada de la aplicación
├── .gitignore              # Archivos y carpetas ignoradas por Git
├── babel.config.js         # Configuración de Babel para compatibilidad JS
├── jsconfig.json           # Alias y opciones de compilador para el editor
├── .env                   # 🆕 Variable VUE_APP_API_BASE_URL
├── package.json            # Dependencias, scripts y metadatos del proyecto
├── vue.config.js           # Configuración personalizada de Vue CLI
└── README.md               # Documentación del proyecto
```


## 🚀 Instalación y ejecución local

### 1. Clonar el repositorio
```bash
git clone "https://github.com/PiernasNegras/Frontend_Proyecto_Blog_de_artista.git"
cd Frontend_Proyecto_Blog_de_artista
```
> Todos los comandos deben ejecutarse desde la raíz del proyecto (`Frontend_Proyecto_Blog_de_artista/`).

### 🔹 Usando yarn

```bash
# Instalar dependencias
yarn install

# Levantar entorno de desarrollo
yarn serve

# Compilar para producción
yarn build

# Linting del código
yarn lint
```


## 📦 Vistas destacadas

- HomeView: presentación del sitio y últimas novedades
- HistoriaView: línea de tiempo visual con imágenes y etapas clave
- DiscografiaView: tarjetas interactivas con simulación de riffs
- BiografiaView: panel estilizado con historia de Ricardo Iorio
- ContactoView: formulario funcional con validación y feedback
- NoticiasView: tarjetas de noticias con estilo oscuro
- ReviewsView: sección en desarrollo para reseñas musicales

## 🎸 Detalles técnicos

- Navegación SPA con PvMenubar y comandos router.push
- Simulación de riffs con AudioContext, OscillatorNode y distorsión
- Uso de :deep() para personalizar estilos internos de PrimeVue
- Imágenes locales importadas dinámicamente en cada vista
- Estilo visual coherente con temática rockera y metalera

## 📄 Licencia

Este proyecto es de uso educativo y cultural.
