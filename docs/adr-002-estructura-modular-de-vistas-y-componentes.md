## 2. Estructura Modular de Vistas y Componentes

**Contexto:**  
Durante el desarrollo del frontend, se identificó la necesidad de mantener una estructura clara, escalable y mantenible que permitiera separar responsabilidades, facilitar la reutilización de lógica visual, y mejorar la experiencia de desarrollo colaborativo.

**Decisión:**  
Adoptar una estructura modular basada en **vistas** (`src/views`) y **componentes reutilizables** (`src/components`), siguiendo las convenciones de Vue 3. Cada vista representa una sección funcional del sitio (ej. `DiscografiaView.vue`, `ReproductorView.vue`), mientras que los componentes encapsulan piezas reutilizables de UI (ej. `AudioPlayer.vue`, `CancionesDestacadas.vue`).

**Consecuencias:**

* **Positivas:**
    * **Separación de responsabilidades:** Las vistas manejan lógica de página y los componentes se enfocan en presentación y reutilización.
    * **Escalabilidad:** Permite agregar nuevas vistas o componentes sin afectar el resto del proyecto.
    * **Mantenibilidad:** Facilita la lectura, el testing y la refactorización del código.
    * **Reutilización efectiva:** Componentes como `CancionesDestacadas.vue` pueden insertarse en múltiples vistas sin duplicar lógica.

* **Negativas:**
    * Requiere disciplina en la organización y documentación para evitar componentes acoplados o duplicados.
    * Puede generar fragmentación si no se establecen convenciones claras de naming y estructura.

**Estado:** ACEPTADO
