const boxQuestionOptions = document.getElementById('box-question-options')
const questionElement = document.getElementById('question')
const options = document.getElementById('options')
const next =document.getElementById('next')
let shuffledQuestions, currentQuestionIndex

let startQuiz = document.getElementById('start-quiz')
startQuiz.addEventListener('click', runQuiz);
next.addEventListener('click', () => {
    currentQuestionIndex++ 
    setNextQuestion()
})

function runQuiz () {
    
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion() 
    startQuiz.style.backgroundColor = "yellow";
    startQuiz.innerHTML = "Stop Quiz and Show Result";
}

function setNextQuestion() {
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}



function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
button.classList.add('btn')
if (answer.correct) {
button.dataset.correct = answer.correct
}
button.addEventListener('click' , selectAnswer )
options.appendChild(button)
})
}

function resetState () {
    next.classList.add('hide')
    while (options.firstChild) {
        options.removeChild
        (options.firstChild)
    }
} 

function selectAnswer (e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    Array.from(options.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
        if (correct) {
            element.style.backgroundColor = 'green'
            incrementScore();
        } else {
            element.style.backgroundColor = 'red'}
          
    }

   function clearStatusClass(element) {
      
   }

   function incrementScore() {
       let oldScore = parseInt(document.getElementById('score').innerText)
       document.getElementById('score').innerText = ++oldScore
   }






/**
 * Questions Arrey
 */
let questions = [ {
    question: 'how do you say hello in spanish?',
    answers: [{ text: 'Hola' , correct: true } , { text: 'Ciao', correct: false}, { text: 'Que tal', correct: false } , { text: 'Bueno', correct: false }], 
},
{
    question: 'how do you say hello in Swedish?',
    answers: [{text: 'nej', correct: false},{text: 'hej', correct: true}, {text: 'dosa', correct: false} , {text: 'rem', correct: false}], 
},


]