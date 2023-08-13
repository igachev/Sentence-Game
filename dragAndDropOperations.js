export  function dragAndDropWords() {
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
    let draggedElement = document.querySelector('.draggable')

    let valueFromHoveredElement = e.target.innerText
    draggedElement.innerText = valueFromHoveredElement

    //valueFromHoveredElement.innerText = ''
    e.target.innerText = valueFromDraggedElement;
    
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