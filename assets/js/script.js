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
        oldScore = parseInt(document.getElementById('score').innerText);
        document.getElementById('score').innerText = 0;

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
if (shuffledQuestions.length > currentQuestionIndex + 104) {
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
// Questions 0 - 10
let questions = [ {
    question: 'how do you say "hello!" in Spanish?',
    answers: [{ text: 'Hola!' , correct: true } , { text: 'Ciao!', correct: false}, { text: 'Qué tal!', correct: false } , { text: 'Bueno!', correct: false }], 
},
{
    question: 'how do you say "How are you?" in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'cómo estas?', correct: true}, {text: 'no lo se', correct: false} , {text: 'eres bien?', correct: false}], 
},
{
    question: 'how do you say "Goodbye!" in Spanish?',
    answers: [{ text: 'Hola!' , correct: false } , { text: 'Ciao!', correct: true}, { text: 'Que tal!', correct: false } , { text: 'Bueno!', correct: false }], 
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
    question: 'how do you say "I want a Beer" in spanish?',
    answers: [{text: 'Quiero beber', correct: false},{text: 'Quiero un biro', correct: false}, {text: 'Quierp Vino!', correct: false} , {text: 'Quiero una cerveza', correct: true}], 
},
{
    question: 'how do you say "I like the music?" in Spanish?',
    answers: [{ text: 'Mi gustaria la musica?' , correct: false } , { text: 'Me gusta la musica?', correct: true}, { text: 'Me gusta a cantar?', correct: false } , { text: 'Me gustaria cantar', correct: false }], 
},
{
    question: 'how do you say "I need to drink water" in spanish?',
    answers: [{text: 'Necessito tomar agua', correct: true},{text: 'Ahora Quiero beber agua', correct: false}, {text: 'Me nesessito aqua', correct: false} , {text: 'Me necessito acui', correct: false}], 
},
// Questions 10-20 
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
    answers: [{ text: 'perdón' , correct: true } , { text: 'Descrubrir', correct: false}, { text: 'Perlon', correct: false } , { text: 'Discargar', correct: false }], 
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
// Questions 20-30
{
    question: 'how do you say "I need help" in Spanish?',
    answers: [{ text: 'Necesito ayuda' , correct: true } , { text: 'yo', correct: false}, { text: 'vi', correct: false } , { text: 'ni', correct: false }], 
},
{
    question: 'how do you say "I don’t understand" in Spanish?',
    answers: [{text: 'nis', correct: false},{text: 'No entiendo', correct: true}, {text: 'se', correct: false} , {text: 'ni', correct: false}], 
},
{
    question: 'how do you say "Can you repeat that?" in Spanish?',
    answers: [{ text: 'Lo se' , correct: false } , { text: 'Puede repetirlo?', correct: true}, { text: 'No puedo', correct: false } , { text: 'No quiero', correct: false }], 
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
    answers: [{text: 'Bienvenido', correct: true},{text: 'Lo quiero?', correct: false}, {text: 'Lo perdon!', correct: false} , {text: 'Lo discuple!', correct: false}], 
},
{
    question: 'how do you say "See you later" in Spanish?',
    answers: [{ text: 'Buenos noches' , correct: false } , { text: 'Hasta luego', correct: true}, { text: 'hola', correct: false } , { text: 'buenos tardes', correct: false }], 
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
// Questions 30-40
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
    answers: [{ text: 'tengo hambre' , correct: false } , { text: 'Encantado de conocerte', correct: false}, { text: 'Qué pasa?', correct: true } , { text: 'Un gusto', correct: false }], 
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
// Questions 40 - 50
{
    question: 'how do you say "I can’t complain" in Spanish?',
    answers: [{ text: 'No puedo quejarme' , correct: true } , { text: 'Cómo has estado?', correct: false}, { text: 'Que tal', correct: false } , { text: 'Cómo te va?', correct: false }], 
},
{
    question: 'how do you say "So-so" in Spanish',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Más o menos', correct: true}, {text: 'Encantado de conocerte', correct: false} , {text: 'eres bien?', correct: false}], 
},
{
    question: 'how do you say "Good, and you?" in Spanish?',
    answers: [{ text: 'Encantado de conocerte' , correct: false } , { text: 'Bien, y tú', correct: true}, { text: 'Que tal', correct: false } , { text: 'Bueno', correct: false }], 
},
{
    question: 'how do you say "How’s it going? " in spanish?',
    answers: [{text: 'Un gusto', correct: false},{text: 'Encantado de conocerte', correct: false}, {text: 'Cómo te va?', correct: true} , {text: 'Bien gusto!', correct: false}], 
},
{
    question: 'how do you say "How much does this cost?" in Spanish?',
    answers: [{ text: 'tengo hambre' , correct: false } , { text: 'Encantado de conocerte', correct: false}, { text: 'Cuánto cuesta esto?', correct: true } , { text: 'Un gusto', correct: false }], 
},
{
    question: 'how do you say "Shall we go for a drink?" in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Un gusto', correct: false}, {text: 'Todo bien', correct: false} , {text: 'Vamos a tomar una copa?', correct: true}], 
},
{
    question: 'how do you say "Do you want to catch a movie?" in Spanish?',
    answers: [{ text: 'tienes hambre' , correct: false } , { text: 'Quieres ver una película?', correct: true}, { text: 'Al pagar?', correct: false } , { text: 'Un gusto', correct: false }], 
},
{
    question: 'how do you say "Do you come here often?" in spanish?',
    answers: [{text: 'Muy bien', correct: false},{text: 'tienes hambre', correct: false}, {text: 'Un gusto', correct: false} , {text: 'Vienes a menudo?', correct: true}], 
},
{
    question: 'how do you say "How about this weather?" in Spanish?',
    answers: [{ text: 'Mi gustaria la musica?' , correct: false } , { text: 'Qué tal este clima?', correct: true}, { text: 'Me gusta a cantar?', correct: false } , { text: 'Me gustaria cantar', correct: false }], 
},
{
    question: 'how do you say "It’s so hot today! " in spanish?',
    answers: [{text: 'Hace tanto calor hoy!', correct: true},{text: 'Ahora Quiero beber agua', correct: false}, {text: 'Me nesessito aqua', correct: false} , {text: 'Me necessito acui', correct: false}], 
},
// Questions 50-60 
{
    question: 'how do you say "It’s freezing outside." in Spanish?',
    answers: [{ text: 'No puedo quejarme' , correct: false } , { text: 'Cómo has estado?', correct: false}, { text: 'Hace mucho frío ahí fuera.', correct: true } , { text: 'Cómo te va?', correct: false }], 
},
{
    question: 'how do you say "There’s a big storm coming." in Spanish',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Más o menos', correct: false}, {text: 'Encantado de conocerte', correct: false} , {text: 'Se acerca una gran tormenta.', correct: true}], 
},
{
    question: 'how do you say "Have you read any good books lately? " in Spanish?',
    answers: [{ text: 'Encantado de conocerte' , correct: false } , { text: 'Bien, y tú', correct: false}, { text: 'Que tal', correct: false } , { text: 'Has leído algún buen libro últimamente?', correct: true }], 
},
{
    question: 'how do you say "Have you seen that new film? " in spanish?',
    answers: [{text: 'Has visto esa nueva película?', correct: true},{text: 'Encantado de conocerte', correct: false}, {text: 'Cómo te va?', correct: false} , {text: 'Bien gusto!', correct: false}], 
},
{
    question: 'how do you say "What’s your favorite restaurant? " in Spanish?',
    answers: [{ text: 'tengo hambre' , correct: false } , { text: 'Encantado de conocerte', correct: false}, { text: 'Cuánto cuesta esto?', correct: false } , { text: 'Cuál es tu restaurante favorito?', correct: true }], 
},
{
    question: 'how do you say "Shall we go for a drink?" in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Un gusto', correct: false}, {text: 'Todo bien', correct: false} , {text: 'Vamos a tomar una copa?', correct: true}], 
},
{
    question: 'how do you say "What’s your favorite dessert?" in Spanish?',
    answers: [{ text: 'Cuál es tu postre favorito?' , correct: true } , { text: 'Quieres ver una película?', correct: false}, { text: 'Al pagar?', correct: false } , { text: 'Un gusto', correct: false }], 
},
{
    question: 'how do you say "Where would you like to travel" in spanish?',
    answers: [{text: 'A dónde te gustaría viajar?', correct: true},{text: 'tienes hambre', correct: false}, {text: 'Un gusto', correct: false} , {text: 'Vienes a menudo?', correct: false}], 
},
{
    question: 'how do you say "What is your dream job?" in Spanish?',
    answers: [{ text: 'Cuál es el trabajo de tus sueños?' , correct: true } , { text: 'Qué tal este clima?', correct: false}, { text: 'Me gusta a cantar?', correct: false } , { text: 'Me gustaria cantar', correct: false }], 
},
{
    question: 'how do you say "Seriously?" in spanish?',
    answers: [{text: 'Hace tanto calor hoy!', correct: false},{text: 'Ahora Quiero beber agua', correct: false}, {text: 'Vienes a menudo?', correct: false} , {text: 'En serio?', correct: true}], 
},

//questions 60 - 70
{
    question: 'how do you say "Don’t worry about it" in Spanish?',
    answers: [{ text: 'No puedo quejarme' , correct: false } , { text: 'Cómo has estado?', correct: false}, { text: 'Hace mucho frío ahí fuera.', correct: false } , { text: 'No pasa nada', correct: true }], 
},
{
    question: 'how do you say "No problem" in Spanish',
    answers: [{text: 'No hay problema', correct: true},{text: 'Más o menos', correct: false}, {text: 'Encantado de conocerte', correct: false} , {text: 'Se acerca una gran tormenta.', correct: false}], 
},
{
    question: 'how do you say "Don’t worry! " in Spanish?',
    answers: [{ text: 'Encantado de conocerte' , correct: false } , { text: 'Bien, y tú', correct: false}, { text: 'Que tal', correct: false } , { text: 'No te precupes', correct: true }], 
},
{
    question: 'how do you say "swimming" in spanish?',
    answers: [{text: 'nadar', correct: true},{text: 'Encantado de conocerte', correct: false}, {text: 'Cómo te va?', correct: false} , {text: 'Bien gusto!', correct: false}], 
},
{
    question: 'how do you say "Good luck!" in Spanish?',
    answers: [{ text: 'tengo hambre' , correct: false } , { text: 'Suerte!', correct: true}, { text: 'Cuánto cuesta esto', correct: false } , { text: 'Cuál es tu restaurante favorito', correct: false }], 
},
{
    question: 'how do you say "to watch movies" in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Un gusto', correct: false}, {text: 'Todo bien', correct: false} , {text: 'ver películas', correct: true}], 
},
{
    question: 'how do you say "to read" in Spanish?',
    answers: [{ text: 'leer' , correct: true } , { text: 'Quieres ver una película?', correct: false}, { text: 'Al pagar?', correct: false } , { text: 'Un gusto', correct: false }], 
},
{
    question: 'how do you say "to dance" in spanish?',
    answers: [{text: 'bailar', correct: true},{text: 'tienes hambre', correct: false}, {text: 'Un gusto', correct: false} , {text: 'Vienes a menudo?', correct: false}], 
},
{
    question: 'how do you say "hiking" in Spanish?',
    answers: [{ text: 'Cuál es el trabajo de tus sueños?' , correct: false } , { text: 'excursionismo', correct: true}, { text: 'Me gusta a cantar?', correct: false } , { text: 'Me gustaria cantar', correct: false }], 
},
{
    question: 'how do you say "fishing" in spanish?',
    answers: [{text: 'Hace tanto calor hoy!', correct: false},{text: 'Ahora Quiero beber agua', correct: false}, {text: 'Vienes a menudo?', correct: false} , {text: 'pescar', correct: true}], 
},
// Questions 70-80
{
    question: 'how do you say "Do you have any brothers or sisters?" in Spanish?',
    answers: [{ text: 'No puedo quejarme' , correct: false } , { text: 'Cómo has estado?', correct: false}, { text: 'Tienes hermanos o hermanas?', correct: true } , { text: 'Cómo te va?', correct: false }], 
},
{
    question: 'how do you say "Are you married?" in Spanish',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Más o menos', correct: false}, {text: 'Encantado de conocerte', correct: false} , {text: 'Estás casado?', correct: true}], 
},
{
    question: 'how do you say "Do you have any children? " in Spanish?',
    answers: [{ text: 'Encantado de conocerte' , correct: false } , { text: 'Qué edad tienen tus hijos?', correct: false}, { text: 'Tienes hijos?', correct: true } , { text: 'Has leído algún buen libro últimamente?', correct: false }], 
},
{
    question: 'how do you say "How old are your children?" in spanish?',
    answers: [{text: 'Qué edad tienen tus hijos?', correct: true},{text: 'Encantado de conocerte', correct: false}, {text: 'Tus hijos aún viven en casa?', correct: false} , {text: 'Bien gusto!', correct: false}], 
},
{
    question: 'how do you say "Do your children still live at home?" in Spanish?',
    answers: [{ text: 'tengo hambre' , correct: false } , { text: 'Encantado de conocerte', correct: false}, { text: 'Cuánto cuesta esto?', correct: false } , { text: 'Tus hijos aún viven en casa?', correct: true }], 
},
{
    question: 'how do you say "Do you have any cousins?" in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Tienes sobrinas o sobrinos?', correct: false}, {text: 'Todo bien', correct: false} , {text: 'Tienes primos?', correct: true}], 
},
{
    question: 'how do you say "Do you have any nieces or nephews?" in Spanish?',
    answers: [{ text: 'Tienes sobrinas o sobrinos?' , correct: true } , { text: 'Quieres ver una película?', correct: false}, { text: 'Al pagar?', correct: false } , { text: 'Un gusto', correct: false }], 
},
{
    question: 'how do you say "Do you have any pets?" in spanish?',
    answers: [{text: 'Tienes alguna mascota?', correct: true},{text: 'tienes hambre', correct: false}, {text: 'Un gusto', correct: false} , {text: 'Vienes a menudo?', correct: false}], 
},
{
    question: 'how do you say "Can you help me?" in Spanish?',
    answers: [{ text: 'Puedes ayudarme?' , correct: true } , { text: 'Qué tal este clima?', correct: false}, { text: 'Me gusta a cantar?', correct: false } , { text: 'Me gustaria cantar', correct: false }], 
},
{
    question: 'how do you say "What does that mean?" in spanish?',
    answers: [{text: 'Hace tanto calor hoy!', correct: false},{text: 'Ahora Quiero beber agua', correct: false}, {text: 'Vienes a menudo?', correct: false} , {text: 'Qué significa eso? ', correct: true}], 
},
// Questions 80-90
{
    question: 'how do you say "When? " in Spanish?',
    answers: [{ text: 'No puedo quejarme' , correct: false } , { text: 'Cómo has estado?', correct: false}, { text: 'Cuándo?', correct: true } , { text: 'Cómo te va?', correct: false }], 
},
{
    question: 'how do you say "How?" in Spanish',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Más o menos', correct: false}, {text: 'Cómo?', correct: true} , {text: 'Estás casado?', correct: false}], 
},
{
    question: 'how do you say "What time is it? " in Spanish?',
    answers: [{ text: 'Encantado de conocerte' , correct: false } , { text: 'Qué edad tienen tus hijos?', correct: false}, { text: 'Qué hora es?', correct: true } , { text: 'Has leído algún buen libro últimamente?', correct: false }], 
},
{
    question: 'how do you say "It is one o’clock" in spanish?',
    answers: [{text: 'Es la una', correct: true},{text: 'Encantado de conocerte', correct: false}, {text: 'Tus hijos aún viven en casa?', correct: false} , {text: 'Bien gusto!', correct: false}], 
},
{
    question: 'how do you say "It is eight o’clock" in Spanish?',
    answers: [{ text: 'tengo hambre' , correct: false } , { text: 'Encantado de conocerte', correct: false}, { text: 'Cuánto cuesta esto?', correct: false } , { text: 'Son las ocho', correct: true }], 
},
{
    question: 'how do you say "It is half past five" in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Tienes sobrinas o sobrinos?', correct: false}, {text: 'Todo bien', correct: false} , {text: 'Son las cinco y media', correct: true}], 
},
{
    question: 'how do you say "It is quarter to 11" in Spanish?',
    answers: [{ text: 'Son las once menos cuarto' , correct: true } , { text: 'Quieres ver una película?', correct: false}, { text: 'Al pagar?', correct: false } , { text: 'Un gusto', correct: false }], 
},
{
    question: 'how do you say "It is 10 minutes to seven " in spanish?',
    answers: [{text: 'Son las siete menos diez', correct: true},{text: 'tienes hambre', correct: false}, {text: 'Un gusto', correct: false} , {text: 'Vienes a menudo?', correct: false}], 
},
{
    question: 'how do you say "the bus station?" in Spanish?',
    answers: [{ text: ' la estación de autobuses' , correct: true } , { text: 'Qué tal este clima?', correct: false}, { text: 'Me gusta a cantar?', correct: false } , { text: 'Me gustaria cantar', correct: false }], 
},
{
    question: 'how do you say "the subway" in spanish?',
    answers: [{text: 'Hace tanto calor hoy!', correct: false},{text: 'Ahora Quiero beber agua', correct: false}, {text: 'Vienes a menudo?', correct: false} , {text: 'el metro', correct: true}], 
},
//Questions 90-100
{
    question: 'how do you say "The menu, please " in Spanish?',
    answers: [{ text: 'No puedo quejarme' , correct: false } , { text: 'Cómo has estado?', correct: false}, { text: 'La carta, por favor', correct: true } , { text: 'Cómo te va?', correct: false }], 
},
{
    question: 'how do you say "I would like" in Spanish',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Más o menos', correct: false}, {text: 'Quisiera', correct: true} , {text: 'Estás casado?', correct: false}], 
},
{
    question: 'how do you say "Can you bring me a" in Spanish?',
    answers: [{ text: 'Encantado de conocerte' , correct: false } , { text: 'Qué edad tienen tus hijos?', correct: false}, { text: 'Me trae un(a)', correct: true } , { text: 'Has leído algún buen libro últimamente?', correct: false }], 
},
{
    question: 'how do you say "Can I ask you for a" in spanish?',
    answers: [{text: 'Es la una', correct: true},{text: 'Encantado de conocerte', correct: false}, {text: 'Tus hijos aún viven en casa?', correct: false} , {text: 'Le pido un(a)', correct: false}], 
},
{
    question: 'how do you say "It is eight o’clock" in Spanish?',
    answers: [{ text: 'tengo hambre' , correct: false } , { text: 'Encantado de conocerte', correct: false}, { text: 'Cuánto cuesta esto?', correct: false } , { text: 'Son las ocho', correct: true }], 
},
{
    question: 'how do you say "I am hungry " in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Tienes sobrinas o sobrinos?', correct: false}, {text: 'Todo bien', correct: false} , {text: 'Tengo hambre', correct: true}], 
},
{
    question: 'how do you say "I am thirsty" in Spanish?',
    answers: [{ text: 'Tengo sed' , correct: true } , { text: 'Quieres ver una película?', correct: false}, { text: 'Al pagar?', correct: false } , { text: 'Un gusto', correct: false }], 
},
{
    question: 'how do you say "At what time does the bus / train arrive?" in spanish?',
    answers: [{text: 'A qué hora llega el tren / el autobús?', correct: true},{text: 'tienes hambre', correct: false}, {text: 'Un gusto', correct: false} , {text: 'Vienes a menudo?', correct: false}], 
},
{
    question: 'how do you say "A single ticket" in Spanish?',
    answers: [{ text: 'Un billete sencillo / pasaje de ida' , correct: true } , { text: 'Qué tal este clima?', correct: false}, { text: 'Me gusta a cantar?', correct: false } , { text: 'Me gustaria cantar', correct: false }], 
},
{
    question: 'how do you say "A round trip ticket " in spanish?',
    answers: [{text: 'Hace tanto calor hoy!', correct: false},{text: 'Ahora Quiero beber agua', correct: false}, {text: 'Vienes a menudo?', correct: false} , {text: ' Un pasaje de ida y vuelta', correct: true}], 
},
// Question 110 -120
{
    question: 'how do you say "Have a safe journey! " in Spanish?',
    answers: [{ text: 'No puedo quejarme' , correct: false } , { text: 'Cómo has estado?', correct: false}, { text: 'Buen viaje!', correct: true } , { text: 'Cómo te va?', correct: false }], 
},
{
    question: 'how do you say "Have a great holiday!" in Spanish',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Más o menos', correct: false}, {text: 'Encantado de conocerte', correct: false} , {text: 'Felices vacaciones!', correct: true}], 
},
{
    question: 'how do you say "I am at the beach" in Spanish?',
    answers: [{ text: 'Encantado de conocerte' , correct: false } , { text: 'Bien, y tú', correct: false}, { text: 'Que tal', correct: false } , { text: 'Estoy en la playa', correct: true }], 
},
{
    question: 'how do you say "This is cheap" in spanish?',
    answers: [{text: 'Esto es barrato', correct: true},{text: 'Está a la izquierda', correct: false}, {text: 'Cómo te va?', correct: false} , {text: 'Bien gusto!', correct: false}], 
},
{
    question: 'how do you say "Cheers!" in Spanish?',
    answers: [{ text: 'tengo hambre' , correct: false } , { text: 'Encantado de conocerte', correct: false}, { text: 'Salud!', correct: true } , { text: 'Cómo? or Qué?', correct: false }], 
},
{
    question: 'how do you say "That is expensive" in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Un gusto', correct: false}, {text: 'Todo bien', correct: false} , {text: 'Esto es carro', correct: true}], 
},
{
    question: 'how do you say "the supermarket " in Spanish?',
    answers: [{ text: 'No puedo quejarme' , correct: false } , { text: 'Cómo has estado?', correct: false}, { text: 'el supermercado', correct: true } , { text: 'Cómo te va?', correct: false }], 
},
{
    question: 'how do you say "It is straight ahead " in Spanish',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Más o menos', correct: false}, {text: 'Encantado de conocerte', correct: false} , {text: 'Está más adelante', correct: true}], 
},
{
    question: 'how do you say "It is to the left" in Spanish?',
    answers: [{ text: 'Encantado de conocerte' , correct: false } , { text: 'Bien, y tú', correct: false}, { text: 'Que tal', correct: false } , { text: 'Está a la izquierda', correct: true }], 
},
{
    question: 'how do you say "It is to the right " in spanish?',
    answers: [{text: 'Está a la derecha', correct: true},{text: 'Está a la izquierda', correct: false}, {text: 'Cómo te va?', correct: false} , {text: 'Bien gusto!', correct: false}], 
},
// 110 - 120
{
    question: 'how do you say "It is around the corner " in Spanish?',
    answers: [{ text: 'tengo hambre' , correct: false } , { text: 'Encantado de conocerte', correct: false}, { text: 'Está a la vuelta', correct: true } , { text: 'Cómo? or Qué?', correct: false }], 
},
{
    question: 'how do you say "A table for two please " in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Un gusto', correct: false}, {text: 'Todo bien', correct: false} , {text: 'Una mesa para dos, por favor', correct: true}], 
},
{
    question: 'how do you say "Can you explain this to me?" in Spanish?',
    answers: [{ text: 'No puedo quejarme' , correct: false } , { text: 'Cómo has estado?', correct: false}, { text: 'Me puedes explicar esto?', correct: true } , { text: 'Cómo te va?', correct: false }], 
},
{
    question: 'how do you say "Quick!" in Spanish',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Más o menos', correct: false}, {text: 'Encantado de conocerte', correct: false} , {text: 'Rapido', correct: true}], 
},
{
    question: 'how do you say "Why? " in Spanish?',
    answers: [{ text: 'Encantado de conocerte' , correct: false } , { text: 'Bien, y tú', correct: false}, { text: 'Que tal', correct: false } , { text: 'Por qué?', correct: true }], 
},
{
    question: 'how do you say "Who? " in spanish?',
    answers: [{text: 'Quién', correct: true},{text: 'Encantado de conocerte', correct: false}, {text: 'Cómo te va?', correct: false} , {text: 'Bien gusto!', correct: false}], 
},
{
    question: 'how do you say "What?" in Spanish?',
    answers: [{ text: 'tengo hambre' , correct: false } , { text: 'Encantado de conocerte', correct: false}, { text: 'Cuál?', correct: false } , { text: 'Cómo? or Qué?', correct: true }], 
},
{
    question: 'how do you say "Where?" in Spanish?',
    answers: [{text: 'tienes hambre?', correct: false},{text: 'Un gusto', correct: false}, {text: 'Todo bien', correct: false} , {text: 'Dónde', correct: true}], 
},


];