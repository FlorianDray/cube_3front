/**
 * Reçoit le message utilisateur et remplis 
 */
function converse(input, msgBot, msgUser) {
    msgUser.push(input);
    if(input == '' || input == undefined) {
        msgBot.push('Je n\'ai pas compris')
    } else {
        msgBot.push(chooseResponse(input)) 
    }
}

function chooseResponse(input) {
    
}