<template>
    <div class="chatbot">
      <h1>{{ msg }}</h1>
      BLOC DE BARRES DE CHAT
     <div class="chat-bar-collapsible">
        <button id="chat-button" type="button" class="collapsible"> <img class="chat-bar-icons-2" src="../assets/images/bot_logo.png"> <p id="bot-text">Chat avec Sneak Me !</p>
        </button>
        <!-- Nouvelle partie -->
        <div>
            <ul>
                 <li v-for="message in dialog">
                    <p :class="message.user === 0 ? 'bot' : 'user'">{{ message.msg }}</p>
                </li>
            </ul>
            <input type='text' v-model="inputUser">
            <button @click="dialogEvolve()"></button>
        </div>

        <div class="content">
            <div class="full-chat-block">
                <!-- Conteneur de messages -->
                <div class="outer-container">
                    <div class="chat-container">
                        <!-- Messages -->
                        <div id="chatbox">
                            <h5 id="chat-timestamp"></h5>
                            <p id="botStarterMessage" class="botText"><span>Chargement...</span></p>
                        </div>

                        <!-- Boîte de saisie de l'utilisateur -->
                        <div class="chat-bar-input-block">
                            <div id="userInput">
                                <input id="textInput" class="input-box" type="text" name="msg"
                                    placeholder="Écrivez un message" :v-model="inputUser">
                                <p></p>
                            </div>

                            <div class="chat-bar-icons">
                                <img class="chat-bar-icons" src="static/images/envoyer_shoes.png" @click="dialogEvolve()">
                            </div>
                        </div>

                        <div id="chat-bar-bottom">
                            <p></p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

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

