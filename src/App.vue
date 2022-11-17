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
  bottom: 0;
  right: 50px;
}

.button-open-chatbox {
  position: absolute;
  background-color: #0A7CFF;
  width: 350px;
  height: 50px;
  font-size: 18px;
  bottom: 500px;
  right: 0;
  outline: none;
  cursor: pointer;
  border-radius: 20px 20px 0px 0px;
  border: 3px solid white;
  border-bottom: none;
  box-shadow: 0 8px 16px 0 rgb(0, 0, 0);
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

.windows-chatbot {
  background-color: white;
  max-height: 500px;
  width: 350px;
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  right: 0;
  scroll-behavior: smooth;
  hyphens: auto;
  

}

.scrollbar {
  overflow: auto;
  scrollbar-width: none;
  height: max-content;
  transition: max-height 0.2s ease-out;
}

.windows-chatbot ul li {
  list-style-type: none;
  text-align: left;
  padding:0;
  margin: 0;
}

.text-zone {
  background-color: rgb(216, 216, 216);
  padding: 10px;
}

.windows-chatbot button {
  width: 30%;
  height: 25px;
  background: rgb(216, 216, 216);
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

/* .userBox {
  line-height: 1.5em;
  display: inline-block;
  background: #e0e0e0;
  padding: 10px;
  border-radius: 8px;
  border-bottom-left-radius: 2px;
  max-width: 75%;
  margin-left: 10px;
} */

.user {
  padding: 20px;
  color: white;
  background: linear-gradient(120deg, rgba(97,33,158,1) 15%, rgba(9,9,121,1) 50%, rgba(0,138,166,1) 100%);    
  width: 75%;
  float: right;
  margin-right: 10px;
  border-radius: 10px;
  max-width: max-content;
}

.bot {
  padding: 20px;
  color: rgb(0, 0, 0);
  background: #e0e0e0;
  width: 75%;
  float: left;
  margin-left: -30px;
  border-radius: 10px;
}
</style>
