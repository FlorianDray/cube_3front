import chaussures from '../fakeData.js'

/**
 * Reçoit le message utilisateur et actualise la liste dialog avec la demande et la réponse
 * @param {string} input  message utilisateur
 * @param {array[Object]} dialog   liste des messages
 * @returns {array[Object]} dialog liste des messages
 */
export function converse(input, dialog) {
    if(input == '' || input == undefined) {
        dialog.push({
            msg: input,
            user: 'user'
        })
        dialog.push({
            msg: 'je n\'ai pas compris',
            user: 'bot'
        })
    } else {
        dialog.push({
            msg: input,
            user: 'user'
        })
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
        case 'couleur':
            return getCategories('couleurs')
        case 'taille':
            return getCategories('taille')
        case 'nike':
            return getProducts('nike')
    }
}

/**
 * Retourne la liste des éléments d'une catégorie
 * @param {string} category 
 * @returns {array} message du bot
 */
function getCategories(category){
    let arrayOut = []
    console.log(chaussures)
    if (chaussures.length > 0){
        chaussures.forEach(element => {
            if(!arrayOut.includes(element[category])  ){
                arrayOut.push(element[category])
            }
        })
    } else {
        console.log('Aucune chaussure disponible')
        return 'Aucune chaussure disponible'
    }
    if (arrayOut.length > 0){
        console.log(arrayOut)
        return arrayOut;
    } else{
        console.log('Aucun élément ne correspond à la recherche ' + category)
        return 'Aucun élément ne correspond à la recherche ' + category
    }
}

/**
 * 
 * @param @param {string} input  message utilisateur 
 * @param {*String} category 
 * @param {*String} value 
 * @returns 
 */
function getProducts(input, category, value){
    let arrayOut = [];
    if (chaussures.length > 0){
        chaussures.forEach(element => {
            if(element[category][value] === input){
                arrayOut.push(element)
            }
        }) 
    } else {
        console.log('Aucune chaussure disponible')
        return 'Aucune chaussure disponible'
    }
    if (arrayOut.length > 0){
        console.log(arrayOut)
        return arrayOut;
    } else{
        console.log('Aucun élément ne correspond à la recherche ' + category + ': ' + input)
        return 'Aucun élément ne correspond à la recherche ' + category + ': ' + input
    }
}