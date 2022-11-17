<template>
    <div class="chatbot">
      <h1>{{ msg }}</h1>
      <div class="windows-chatbot">
            <ul>
                 <li v-for="message in dialog">
                    <p :class="message.user === 0 ? 'bot' : 'user'">{{ message.msg }}</p>
                </li>
            </ul>
            <input type='text' v-model="inputUser">
            <button @click="dialogEvolve()"></button>
        </div>
    </div>
</template>

  <script>
    import {converse, getTime } from '../Helper/chatHelper';
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
            inputUser: ""
          }
        },
        methods: {
            dialogEvolve() {
                this.dialog = converse(this.inputUser, this.dialog)
            }
        }
    }
  </script>

