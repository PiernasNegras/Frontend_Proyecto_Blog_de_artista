## 3. Uso de Variables de Entorno en el Frontend

**Contexto:**  
Durante la integración del reproductor de canciones destacadas, se presentó la necesidad de construir dinámicamente las URLs de los archivos de audio alojados en Cloudinary. Inicialmente, la concatenación de rutas provocaba errores 404 debido a inconsistencias en el path base. Además, se requería una forma flexible de configurar el origen de los archivos sin modificar el código fuente en cada entorno.

**Decisión:**  
Definir la variable de entorno `VUE_APP_AUDIO_BASE_URL` en el archivo `.env`, y acceder a ella mediante `process.env.VUE_APP_AUDIO_BASE_URL` dentro de los componentes Vue. Esta variable representa la base de la URL para todos los archivos de audio, permitiendo construir rutas dinámicas de forma segura y mantenible.

**Consecuencias:**

* **Positivas:**
    * **Flexibilidad:** Permite cambiar el origen de los archivos (Cloudinary, local, CDN) sin modificar el código.
    * **Mantenibilidad:** Centraliza la configuración, facilitando el despliegue en distintos entornos (desarrollo, producción).
    * **Compatibilidad:** Alineado con las convenciones de Vue CLI, que exige el prefijo `VUE_APP_` para exponer variables al cliente.
    * **Resolución de errores:** Corrige errores de carga por rutas mal construidas y evita errores 404.

* **Negativas:**
    * Requiere reiniciar el servidor local tras modificar `.env`, lo que puede generar confusión si no se documenta.
    * Las variables de entorno expuestas al cliente deben manejarse con cuidado para no incluir información sensible.

**Estado:** ACEPTADO
