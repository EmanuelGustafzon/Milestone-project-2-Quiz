const boxQuestionOptions = document.getElementById('box-question-options')
const questionElement = document.getElementById('question')
const options = document.getElementById('options')

let shuffledQuestions, currentQuestionIndex

let startQuiz = document.getElementById('start-quiz')
startQuiz.addEventListener('click', runQuiz);



function runQuiz () {
    startQuiz.style.backgroundColor = "yellow";
    startQuiz.innerHTML = "Stop Quiz and Show Result";
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion() 
}

function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
}

function selectAnswer () {

}





/**
 * Questions Arrey
 */
let questions = [ {
    question: 'how do you say hello in spanish?',
    options: [{ text: 'Hola' , correct: true } , { text: 'Ciao', correct: false}, { text: 'Que tal', correct: false } , { text: 'Bueno', correct: false }], 
},
{
    question: 'how do you say hello in Swedish?',
    years: [{text: 'hej'},{text: 'nej'}, {text: 'dosa'} , {text: 'rem'}], 
},


]