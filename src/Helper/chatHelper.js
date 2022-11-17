import chaussures from '../fakeData.js'

/**
 * Reçoit le message utilisateur et actualise la liste dialog avec la demande et la réponse
 * @param {string} input  message utilisateur
 * @param {array[Object]} dialog   liste des messages
 * @returns {array[Object]} dialog liste des messages
 */
export function converse(input, dialog) {
    dialog.push({
        msg: input,
        user: 'user'
    })
    if(input == '' || input == undefined) {
        dialog.push({
            msg: 'je n\'ai pas compris',
            user: 'bot'
        })
    } else {
        dialog.push({
            msg: chooseResponse(input),
            user: 'bot'
        })
    }
    return dialog
}

/**
 * Choisis une réponse adapté
 * @param {string} input  message utilisateur 
 * @returns message du bot
 */
function chooseResponse(input) {
    switch (input) {
        case 'marque':
            return getCategories('marque')
        case 'type':
            return getCategories('type')
        case 'nom':
            return getCategories('nom')
        case 'couleurs':
            return getCategories('couleurs')
        case 'taille':
            return getCategories('taille')
    }
}
/**
 * Retourne la liste des éléments d'une catégorie
 * @param {string} category 
 * @returns {array} message du bot
 */
function getCategories(category){
    let arrayOut = [];
    console.log(chaussures)
    chaussures.array.forEach(element => {
        if(element[category] in arrayOut ){}
        else { 
            arrayOut.push(element[category])
        }
    });
    if (arrayOut.length > 0){
        console.log()
        return arrayOut;
    } else{
        return 'Ceci est une erreur'
    }
}