<template>
    <div class="chatbot">
      <header>
        <div class="menuPrincipal">
          <div class="logoSite">
            <img src="../assets/images/logo-sneak-me.png" class="logoSneakMe">
          </div>
          <ul class="menuSite">
            <li> Accueil </li>
            <li> Boutique </li>
            <li> A propos </li>
            <li> Mon panier </li>
            <li> Contact </li>
          </ul>
          <div class="monCompte">
            <a href="https://fr.wikihow.com/rester-au-chaud-par-temps-froid" target="_blank"><img src="../assets/images/image-de-profil.png" class="photoProfil"></a>
          </div>
        </div>
      </header>
      <!-- <img alt="Vue logo" src="../assets/images/photo_profil.jpg"> -->
      <div class="textFond">
        <ChatComponent msg="Bienvenue sur le ChatBot de Sneak Me"/>
        <p>N'hésite pas à regarder le catalogue !</p>
       </div>
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