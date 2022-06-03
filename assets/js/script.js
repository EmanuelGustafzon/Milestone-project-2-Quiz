const boxQuestionOptions = document.getElementById('box-question-options')
const questionElement = document.getElementById('question')
const options = document.getElementById('options')

let shuffledQuestions, currentQuestionIndex

let startQuiz = document.getElementById('start-quiz')
startQuiz.addEventListener('click', runQuiz);



function runQuiz () {
    
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion() 
    startQuiz.style.backgroundColor = "yellow";
    startQuiz.innerHTML = "Stop Quiz and Show Result";
}

function setNextQuestion() {
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

function selectAnswer () {

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