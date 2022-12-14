<template>
  <div class="page-chatbot">
    <h1>{{ msg }}</h1>
    <div class="chatbot-boxplus">
    <div class="chatbot-box">
      <div id="button-chatbox">
        <button type="button" class="button-open-chatbox"> <img class="chat-bar-icons-2"
            src="../assets/images/bot_logo.png">
          <p id="bot-text">Chat avec Sneak Me !</p>
        </button>

      </div>
      <div class="window-chatbot">
        <ul class="scrollbar">
          <li v-for="message in dialog">
            <div class="userBox">
              <p :class="message.user == 'bot' ? 'bot' : 'user'">{{ message.msg }}<p id="time">12:34</p></p>
            </div>
          </li>
        </ul>
        <div class="button-zone">
          <button @click="dialogUndefined()" class="userButton">Voir le catalogue</button>
          <button @click="dialogUndefined()" class="userButton">FAQ</button>
          <button @click="dialogUndefined()" class="userButton">Connexion</button>
          <button @click="dialogUndefined()" class="userButton">Inscription</button>
          
          <button @click="dialogHomme()" class="userButton">Homme</button>
          <button @click="dialogFemme()" class="userButton">Femme</button>

          <!-- <button @click="dialogUndefined()" class="userButton">Basket Basses</button>
          <button @click="dialogUndefined()" class="userButton">Basket Hautes</button>

          <button @click="dialogUndefined()" class="userButton">Choisir une couleur</button>
          <button @click="dialogUndefined()" class="userButton">Ne pas choisir de couleur </button>  -->
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
// DV : getTime est importé mais pas utilisé.
import { converse, getTime } from '../helpers/chatHelper';
export default {
  name: 'Testworld',
  props: {
    msg: String
  },
  data() {
    return {
      dialog: [{
        msg: 'Bonjour ! Que puis-je faire pour vous ?',
        user: 'bot',
        time: ""
      }],
      inputUserU: "Bonjour",
      inputUser1: "Homme",
      inputUser2: "Femme"
    }
  },
  methods: {
    dialogUndefined() {
      this.dialog = converse(this.inputUserU, this.dialog)
    },
    dialogHomme() {
      this.dialog = converse(this.inputUser1, this.dialog)
    },
    dialogFemme() {
      this.dialog = converse(this.inputUser2, this.dialog)
    }
}
}
</script>


