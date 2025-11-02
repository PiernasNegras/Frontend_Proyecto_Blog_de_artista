<template>
  <div class="contacto-view">
    <div class="contact-card p-4 md:p-6 lg:p-8">
      <h1 class="text-3xl font-bold mb-6 text-yellow-500">
        🤘 Contacta a la Banda 🤘
      </h1>
      <p class="mb-8 text-gray-300">
        Envíanos tu mensaje, consulta, o simplemente déjanos un saludo.
      </p>

      <form @submit.prevent="enviarFormulario" class="space-y-6">
        <!-- Campo Nombre -->
        <div class="p-field">
          <label for="nombre" class="block text-sm font-medium text-gray-400 mb-2">Nombre Completo</label>
          <InputText 
            id="nombre" 
            v-model="formData.nombre" 
            placeholder="Tu nombre o seudónimo"
            required 
            class="w-full bg-gray-700 text-gray-100 border-gray-600 focus:border-yellow-500" 
          />
        </div>

        <!-- Campo Email -->
        <div class="p-field">
          <label for="email" class="block text-sm font-medium text-gray-400 mb-2">Correo Electrónico</label>
          <InputText 
            id="email" 
            v-model="formData.email" 
            type="email" 
            placeholder="email@ejemplo.com"
            required 
            class="w-full bg-gray-700 text-gray-100 border-gray-600 focus:border-yellow-500" 
          />
        </div>

        <!-- Campo Mensaje -->
        <div class="p-field">
          <label for="mensaje" class="block text-sm font-medium text-gray-400 mb-2">Tu Mensaje</label>
          <Textarea 
            id="mensaje" 
            v-model="formData.mensaje" 
            rows="5" 
            placeholder="Escribe tu consulta o comentario aquí..."
            required 
            class="w-full bg-gray-700 text-gray-100 border-gray-600 focus:border-yellow-500"
          />
        </div>

        <!-- Botón de Envío -->
        <div class="flex justify-end pt-4">
          <PvButton 
            label="Enviar Mensaje" 
            icon="pi pi-send" 
            icon-pos="right" 
            type="submit" 
            :severity="'warning'" 
            class="w-full md:w-auto"
            :loading="isLoading"
          />
        </div>
      </form>

      <!-- Mensaje de Estado -->
      <Message 
        v-if="messageText" 
        :severity="messageType" 
        :closable="false" 
        class="mt-6"
      >
        {{ messageText }}
      </Message>
    </div>
  </div>
</template>

<script>
// Importamos los componentes de PrimeVue necesarios
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
// PvButton ya está registrado globalmente
import Message from 'primevue/message';

export default {
  name: 'ContactoView',
  components: {
    InputText,
    Textarea,
    Message,
  },
  data() {
    return {
      formData: {
        nombre: '',
        email: '',
        mensaje: '',
      },
      isLoading: false,
      messageText: '',
      messageType: 'success', // 'success', 'error', 'info'
    };
  },
  methods: {
    enviarFormulario() {
      // 1. Validar si los campos están llenos (aunque ya tienen 'required')
      if (!this.formData.nombre || !this.formData.email || !this.formData.mensaje) {
        this.messageType = 'error';
        this.messageText = 'Por favor, completa todos los campos.';
        return;
      }

      // 2. Simulación de Envío de Datos a un Servidor (Ejemplo)
      this.isLoading = true;
      this.messageText = 'Enviando mensaje...';
      this.messageType = 'info';

      // Simula una latencia de red de 2 segundos
      setTimeout(() => {
        this.isLoading = false;
        
        // Simulación de respuesta exitosa
        console.log('Datos enviados:', this.formData);
        
        this.messageType = 'success';
        this.messageText = `¡Gracias, ${this.formData.nombre}! Tu mensaje ha sido enviado exitosamente.`;
        
        // Limpiar el formulario
        this.formData.nombre = '';
        this.formData.email = '';
        this.formData.mensaje = '';
        
        // Opcional: Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
          this.messageText = '';
        }, 5000);
        
      }, 2000);
    },
  },
};
</script>

<style scoped>
/* Estilos del Contenedor de la Vista */
.contacto-view {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alineado al inicio para que no esté en el centro vertical */
  min-height: calc(100vh - 80px); /* Ajustar para que no ocupe todo el alto si el contenido es corto */
  padding: 40px 20px;
}

/* Estilos de la Tarjeta del Formulario */
.contact-card {
  width: 100%;
  max-width: 600px; /* Ancho máximo para el formulario */
  background-color: #2a2a2a; /* Color de tarjeta más claro que el fondo principal */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

/* Estilos específicos para inputs oscuros */
:deep(.p-inputtext) {
  /* Aplicar estilos de fondo oscuro a todos los inputs, incluido Textarea */
  background-color: #383838 !important;
  color: #e0e0e0 !important;
  border-color: #4a4a4a !important;
}

:deep(.p-inputtext:focus) {
  box-shadow: 0 0 0 0.2rem rgba(255, 180, 0, 0.5) !important; /* Sombra de enfoque amarilla */
  border-color: #CC0000 !important;
}

/* Estilos para el componente Message de PrimeVue (para hacerlo oscuro) */
:deep(.p-message.p-message-info) {
  background-color: #2b3b4f;
  border-color: #17a2b8;
  color: #b8daff;
}
:deep(.p-message.p-message-success) {
  background-color: #2f4f2f;
  border-color: #28a745;
  color: #c3e6cb;
}
:deep(.p-message.p-message-error) {
  background-color: #4f2f2f;
  border-color: #dc3545;
  color: #f5c6cb;
}
</style>