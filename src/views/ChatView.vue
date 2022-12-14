<template>
    <div class="chatbot">
      <header>
        <div class="menuPrincipal">
          <img src="../assets/images/logo-sneak-me.png" class="logoSneakMe">
          <ul class="menuSite">
            <li> Accueil </li>
            <li> Boutique </li>
            <li> Qui sommes-nous ? </li>
            <li> Contact </li>
          </ul>
        </div>
      </header>
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