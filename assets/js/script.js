let questionString = document.getElementById('question-string')
let optionString = document.getElementById('option-string')


let startQuiz = document.getElementById('start-quiz')
startQuiz.addEventListener('click', runQuiz);





function runQuiz (event) {
    startQuiz.style.backgroundColor = "yellow";
    startQuiz.innerHTML = "Quit Game";
    
for (let i = 0; i < questions.length; questions++) {
   console.log(questions)
}
}







/**
 * Questions Arrey
 */
let questions = [ {
    question: 'how do you say hello in spanish?',
    years: [{a: 'Hola'},{b: 'Ciao'}, {c: 'Que tal'} , {d: 'Bueno'}], 
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