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
          <button @click="dialogEvolve()" class="userButton">Homme</button>
          <button @click="dialogEvolve()" class="userButton">Femme</button>
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
      inputUser: "Coucou"
    }
  },
  methods: {
    dialogEvolve() {
      this.dialog = converse(this.inputUser, this.dialog)
    }
  }
}
</script>


