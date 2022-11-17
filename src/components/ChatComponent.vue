<template>
  <div class="page-chatbot">
    <h1>{{ msg }}</h1>
    <div class="chatbot-box">
      <div id="button-chatbox">
        <button type="button" class="button-open-chatbox"> <img class="chat-bar-icons-2"
            src="../assets/images/bot_logo.png">
          <p id="bot-text">Chat avec Sneak Me !</p>
        </button>

      </div>
      <div class="windows-chatbot">
        <ul class="scrollbar">
          <li v-for="message in dialog">
            <div class="userBox">
              <p :class="message.user == 'bot' ? 'bot' : 'user'">{{ message.msg }}</p>
            </div>
          </li>
        </ul>
        <div class="text-zone">
          <input type='text' class="chat-textbox" placeholder="Écrivez un message" v-model="inputUser">
          <button @click="dialogEvolve()"><img src="../assets/images/envoyer_shoes.png" class="image-envoyer"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { converse, getTime } from '../Helper/chatHelper';
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

