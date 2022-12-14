<template>
    <div class="chatbot">
      <img alt="Vue logo" src="../assets/images/photo_profil.jpg">
      <ChatComponent msg="Bienvenue sur le ChatBot de Sneak Me"/>
    </div>
  </template>
  
  <script>
  import ChatComponent from '@/components/ChatComponent.vue'
  
  export default {
    name: 'ChatView',
    components: {
        ChatComponent
    }
  }
  </script>