// https://www.youtube.com/watch?v=riDzcEQbX6k
// https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown

const boxQuestionOptions = document.getElementById('box-question-options')
const questionElement = document.getElementById('question')
const options = document.getElementById('options')
const next = document.getElementById('next')
let shuffledQuestions, currentQuestionIndex

let startQuiz = document.getElementById('start-quiz')
startQuiz.addEventListener('click', runQuiz);

next.addEventListener('click', () => {
    currentQuestionIndex++ 
    setNextQuestion()
    
 
})

function runQuiz () {
    let oldScore = parseInt(document.getElementById('score').innerText)
        document.getElementById('score').innerText = 0
        
        boxQuestionOptions.classList.remove('hide')
        next.classList.remove('hide')
        startQuiz.classList.add('hide')
     

    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion() 
    startQuiz.innerHTML = "Restart";

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
 // This function removes the previous question
function resetState () {
   
    
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

    if (correct) {
        oldScore = parseInt(document.getElementById('score').innerText)
        document.getElementById('score').innerText = ++oldScore 
    }
})
if (shuffledQuestions.length > currentQuestionIndex + 1) {
    next.classList.remove('hide')
  } else {
    startQuiz.classList.remove('hide')
    next.classList.add('hide')
    boxQuestionOptions.classList.add('hide')
    alert(`You got ${oldScore} points!`)
  }
}

function setStatusClass(element, correct) {
 
   
    if (correct) {
        element.style.backgroundColor = '#9BFDCE'   
       
   
    } else {
        element.style.backgroundColor = '#FC5F7C'}
    
    }

  
// Here is the countdown

function timeStart () {
    let timeleft = 10;
    let downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
      }
      document.getElementById("progressBar").value = 10 - timeleft;
      timeleft -= 1;
    }, 1000);
    }

    
    


 








/**
 * Questions Arrey
 */
let questions = [ {
    question: 'how do you say hello in Spanish?',
    answers: [{ text: 'Hola' , correct: true } , { text: 'Ciao', correct: false}, { text: 'Que tal', correct: false } , { text: 'Bueno', correct: false }], 
},
{
    question: 'how do you say how are you in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'como estas?', correct: true}, {text: 'no lo se', correct: false} , {text: 'eres bien?', correct: false}], 
},
{
    question: 'how do you say goodbye in Spanish?',
    answers: [{ text: 'Hola' , correct: false } , { text: 'Ciao', correct: true}, { text: 'Que tal', correct: false } , { text: 'Bueno', correct: false }], 
},
{
    question: 'how do you say nice to meet you in spanish?',
    answers: [{text: 'Te gusto!', correct: false},{text: 'Conocer', correct: false}, {text: 'Mucho gusto!', correct: true} , {text: 'Bien gusto!', correct: false}], 
},
]