/**
 * Created by JACKIERIEL on 24-Oct-18.
 */
//import questions from './question.js'
//Variable declartions
var currentQuestion = 0;
var score = 0;
var nextButton = document.getElementsByClassName('next-btn');


//console.log(nextButton.textContent="testing");


// This load the questions to the div in the html
function startQuestion(){
    loadQuestion(0);
}


function loadQuestion(questionIndex)
{
    var questionEl = document.getElementById('question');

    var opt1 = document.getElementById('opt1');
    var opt2 = document.getElementById('opt2');
    var opt3 = document.getElementById('opt3');
    var opt4 = document.getElementById('opt4');

    if(questionEl){
        var q = questions[questionIndex];
        // questionEl.textContent = "("+(questionIndex + 1) +") . " + q.question;
        questionEl.textContent =  q.question;
        opt1.textContent = q.option1;
        opt2.textContent = q.option2;
        opt3.textContent = q.option3;
        opt4.textContent = q.option4;
    }

};

function loadNextQuestion()
{
    var totQuestion = questions.length;
    var selectedOption = document.querySelector('input[type = radio]:checked');
    if(!selectedOption)
    {
        alert('Please choose your answer!');
        return;
    }

    //console.log(selectedOption.value);
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer)
    {
        alert('Correct!');
        score +=10;
    }
    else
    {
        alert('Wrong! Correct answer is : ' + (questions[currentQuestion].answer) );
        scores();
        callUfuk();
        // newLocation();
    }

    //Reset default
    selectedOption.checked = false;

    currentQuestion++; // Load next question

    // if last question reached
    if(currentQuestion == totQuestion - 1)
    {
        nextButton.textContent = 'Finished';
    }

    // Display total score if questions' finished
    if(currentQuestion == totQuestion)
    {
        var resultCont = document.getElementById('result');
        var container = document.getElementById('quizContainer');
        var restartButton = document.getElementById('gotoHome');
        
        container.style.display = 'none';
        resultCont.style.display = 'block';
        restartButton.style.display = 'block';
        resultCont.textContent = 'Your Score is : ' + score + ' Points';    
        callUfuk();
    }

    loadQuestion(currentQuestion);
};

// This is used to display the total point if the user fail before reaching last question
function scores()
{
    var resultCont = document.getElementById('result');
        var container = document.getElementById('quizContainer');
        var restartButton = document.getElementById('gotoHome');
        
        container.style.display = 'none';
        resultCont.style.display = 'block';
        restartButton.style.display = 'block';
        resultCont.textContent = 'Your Score is : ' + score + ' Points';    
}


// Display home button
function ufuk()
{

    var homeContainer = document.getElementById('gotoHome').value;
    // window.alert(homeContainer);
    homeContainer.style.display  =  'block';
    homeContainer.textContent =  'score';

}

function callUfuk()
{
    ufuk();
    var restartButton = document.getElementById('gotoHome');
    restartButton.style.display = 'none';
}


// This function redirect to home page after the quiz has been completed
 function newLocation() {
    window.location="index.html";
} 


// THis call the reload function
function home(){
    newLocation();
}





