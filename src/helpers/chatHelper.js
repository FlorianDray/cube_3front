import chaussures from '../fakeData.js'

/**
 * Reçoit le message utilisateur et actualise la liste dialog avec la demande et la réponse
 * @param {string} input  message utilisateur
 * @param {array[Object]} dialog   liste des messages
 * @returns {array[Object]} dialog liste des messages
 */
export function converse(input, dialog) {
    if(!input) {
        dialog.push({
            msg: input,
            user: 'user'
        })
        dialog.push({
            msg: 'je n\'ai pas compris',
            user: 'bot'
        })
    } else {
        if (selection.length < 1 ){
            selection = []
        }
        dialog.push({
            msg: input,
            user: 'user'
        })
        dialog.push({
            msg: chooseResponse(input , selection),
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
function chooseResponse(input , selection ) {
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
            return getProducts('nike', 'marque')
    }
}

/**
 * Retourne la liste des éléments d'une catégorie
 * @param {string} category
 * @returns {array} message du bot
 */
function getCategories(category){
    // let arrayOut = []
    console.log(chaussures)
    const arrayOut = [... new Set(chaussures.map(c => c[category]))];

    // if (chaussures.length > 0){
    //     chaussures.forEach(element => {
    //         if(!arrayOut.includes(element[category])  ){
    //             arrayOut.push(element[category])
    //         }
    //     })
    // } else {
    //     console.log('Aucune chaussure disponible')
    //     return 'Aucune chaussure disponible'
    // }
    //
    if (arrayOut.length > 0){
        console.log(arrayOut)
        //return arrayOut;
        return arrayOut.join(", ");
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
function getProducts(input, category){
    // DV : l'utilisation d'un new Set comme ci-dessus est plutôt recommandée.
    let arrayOut = [];
    console.log(category)
    if (chaussures.length > 0){
        chaussures.forEach(element => {
            if(element[category] === input){
                arrayOut.push(element)
            }
        })
    } else {
        console.log('Aucune chaussure disponible')
        return 'Aucune chaussure disponible'
    }
    if (arrayOut.length > 0){
        console.log(arrayOut)
        // DV : on pourrait ici exploiter les images des produits...
        return `Nous avons ${arrayOut.length} produits correspondant à cette demande : ${arrayOut.map(c => c.nom).join(", ")}.`;
    } else{
        console.log('Aucun élément ne correspond à la recherche ' + category + ': ' + input)
        return 'Aucun élément ne correspond à la recherche ' + category + ': ' + input
    }
}
