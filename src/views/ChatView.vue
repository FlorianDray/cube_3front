<template>
    <div class="chatbot">
      <img alt="Vue logo" src="../assets/images/photo_profil.jpg">
      <ChatComponent msg="Bienvenue sur le ChatBot de Sneak Me"/>
    </div>
  </template>
  
  <script>
<<<<<<< HEAD:src/views/Testview.vue
  // @ is an alias to /src
  import Testworld from '@/components/Testworld.vue'
=======
  import ChatComponent from '@/components/ChatComponent.vue'
  
>>>>>>> ca62f9ffcbb46715dbb02e357c2a121568d172ac:src/views/ChatView.vue
  export default {
    name: 'ChatView',
    components: {
        ChatComponent
    }
  }
  </script>