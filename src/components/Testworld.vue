<template>
    <div class="chatbot">
      <h1>{{ msg }}</h1>
     <!-- BLOC DE BARRES DE CHAT -->
     <div class="chat-bar-collapsible">
        <button id="chat-button" type="button" class="collapsible"> <img class="chat-bar-icons-2" src="../assets/images/bot_logo.png"> <p id="bot-text">Chat avec Sneak Me !</p>
        </button>

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
                                    placeholder="Écrivez un message">
                                <p></p>
                            </div>

                            <div class="chat-bar-icons">
                                <!-- <i id="chat-icon" style="color: crimson;" class="fa fa-fw fa-heart"
                                    onclick="heartButton()"></i> -->
                                <!-- <i id="chat-icon" style="color:  #0A7CFF;" class="fa fa-fw fa-send"
                                    onclick="sendButton()"></i> -->
                                <img class="chat-bar-icons" src="static/images/envoyer_shoes.png" onclick="sendButton()">
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

  export default {
    name: 'Testworld',
    props: {
      msg: String
    }
  }
  </script>
  
