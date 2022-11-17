<template>
  <nav>
   <!-- <router-link to="/">chat</router-link> -->
  </nav>
  <router-view/>


</template>

<style>

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.chatbot {

}

.windows-chatbot {
  background-color: antiquewhite;
  max-height: 500px;
  width: 350px;
  position: absolute;
  bottom: 0;
  right: 0;
  scroll-behavior: smooth;
  hyphens: auto;
}
.windows-chatbot::-webkit-scrollbar {
    display: none;
}

.windows-chatbot ul li {
  list-style-type: none;
}

.windows-chatbot button {
  width: 50px;
  height: 20px;
}

</style>
