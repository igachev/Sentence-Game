



async function getRandomSentence() {
let url = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1'
try {
    let res = await fetch(url)
    return await res.json()
} catch (error) {
    console.log(error);
}
}

async function unorderedSentence() {
     sentences = await getRandomSentence()
    let sentenceText = sentences.quotes[0].text
    let sentenceSplit = sentenceText.split(' ')
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
        let word = document.createElement('article')
        word.classList.add('text-item')
        word.textContent = sentenceSplit[arr[i]]        
        word.setAttribute('draggable','true')
        divContainer.append(word)
             
    }
    
    let container = document.querySelector('.container')
    container.appendChild(divContainer)
    
}




async function dragAndDropWords() {
    let allWords = document.getElementsByClassName('text-item')
    for(let i = 0; i < allWords.length; i++) {
        allWords[i].addEventListener('dragstart',dragStart)
        allWords[i].addEventListener('dragover',dragOver);
        allWords[i].addEventListener('drop',dragDrop)
    } 
}

function dragStart(e) {
    e.dataTransfer.setData("Text", e.target.innerText);
   e.target.classList.add('draggable')
  }

function dragDrop(e) {
   // swap values between dragged element and dropped element
    let valueFromDraggedElement = e.dataTransfer.getData("Text")
    let draggedElementValue = document.querySelector('.draggable')
    draggedElementValue.innerText = e.target.innerText
    e.target.innerText = ''
    e.target.append(valueFromDraggedElement);

    let allWords = document.getElementsByClassName('text-item')
    for(let i = 0; i < allWords.length; i++) {
       if(allWords[i].classList.contains('draggable')) {
        allWords[i].classList.remove('draggable')
       }
    }
}

function dragOver(e) {
    e.preventDefault()
}

async function orderedSentence() {
    let sentenceText = sentences.quotes[0].text
    let sentenceSplit = sentenceText.split(' ')
    let wordsArr = []
    for(let i = 0; i < sentenceSplit.length; i++) {
        wordsArr.push(sentenceSplit[i])
    }
   
    return wordsArr;
}

function checkSentence(lastlyMovedWords,orderedSentence) {
    if(lastlyMovedWords.every((val,index) => 
            val === orderedSentence[index])) {
        alert('Congratulations!The sentence is correct!')
     }
     else {
        alert('Error!The sentence is not in correct order!Try Again!')
     }
}

const btn = document.querySelector('.btn')

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

const tryApp = async () => {
    try {
        await unorderedSentence()
        await dragAndDropWords()   
        
    } catch (error) {
        console.log(error);
    }
}

const start = () => {
    tryApp()
}

start()
   


    


  
    
 

