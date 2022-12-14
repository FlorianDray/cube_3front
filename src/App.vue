<template>
  <nav>
    <!-- <router-link to="/">chat</router-link> -->
  </nav>
  <router-view />

</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

nav {
  padding: 30px;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(0, 0, 0);
  overflow: hidden;
}

/* ------CHATBOT------ */

.chatbot-boxplus {
  position: absolute;
  right: 50px;
  bottom: 0px;
}

.chatbot-box {
  position: relative;
  animation: chatbot-window 5s 1 linear alternate running;
}

/* ------BOUTON D'OUVERTURE------ */

.button-open-chatbox {
  position: relative;
  background: linear-gradient(90deg, rgba(35,95,255,1) 0%, rgba(45,161,245,1) 100%);
  width: 350px;
  height: 60px;
  bottom: 0;
  right: 0;
  cursor: pointer;
  border-radius: 20px 20px 0px 0px;
  border: 3px solid white;
  border-bottom: none;
}

#bot-text {
  text-align: left;
  vertical-align: middle;
  padding: 15px;
  margin: 0;
  color: white;
  font-size: 18px;
}

.button-open-chatbox img {
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 50px;
  float: left;
}

/* ------ZONE DES MESSAGES------ */

.window-chatbot {
  background-color: white;
  max-height: 500px;
  width: 350px;
  height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  bottom: 0px;
  right: 0px;
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

/* ------ZONE DES BOUTONS------ */

.button-zone {
  height: 80px;
  background-color: #e7e7e7;
  padding: 10px;
  border-left: 3px solid white;
  border-right: 3px solid white;
}

.userButton {     
  box-shadow:inset 0px 1px 0px 0px #bbdaf7;     
  background:linear-gradient(90deg, rgba(35,95,255,1) 0%, rgba(45,161,245,1) 100%);          
  border-radius:6px;     
  border:1px solid #84bbf3;     
  cursor:pointer;     
  color:#ffffff;         
  font-size:15px;     
  font-weight:bold;     
  padding:20px 51px;
} 
  
.userButton:hover {   
  background: linear-gradient(90deg, rgb(25, 69, 190) 0%, rgb(33, 118, 179) 100%);  
} 

.userButton:active {     
  position:relative;     
  top:1px; 
}

/* ------MESSAGES USER/BOT------ */

.user {
  margin: 2px;
  padding: 15px;
  color: white;
  background: linear-gradient(90deg, rgba(35,95,255,1) 0%, rgba(45,161,245,1) 100%);   
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

/* ------ANIMATIONS------ */

@keyframes chatbot-window {
  0% { top: 500px; }
  90% { top : 500px; }
	100% { top: 0px; }
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

