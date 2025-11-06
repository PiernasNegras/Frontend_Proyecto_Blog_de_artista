## 1. Despliegue del Frontend en Vercel

**Contexto:**
Durante el desarrollo del frontend del proyecto, se requería una plataforma de despliegue que ofreciera integración continua, soporte para Vue.js, HTTPS automático, y facilidad para compartir versiones en tiempo real con colaboradores. Se evaluaron opciones como Netlify, GitHub Pages, Render y Vercel.

**Decisión:**
Utilizar **Vercel** como plataforma principal de despliegue para el frontend, aprovechando su integración directa con Git, soporte nativo para Vue.js

**Consecuencias:**
* **Positivas:**
    * **HTTPS automático:** Todos los entornos (preview y producción) se sirven por HTTPS sin configuración adicional.
    * **Previews por commit:** Cada push genera una URL única para revisar cambios antes de mergear.
    * **Integración con Git:** El flujo de trabajo se mantiene limpio y automatizado desde GitHub.
    * **Desempeño:** CDN global con tiempos de carga rápidos y optimización automática de assets.
    * **Configuración mínima:** No requiere archivos de configuración complejos para Vue CLI.

* **Negativas:**
    * **Dependencia externa:** El proyecto queda atado a la disponibilidad y políticas de Vercel.
    * **Limitaciones en el plan gratuito:** Algunas funcionalidades avanzadas (como funciones serverless persistentes) tienen restricciones.

**Estado:** ACEPTADO
