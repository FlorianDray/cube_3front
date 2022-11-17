/**
 * Reçoit le message utilisateur et remplis 
 */
function converse(input, msgBot) {
    if(input == '' || input == undefined) {
        msgBot.push('Je n\'ai pas compris')
    } else {
        msgBot.push(chooseResponse(input)) 
    }
}

function chooseResponse(input) {
    
}

export function firstMsgBot() {
    
}