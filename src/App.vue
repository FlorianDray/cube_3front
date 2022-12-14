<template>
  <nav>
    <!-- <router-link to="/">chat</router-link> -->
  </nav>
  <router-view />

</template>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(47, 47, 47);
}

.chatbot-box {
  position: fixed;
  display: grid;
  right: 30px;
  bottom: 0px;
}
/* .chatbot-box:active {
  animation: chatbot-window 0.5s ease-in forwards;
} */

.button-open-chatbox {
  position: absolute;
  background: linear-gradient(90deg, rgba(35,119,255,1) 0%, rgba(53,104,255,1) 49%, rgba(0,157,189,1) 100%);
  width: 350px;
  height: 60px;
  font-size: 18px;
  bottom: 500px;
  right: 0;
  outline: none;
  cursor: pointer;
  border-radius: 20px 20px 0px 0px;
  border: 3px solid white;
  border-bottom: none;
  box-shadow: 0 8px 16px 0 rgb(0, 0, 0);
  animation-name: windowopen; 
}

#bot-text {
  text-align: left;
  vertical-align: middle;
  padding: 15px;
  margin: 0;
  color: white;
}

.button-open-chatbox img {
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 50px;
  float: left;
}

.window-chatbot {
  background-color: white;
  max-height: 500px;
  width: 350px;
  height: 500px;
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  right: 0;
  scroll-behavior: smooth;
}

.scrollbar {
  overflow: auto;
  scrollbar-width: none;
  height: max-content;
  transition: max-height 0.2s ease-out;
  height: 500px;
}

.window-chatbot ul li {
  list-style-type: none;
  text-align: left;
  padding:0;
  margin: 0;
}

.text-zone {
  background-color: #e7e7e7;
  padding: 10px;
  border-left: 3px solid white;
  border-right: 3px solid white;
}

.window-chatbot button {
  width: 30%;
  height: 25px;
  background: #e7e7e7;
  border: 0;
}

.image-envoyer {
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 50px;
  float: right;
  margin-right: 20px;
  font-size: 20px;
  cursor: pointer;
}

.chat-textbox {
  display: flex;
  float: left;
  box-sizing: border-box;
  justify-content: space-between;
  width: 70%;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 10px;
  border: 0;
  outline: none;
}

.user {
  margin: 2px;
  padding: 15px;
  color: white;
  background: linear-gradient(90deg, rgba(35,119,255,1) 0%, rgba(53,104,255,1) 49%, rgba(0,157,189,1) 100%);    
  width: 75%;
  float: right;
  margin-right: 10px;
  border-radius: 10px 10px 0px 10px;
  max-width: max-content;
  animation: floatup .5s forwards
}

.bot {
  margin: 2px;
  padding: 15px;
  color: rgb(0, 0, 0);
  background: #e0e0e0;
  width: 75%;
  float: left;
  margin-left: -30px;
  border-radius: 10px 10px 10px 0px;
  animation: floatup .5s forwards
}

.bot #time {
  font-size: 10px;
  margin: 10px 0px 0px 0px;
}

.user #time {
  font-size: 10px;
  text-align: right;
  margin: 10px 0px 0px 0px;
}

@keyframes windowopen {
  from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-500px);
    }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@keyframes floatup {
    from {
        transform: translateY(15px);
        opacity: .0;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
    }
}

</style>

