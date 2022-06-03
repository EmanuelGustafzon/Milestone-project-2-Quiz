let displayQuestionOptions = document.getElementById('display-question-options')
let questionBox = document.getElementById('question-box')
let optionsBox = document.getElementById('options-box')


let startQuiz = document.getElementById('start-quiz')
startQuiz.addEventListener('click', runQuiz);



function runQuiz (event) {
    startQuiz.style.backgroundColor = "yellow";
    startQuiz.innerHTML = "Stop Quiz and Show Result";
  
   


}

/**
 * Questions Arrey
 */
let questions = [ {
    question: 'how do you say hello in spanish?',
    options: [{a: 'Hola'},{b: 'Ciao'}, {c: 'Que tal'} , {d: 'Bueno'}], 
},
{
    question: 'how do you say hello in Swedish?',
    years: [{a: 'hej'},{b: 'nej'}, {c: 'dosa'} , {d: 'rem'}], 
},
{
    question: 'how do you say hello in english?',
    years: [{a: 'Hello'},{b: 'hi'}, {c: 'bye'} , {d: 'car'}], 
},

]