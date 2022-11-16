<template>
    <div class="chatbot">
      <img alt="Vue logo" src="../assets/images/photo_profil.jpg">
      <Testworld msg="Bienvenue sur le ChatBot de Sneak Me"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Testworld from '@/components/Testworld.vue'
  
  export default {
    name: 'Testview',
    components: {
      Testworld
    }
  }
  </script>