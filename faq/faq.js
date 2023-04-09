const questionBoxes = document.querySelectorAll(".question-plus-arrow")
let questions = document.querySelectorAll(".question")
let arrows = document.querySelectorAll("i")
let hiddenText = document.querySelectorAll(".answer")


/*
Highlight the question + rotate an arrow 180deg left or right + show the current answer for one click
if clicked on another box remove extra styling and style the clicked box as it should be
 */

questionBoxes.forEach(question => question.addEventListener("click", (e) => {
    e.preventDefault       
    let clickedQuestionBox = document.querySelector(".clicked")
    if(!clickedQuestionBox) question.classList.add("clicked")
    if(clickedQuestionBox) {
        question.classList.add("clicked")
        clickedQuestionBox.classList.remove("clicked")
    }
}))

