## 4. Uso de Composition API en el Frontend

**Contexto:**  
Vue ofrece dos estilos principales para definir la lógica de los componentes: **Options API** (organizada en secciones como `data`, `methods`, `computed`) y **Composition API** (organizada dentro de la función `setup()`, utilizando `ref`, `reactive`, `computed`, `onMounted`, etc.).  
Durante el desarrollo del frontend, se buscaba una forma más clara y escalable de manejar la lógica de estado y ciclo de vida, especialmente en vistas como `DiscografiaView.vue`, `HomeView.vue` y `BiografiaView.vue`, que integran datos dinámicos y componentes reutilizables.

**Decisión:**  
Adoptar **Composition API** como estándar para el proyecto frontend. Todos los componentes y vistas utilizan la función `setup()` para definir estado reactivo (`ref`, `reactive`), ciclos de vida (`onMounted`), y exponer variables y métodos al template.

**Consecuencias:**

* **Positivas:**
    * **Modularidad:** Permite agrupar lógica relacionada en funciones reutilizables y composables.
    * **Escalabilidad:** Facilita el crecimiento del proyecto sin que los componentes se vuelvan difíciles de mantener.
    * **Compatibilidad:** Se integra mejor con TypeScript y herramientas modernas.
    * **Claridad:** El flujo de datos y reactividad es más explícito y fácil de seguir.
    * **Consistencia:** Todas las vistas (`BiografiaView.vue`, `DiscografiaView.vue`, `HomeView.vue`) y componentes (`AudioPlayer.vue`, `CancionesDestacadas.vue`) siguen el mismo estilo.

* **Negativas:**
    * **Curva de aprendizaje:** Puede resultar menos intuitivo para desarrolladores acostumbrados al Options API.
    * **Verboso en casos simples:** Para componentes muy pequeños, `setup()` puede parecer más complejo que `data` y `methods`.

**Estado:** ACEPTADO
