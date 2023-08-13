

let sentences;


export async function getRandomSentence() {
let url = 'https://api.quotable.io/quotes/random'
try {
    let res = await fetch(url)
    return await res.json()
} catch (error) {
    console.log(error);
}
}

export async function unorderedSentence() {
     sentences = await getRandomSentence()
     //console.log(sentences[0]);
    let sentenceText = sentences[0].content
    let sentenceSplit = sentenceText.split(' ')
    //console.log(sentenceSplit);
    let divContainer = document.createElement('div')
    divContainer.classList.add('text-row')
    divContainer.innerText = ''
    let arr = []

    while(arr.length < sentenceSplit.length) {
        let randomIndex = Math.floor(Math.random() * sentenceSplit.length)
        if(arr.indexOf(randomIndex) === -1) {
            arr.push(randomIndex)
        }
    }
    console.log(arr);
    for(let i = 0; i < arr.length; i++) {
        let word = document.createElement('span')
        word.classList.add('text-item')
        word.textContent = sentenceSplit[arr[i]]        
        word.setAttribute('draggable','true')
        divContainer.append(word)
             
    }
    
    let container = document.querySelector('.container')
    
    if(container.children[0]?.className === 'text-row') {
        container.replaceChild(divContainer,container.children[0])
    }
    else {
        container.appendChild(divContainer)
    }
}


export async function orderedSentence() {
    let sentenceText = sentences[0].content
    let sentenceSplit = sentenceText.split(' ')
    let wordsArr = []
    for(let i = 0; i < sentenceSplit.length; i++) {
        wordsArr.push(sentenceSplit[i])
    }
   
    return wordsArr;
}

 export async function checkSentence(lastlyMovedWords,orderedSentence) {
    if(lastlyMovedWords.every((val,index) => 
            val === orderedSentence[index])) {
        let confirmed = confirm('You guessed!Do you want to continue playing?')
        if(confirmed) {
            await unorderedSentence()
        }
     }
     else {
        alert('Error!The sentence is not in correct order!Try Again!')
     }
}

export async function answer() {
    let sentenceText = sentences[0].content;
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