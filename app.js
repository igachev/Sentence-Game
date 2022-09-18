import {unorderedSentence,orderedSentence,
checkSentence,answer} from "./sentenceOperations.js";

import {dragAndDropWords} from "./dragAndDropOperations.js";

const btn = document.querySelector('.btn')
const showBtn = document.querySelector('.show-btn')



btn.addEventListener('click', async() => {
//compare ordered sentence with lastly moved words
//and if true your sentence is ordered properly
//else it is not ordered properly

    let lastlyMovedWords = []
    let sentence = await orderedSentence();
    console.log(sentence);
    let allWords = document.querySelectorAll('.text-item')

        for(let a = 0; a < allWords.length; a++) {
            lastlyMovedWords.push(allWords[a].innerText);
        }

     checkSentence(lastlyMovedWords,sentence)
})

showBtn.addEventListener('click',() => {
    const showSentence = document.querySelector('.show-ordered-sentence')
    if(!showSentence.classList.contains('show')) {
        showSentence.classList.add('show')
    }
    else {
        showSentence.classList.remove('show')
    }
})

const tryApp = async () => {
    try {
        await unorderedSentence()
        await dragAndDropWords() 
         answer() 
        
    } catch (error) {
        console.log(error);
    }
}

const start = () => {
    tryApp()
}

start()
   


    


  
    
 

