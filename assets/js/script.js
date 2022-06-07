// https://www.youtube.com/watch?v=riDzcEQbX6k Thanks to this video who helped me get started with the quiz. 


const boxQuestionOptions = document.getElementById('box-question-options');
const questionElement = document.getElementById('question');
const options = document.getElementById('options');
const next = document.getElementById('next');
let shuffledQuestions, currentQuestionIndex
let result = document.getElementById('result');
let startQuiz = document.getElementById('start-quiz');
// buttoms with eventlisteners for the Start buttom and next buttom.
startQuiz.addEventListener('click', runQuiz);
let oldScore = parseInt(document.getElementById('score').innerText);
        document.getElementById('score').innerText = 0;
next.addEventListener('click', () => {
    currentQuestionIndex++; 
    setNextQuestion();
    
 
});
// this function makes the quizrun The startbutton hides, the questions appear and the next butttom. It also sets the questions to be sorted in a random way.
function runQuiz () {
    
        
        boxQuestionOptions.classList.remove('hide');
        next.classList.remove('hide');
        startQuiz.classList.add('hide');
        result.classList.add('hide');
        document.getElementById('intro').classList.add('hide')

    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    setNextQuestion();
    startQuiz.innerHTML = "Restart";

}
// Function that makes the next question show up and the old question disapear.
function setNextQuestion() {
    resetState();
showQuestion(shuffledQuestions[currentQuestionIndex]);



}


// This functions shows the questions and options and also creates buttoms for each answer option
function showQuestion(question) {
questionElement.innerText = question.question;

question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text
button.classList.add('btn');




if (answer.correct) {
button.dataset.correct = answer.correct;

}
button.addEventListener('click' , selectAnswer);
options.appendChild(button);
});
}
 // This function removes the previous question
function resetState () {
  
    
    while (options.firstChild) {
        options.removeChild
        (options.firstChild);
    }

    


} 
// User select the answer he or she thinks is correct.
function selectAnswer (e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    
    Array.from(options.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);

    if (correct) {
        oldScore = parseInt(document.getElementById('score').innerText);
        document.getElementById('score').innerText = ++oldScore;
    }
});
if (shuffledQuestions.length > currentQuestionIndex + 10) {
    next.classList.remove('hide');
  } else {
    result.classList.remove('hide');
    result.innerText = (`Congratulations, you got ${oldScore} points! `);
    
    startQuiz.classList.remove('hide');
    next.classList.add('hide');
    boxQuestionOptions.classList.add('hide');
    
  }
}
 // After the user give an answer the right answers box will turn green and the others will turn red.
function setStatusClass(element, correct) {
   
    if (correct) {
        element.style.backgroundColor = '#9BFDCE';   
       
   
    } else {
        element.style.backgroundColor = '#FC5F7C'}
    }

/**
 * Questions Arrey
 */
// first ten
let questions = [ {
    question: 'how do you say "hello" in Spanish?',
    answers: [{ text: 'Hola' , correct: true } , { text: 'Ciao', correct: false}, { text: 'Que tal', correct: false } , { text: 'Bueno', correct: false }], 
},
{
    question: 'how do you say "How are you?" in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'como estas?', correct: true}, {text: 'no lo se', correct: false} , {text: 'eres bien?', correct: false}], 
},
{
    question: 'how do you say "Goodbye!" in Spanish?',
    answers: [{ text: 'Hola' , correct: false } , { text: 'Ciao', correct: true}, { text: 'Que tal', correct: false } , { text: 'Bueno', correct: false }], 
},
{
    question: 'how do you say "Nice to meet you!" in spanish?',
    answers: [{text: 'Te gusto!', correct: false},{text: 'Conocer', correct: false}, {text: 'Mucho gusto!', correct: true} , {text: 'Bien gusto!', correct: false}], 
},
{
    question: 'how do you say "My name is" in Spanish?',
    answers: [{ text: 'tengo hambre' , correct: false } , { text: 'náme es', correct: false}, { text: 'Mi nombre es', correct: true } , { text: 'yo nombre eres', correct: false }], 
},
{
    question: 'how do you say "where is the toilet?" in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'como esta el bano?', correct: false}, {text: 'no lo se bano', correct: false} , {text: 'donde esta el bano?', correct: true}], 
},
{
    question: 'how do you say "Can I pay?" in Spanish?',
    answers: [{ text: 'Puedo descansar?' , correct: false } , { text: 'Puedo pagar?', correct: true}, { text: 'Al pagar?', correct: false } , { text: 'quiero poder', correct: false }], 
},
{
    question: 'how do you say "I want Beer" in spanish?',
    answers: [{text: 'Quiero beber', correct: false},{text: 'Quiero un biro', correct: false}, {text: 'Quierp Vino!', correct: false} , {text: 'Quiero una cerveza', correct: true}], 
},
{
    question: 'how do you say "I like the music?" in Spanish?',
    answers: [{ text: 'Mi gustaria la musica?' , correct: false } , { text: 'Me gusta la musica?', correct: true}, { text: 'Me gusta a cantar?', correct: false } , { text: 'Me gustaria cantar', correct: false }], 
},
{
    question: 'how do you say "I need to drink water" in spanish?',
    answers: [{text: 'Me necessito tomar agua', correct: true},{text: 'Ahora Quiero beber agua', correct: false}, {text: 'Me nesessito aqua', correct: false} , {text: 'Me necessito acui', correct: false}], 
},
// secound ten 
{
    question: 'how do you say "yes" in Spanish?',
    answers: [{ text: 'sí' , correct: true } , { text: 'yo', correct: false}, { text: 'vi', correct: false } , { text: 'ni', correct: false }], 
},
{
    question: 'how do you say "no?" in Spanish?',
    answers: [{text: 'nis', correct: false},{text: 'no', correct: true}, {text: 'se', correct: false} , {text: 'ni', correct: false}], 
},
{
    question: 'how do you say "I don´t know" in Spanish?',
    answers: [{ text: 'Lo se' , correct: false } , { text: 'No lo se', correct: true}, { text: 'No puedo', correct: false } , { text: 'No quiero', correct: false }], 
},
{
    question: 'how do you say "Thank you!" in spanish?',
    answers: [{text: 'Te gusto!', correct: false},{text: 'Te quiero', correct: false}, {text: 'Gracias!', correct: true} , {text: 'Bien gusto!', correct: false}], 
},
{
    question: 'how do you say "Excuse me! (To get someones attantion)"',
    answers: [{ text: 'perdón' , correct: false } , { text: 'Descrubrir', correct: false}, { text: 'Perlon', correct: true } , { text: 'Discargar', correct: false }], 
},
{
    question: 'how do you say "Sorry!" in Spanish?',
    answers: [{text: 'Lo siento!', correct: true},{text: 'Lo quiero?', correct: false}, {text: 'Lo perdon!', correct: false} , {text: 'Lo discuple!', correct: false}], 
},
{
    question: 'how do you say "Good morning/Good Day" in Spanish?',
    answers: [{ text: 'Buenos noches' , correct: false } , { text: 'Buenos días', correct: true}, { text: 'hola', correct: false } , { text: 'buenos tardes', correct: false }], 
},
{
    question: 'how do you say "Good evening" in spanish?',
    answers: [{text: 'Buenos noches', correct: false},{text: 'Buenos días', correct: false}, {text: 'hola', correct: false} , {text: 'buenos tardes', correct: true}], 
},
{
    question: 'how do you say "What is your name?" in Spanish?',
    answers: [{ text: 'Cual es tú numero' , correct: false } , { text: 'Cual es tú nombre', correct: true}, { text: 'cual nombre tienes', correct: false } , { text: 'Nombre cual es?', correct: false }], 
},
{
    question: 'how do you say "What is your name / What are you called ?" in spanish?',
    answers: [{text: 'Cómo te llamas?', correct: true},{text: 'cómo callito?', correct: false}, {text: 'cómo llamas', correct: false} , {text: 'Qué llama?', correct: false}], 
},
//third ten
{
    question: 'how do you say "I need help" in Spanish?',
    answers: [{ text: 'Necesito ayuda' , correct: true } , { text: 'yo', correct: false}, { text: 'vi', correct: false } , { text: 'ni', correct: false }], 
},
{
    question: 'how do you say "I don’t understand" in Spanish?',
    answers: [{text: 'nis', correct: false},{text: 'Puede repetirlo?', correct: true}, {text: 'se', correct: false} , {text: 'ni', correct: false}], 
},
{
    question: 'how do you say "Can you repeat that?" in Spanish?',
    answers: [{ text: 'Lo se' , correct: false } , { text: 'No lo se', correct: true}, { text: 'No puedo', correct: false } , { text: 'No quiero', correct: false }], 
},
{
    question: 'how do you say "I’m lost " in spanish?',
    answers: [{text: 'Te gusto!', correct: false},{text: 'Te quiero', correct: false}, {text: 'Estoy perdida ', correct: true} , {text: 'Bien gusto!', correct: false}], 
},
{
    question: 'how do you say "Do you speak English?"',
    answers: [{ text: 'Hablas Sueco?' , correct: false } , { text: 'Hablas algien?', correct: false}, { text: 'Hablas inglés?', correct: true } , { text: 'Dices inglés', correct: false }], 
},
{
    question: 'how do you say "Welcome!" in Spanish?',
    answers: [{text: 'Hasta luego', correct: true},{text: 'Lo quiero?', correct: false}, {text: 'Lo perdon!', correct: false} , {text: 'Lo discuple!', correct: false}], 
},
{
    question: 'how do you say "See you later" in Spanish?',
    answers: [{ text: 'Buenos noches' , correct: false } , { text: 'Buenos días', correct: true}, { text: 'hola', correct: false } , { text: 'buenos tardes', correct: false }], 
},
{
    question: 'how do you say "See you" in spanish?',
    answers: [{text: 'Buenos noches', correct: false},{text: 'Buenos días', correct: false}, {text: 'hola', correct: false} , {text: 'Nos vemos', correct: true}], 
},
{
    question: 'how do you say "Take care!" in Spanish?',
    answers: [{ text: 'Cual es tú numero' , correct: false } , { text: 'Cuídate!', correct: true}, { text: 'cual nombre tienes', correct: false } , { text: 'Nombre cual es?', correct: false }], 
},
{
    question: 'how do you say "Have a good day" in spanish?',
    answers: [{text: 'Feliz día', correct: true},{text: 'cómo callito?', correct: false}, {text: 'cómo llamas', correct: false} , {text: 'Qué llama?', correct: false}], 
},
// fourth ten
{
    question: 'how do you say "nice to meet you" in Spanish?',
    answers: [{ text: 'Encantado de conocerte' , correct: true } , { text: 'Cómo has estado?', correct: false}, { text: 'Que tal', correct: false } , { text: 'Cómo te va?', correct: false }], 
},
{
    question: 'how do you say "A pleasure" in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Un gusto', correct: true}, {text: 'Encantado de conocerte', correct: false} , {text: 'eres bien?', correct: false}], 
},
{
    question: 'how do you say "How have you been?" in Spanish?',
    answers: [{ text: 'Encantado de conocerte' , correct: false } , { text: 'Cómo has estado?', correct: true}, { text: 'Que tal', correct: false } , { text: 'Bueno', correct: false }], 
},
{
    question: 'how do you say "How’s it going? " in spanish?',
    answers: [{text: 'Un gusto', correct: false},{text: 'Encantado de conocerte', correct: false}, {text: 'Cómo te va?', correct: true} , {text: 'Bien gusto!', correct: false}], 
},
{
    question: 'how do you say "What’s up?" in Spanish?',
    answers: [{ text: 'tengo hambre' , correct: false } , { text: 'Encantado de conocerte', correct: false}, { text: '¿Qué pasa?', correct: true } , { text: 'Un gusto', correct: false }], 
},
{
    question: 'how do you say "Good, thanks " in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Un gusto', correct: false}, {text: 'Todo bien', correct: false} , {text: 'Bien, gracias', correct: true}], 
},
{
    question: 'how do you say "Very well?" in Spanish?',
    answers: [{ text: 'tienes hambre' , correct: false } , { text: 'Muy bien', correct: true}, { text: 'Al pagar?', correct: false } , { text: 'Un gusto', correct: false }], 
},
{
    question: 'how do you say "All good " in spanish?',
    answers: [{text: 'Muy bien', correct: false},{text: 'tienes hambre', correct: false}, {text: 'Un gusto', correct: false} , {text: 'Todo bien', correct: true}], 
},
{
    question: 'how do you say "I’m tired" in Spanish?',
    answers: [{ text: 'Mi gustaria la musica?' , correct: false } , { text: 'Estoy cansado', correct: true}, { text: 'Me gusta a cantar?', correct: false } , { text: 'Me gustaria cantar', correct: false }], 
},
{
    question: 'how do you say "I’m sick" in spanish?',
    answers: [{text: 'Estoy enfermo', correct: true},{text: 'Ahora Quiero beber agua', correct: false}, {text: 'Me nesessito aqua', correct: false} , {text: 'Me necessito acui', correct: false}], 
},
// fith ten same as fourth
{
    question: 'how do you say "nice to meet you" in Spanish?',
    answers: [{ text: 'Encantado de conocerte' , correct: true } , { text: 'Cómo has estado?', correct: false}, { text: 'Que tal', correct: false } , { text: 'Cómo te va?', correct: false }], 
},
{
    question: 'how do you say "A pleasure" in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Un gusto', correct: true}, {text: 'Encantado de conocerte', correct: false} , {text: 'eres bien?', correct: false}], 
},
{
    question: 'how do you say "How have you been?" in Spanish?',
    answers: [{ text: 'Encantado de conocerte' , correct: false } , { text: 'Cómo has estado?', correct: true}, { text: 'Que tal', correct: false } , { text: 'Bueno', correct: false }], 
},
{
    question: 'how do you say "How’s it going? " in spanish?',
    answers: [{text: 'Un gusto', correct: false},{text: 'Encantado de conocerte', correct: false}, {text: 'Cómo te va?', correct: true} , {text: 'Bien gusto!', correct: false}], 
},
{
    question: 'how do you say "What’s up?" in Spanish?',
    answers: [{ text: 'tengo hambre' , correct: false } , { text: 'Encantado de conocerte', correct: false}, { text: '¿Qué pasa?', correct: true } , { text: 'Un gusto', correct: false }], 
},
{
    question: 'how do you say "Good, thanks " in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Un gusto', correct: false}, {text: 'Todo bien', correct: false} , {text: 'Bien, gracias', correct: true}], 
},
{
    question: 'how do you say "Very well?" in Spanish?',
    answers: [{ text: 'tienes hambre' , correct: false } , { text: 'Muy bien', correct: true}, { text: 'Al pagar?', correct: false } , { text: 'Un gusto', correct: false }], 
},
{
    question: 'how do you say "All good " in spanish?',
    answers: [{text: 'Muy bien', correct: false},{text: 'tienes hambre', correct: false}, {text: 'Un gusto', correct: false} , {text: 'Todo bien', correct: true}], 
},
{
    question: 'how do you say "I’m tired" in Spanish?',
    answers: [{ text: 'Mi gustaria la musica?' , correct: false } , { text: 'Estoy cansado', correct: true}, { text: 'Me gusta a cantar?', correct: false } , { text: 'Me gustaria cantar', correct: false }], 
},
{
    question: 'how do you say "I’m sick" in spanish?',
    answers: [{text: 'Estoy enfermo', correct: true},{text: 'Ahora Quiero beber agua', correct: false}, {text: 'Me nesessito aqua', correct: false} , {text: 'Me necessito acui', correct: false}], 
},
];