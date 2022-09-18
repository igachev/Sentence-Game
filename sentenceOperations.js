

let sentences;


export async function getRandomSentence() {
let url = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1'
try {
    let res = await fetch(url)
    return await res.json()
} catch (error) {
    console.log(error);
}
}

export async function unorderedSentence() {
     sentences = await getRandomSentence()
    let sentenceText = sentences.quotes[0].text
    let sentenceSplit = sentenceText.split(' ')
    console.log(sentenceSplit);
    let divContainer = document.createElement('div')
    divContainer.classList.add('text-row')
    let arr = []

    while(arr.length < sentenceSplit.length) {
        let randomIndex = Math.floor(Math.random() * sentenceSplit.length)
        if(arr.indexOf(randomIndex) === -1) {
            arr.push(randomIndex)
        }
    }
    
    for(let i = 0; i < arr.length; i++) {
        let word = document.createElement('span')
        word.classList.add('text-item')
        word.textContent = sentenceSplit[arr[i]]        
        word.setAttribute('draggable','true')
        divContainer.append(word)
             
    }
    
    let container = document.querySelector('.container')
    container.appendChild(divContainer)
    
}


export async function orderedSentence() {
    let sentenceText = sentences.quotes[0].text
    let sentenceSplit = sentenceText.split(' ')
    let wordsArr = []
    for(let i = 0; i < sentenceSplit.length; i++) {
        wordsArr.push(sentenceSplit[i])
    }
   
    return wordsArr;
}

 export function checkSentence(lastlyMovedWords,orderedSentence) {
    if(lastlyMovedWords.every((val,index) => 
            val === orderedSentence[index])) {
        alert('Congratulations!The sentence is correct!')
     }
     else {
        alert('Error!The sentence is not in correct order!Try Again!')
     }
}

export async function answer() {
    let sentenceText = sentences.quotes[0].text
    let sentenceSplit = sentenceText.split(' ')
    let divContainer = document.createElement('div')
    divContainer.classList.add('text-row-answer')

    for(let i = 0; i < sentenceSplit.length; i++) {
        let word = document.createElement('span')
        word.classList.add('text-item-answer')
        word.textContent = sentenceSplit[i]        
        divContainer.append(word)  
    }
    
    const showSentence = document.querySelector('.show-ordered-sentence')
    showSentence.appendChild(divContainer)
}