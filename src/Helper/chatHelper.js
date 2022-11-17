
/**
 * retourne l'heure actuelle
 * @returns string time
 */
 export function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

/**
 * Reçoit le message utilisateur et remplis les listes
 * @param input string message user
 * @param msgBot array liste de messages du bot
 * @returns msgBot array 
 */
export function converse(input, dialog) {
    dialog.push({
        msg: input,
        user: 'user',
        time : getTime()
    })
    if(input == '' || input == undefined) {
        dialog.push({
            msg: 'je n\'ai pas compris',
            user: 'bot',
            time : getTime()
        })
    } else {
        dialog.push({
            msg: chooseResponse(input),
            user: 'bot',
            time : getTime()
        })
    }
    return dialog
}

/**
 * Choisis une réponse adapté
 * @param input string message user 
 * @returns response string message bot
 */
function chooseResponse(input) {
    return input + ' bot'
}

//ça va partir dans le composant
function generateDialog(listesMsg) {
    listesMsg.forEach(element => {
        if (element.index == 0) {
            //affichage css d'un msg bot
        } else if (element.index == 1) {
            //affichage css d'un msg user
        }
    });
}