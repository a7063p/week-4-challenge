
var divGroupEl = document.querySelector("#page-content");
var answerButton = document.querySelector("#page-content")
var startButton = document.querySelector("#page-content")
var timerEl = document.querySelector("#timer");
var initialButton = document.querySelector('#page-content')


var answerBtnId = 0;
var ansIndex = 0;
var timerLeft = 60;
timerEl.textContent = 60;
var indexValue= 0;
var endGame = false;
var endQuestions = false;
var viewHighScore = [];

// ///////////////////////////////////////////////////////////////////////////////////////////////


var startQuiz = function () {
    var startDivEl = document.createElement('div');
    startDivEl.className = "start-wrapper";
    startDivEl.id = "div-id";    
        divGroupEl.appendChild(startDivEl);
    
        var startTitleEl = document.createElement('h2');
        startTitleEl.textContent = " Coding Quiz Challenge"
        startTitleEl.setAttribute('style', 'text-align:center')
        startDivEl.appendChild(startTitleEl);

        var quizDetailsEl = document.createElement('p');
        quizDetailsEl.textContent = "Try to answer the following code-related questions within the time limit.Keep in mind that incorrect answers will penalize your score/time by 10 seconds!";
        quizDetailsEl.setAttribute('style', 'font-size:15px; font-weight lighter; text-align:center;')
        startDivEl.appendChild(quizDetailsEl);

        var startBtnDivEl = document.createElement('div');
        startBtnDivEl.className = 'button-wrapper';
        startDivEl.appendChild(startBtnDivEl);

        var startBtnEl = document.createElement('button')
        startBtnEl.textContent = "Start Quiz";
        startBtnEl.className = "start-btn";
        startBtnEl.id = "start-btn-id"
        startBtnEl.setAttribute("style", "text-align:center;")
        startBtnEl.type = "button"
        startBtnDivEl.appendChild(startBtnEl);
    };    

    startQuiz();

//----------Timer----------------------//


function countdown() { 
    

    var setTimeInterval = setInterval(function() {
        if (timerLeft === 0 || endGame === true ){
        clearInterval(setTimeInterval);
        timerEl.textContent=timerLeft;  
        highScoreHandler();      
        } else if (timerLeft >= 1 ) {
        timerEl.textContent = timerLeft;
        timerLeft--;
    } 
    },1000);    
};

  //-------------Start Button------------------//
//--------------------------------------------//


var startButtonHandler = function (event) {
    if(event.target.matches("#start-btn-id")) {
    console.log(event.target); 
    deleteQuestion()
    testIndex()
    countdown()
    }   
};


var questionRepo = [
    {        
        question: "what is your favorite color",
        answers: ["red", "blue", "green", "gold"],
        correctAnswer: "blue"
    },

    {        
        question: "what is your favorite food",
        answers: ["red", "blue", "green", "purple"],
        correctAnswer: "purple" 
    },
    {        
        question: "what is your favorite car",
        answers: ["toyota", "ford", "chevy", "Camaro"],
        correctAnswer: "toyota"
    }
];

var testIndex = function() {
    for (var i =0; i < questionRepo.length; i++) {       
            
            var testObj = questionRepo[indexValue]            
            if( testObj === undefined) { 
                endGame= true
                endQuestions = true            
                return; 
            }
            else {
            selectedQuestionRepo = [];
            selectedQuestionRepo.push(testObj);
            indexValue++;
            console.log(testObj.question); 
            createQuestion(testObj)
            return;        
             
         }
    }
        
}


//-------Create Questions--------------//

     var createQuestion = function(testObj) {
        //---answer index--------------//
    
        var answer = testObj.correctAnswer
        ansIndex = testObj.answers.indexOf(answer);
        console.log("Yes" + ansIndex);
        // //---------------------------------------//
        var questionDivEl = document.createElement('div');
        questionDivEl.className = "wrapper";
        questionDivEl.id = "div-id";    
        divGroupEl.appendChild(questionDivEl);

        var questionTitleEl = document.createElement('h2');
        questionDivEl.appendChild(questionTitleEl);

        var questions = document.createElement('p');
        questions.textContent = testObj.question;
        questionTitleEl.appendChild(questions);

        var answerEl = document.createElement('ul');
            answerEl.className = "question-list";
        questionTitleEl.appendChild(answerEl);

          for (var i = 0; i < testObj.answers.length; i++) {
    var answerListEl = document.createElement("li");
        answerEl.appendChild(answerListEl);

    var answerBtn = document.createElement('button')
    answerBtn.textContent = testObj.answers[i];
    answerBtn.className = "btn";
    answerBtn.setAttribute("data-btn-id", answerBtnId )
    answerBtn.type = "button"
    answerListEl.appendChild(answerBtn);
    answerBtnId++;
    }          
}; 



// --------Create Response Div------------//
//----------------------------------------//

var wrongAnswer = function() {
    answerButton.removeEventListener("click", answerButtonHandler)
    
    
    var incorrectEl = document.createElement('div');
        incorrectEl.className = 'answer-wrapper';
        incorrectEl.id = "div-two-id"; 
        divGroupEl.appendChild(incorrectEl) 
    
    var incorrectResponse = document.createElement('p');
        incorrectResponse.textContent = "Wrong Answer";
        incorrectEl.appendChild(incorrectResponse);
};


var correctAnswer = function() {
    answerButton.removeEventListener("click", answerButtonHandler)
    var correctEl = document.createElement('div');
    correctEl.className = "answer-wrapper";
    correctEl.id = "div-two-id"; 
    divGroupEl.appendChild(correctEl); 

var correctResponse = document.createElement('p');
    correctResponse.textContent = "Correct";
    correctEl.appendChild(correctResponse);      
};

//-------------------------------------------//
//-------------All Done----------------------//
var highScoreHandler = function () {
    if(endGame === false) {
        deleteQuestion();
        highScore();
    } else {
        highScore();
    }
};


var highScore = function () {
   
    var allDoneDivEl = document.createElement('div');
        allDoneDivEl.className= "wrapper"
        divGroupEl.appendChild(allDoneDivEl);

        
    var allDoneH2El = document.createElement('h2');
        allDoneH2El.textContent = "All Done!";
        allDoneDivEl.appendChild(allDoneH2El);
    
    var allDonePEl = document.createElement('p');
        allDonePEl.textContent = ("Your Final Score " + timerLeft);
        allDoneDivEl.appendChild(allDonePEl);    

    var allDoneFormEl = document.createElement('form');
        allDoneDivEl.appendChild(allDoneFormEl);
    

    var allDoneLabelEl = document.createElement('label');
        allDoneLabelEl.textContent = ('Enter Initials: ');
        allDoneLabelEl.setAttribute("for", "initial");
        allDoneFormEl.appendChild(allDoneLabelEl);

    var allDoneInputEl = document.createElement('input');
        allDoneInputEl.setAttribute("input","submit");
        allDoneInputEl.setAttribute("name", "initial");
        allDoneInputEl.setAttribute("id", "initial-id");
        allDoneInputEl.setAttribute("placeholder", "Initials");
        allDoneLabelEl.appendChild(allDoneInputEl);

    var allDoneButtonEl = document.createElement('button');
        allDoneButtonEl.textContent = "Submit";
        allDoneButtonEl.type = ('button');
        allDoneButtonEl.className = "all-done-btn";
        allDoneButtonEl.id = "all-done-btn-id"
        allDoneButtonEl.setAttribute("style", "text-align:center;")
        allDoneLabelEl.appendChild(allDoneButtonEl); 

}

var initialInput = function () {
    var score = timerLeft;
    var initial = document.querySelector('#initial-id').value
    console.log(initial);
    var high = initial.toUpperCase() + "-" + score        
    viewHighScore.push(high)
    localStorage.setItem("initials", JSON.stringify(viewHighScore))
       
};

var loadInitials = function () {
    if(localStorage.getItem("initials")=== null){
        return false 
    } else
    viewHighScore = localStorage.getItem("initials");    
    
    console.log("Found High Scores")
    viewHighScore = JSON.parse(viewHighScore);
    console.log(viewHighScore);
}
//--------------------------------------------//

var highScoreList = function () {

var scoreListEl = document.createElement('div');
scoreListEl.className = "wrapper"
divGroupEl.appendChild(scoreListEl);


var scoreListTitleEl = document.createElement('h2');
scoreListTitleEl.textContent = "High Scores"
scoreListEl.appendChild(scoreListTitleEl);


var scoreListUl = document.createElement('ul');
    scoreListUl.className = "score-list";
    scoreListEl.appendChild(scoreListUl);

  for (var i = 0; i < viewHighScore.length; i++) {
var scoreListLi = document.createElement("li");
scoreListLi.textContent = viewHighScore[i];
scoreListUl.appendChild(scoreListLi);
}

var scoreBtnDivEl = document.createElement('div');
        scoreBtnDivEl.className = ('wrapper')
        scoreListEl.appendChild(scoreBtnDivEl);

        var goBackBtnEl = document.createElement('button')
        goBackBtnEl.textContent = "Go Back";
        goBackBtnEl.className = "go-back-btn";
        goBackBtnEl.id = "go-back-btn-id"
        goBackBtnEl.setAttribute("style", "text-align:center;")
        goBackBtnEl.type = "button"
        scoreBtnDivEl.appendChild(goBackBtnEl);


        var clearScoreBtnEl = document.createElement('button')
        clearScoreBtnEl.textContent = "Clear High Score";
        clearScoreBtnEl.className = "clear-score-btn";
        clearScoreBtnEl.id = "clear-score-btn-id"
        clearScoreBtnEl.setAttribute("style", "text-align:center;")
        clearScoreBtnEl.type = "button"
        scoreBtnDivEl.appendChild(clearScoreBtnEl);
}

//--------------initial button----------------//
var initialButtonHandler = function(event) {
    event.preventDefault()
    if(event.target.matches('#all-done-btn-id')) {
        console.log(event.target);
        initialInput()
        // highScoreList()
        
    }
    
}


//-------------Answer Button------------------//
//--------------------------------------------//
var answerButtonHandler = function (event) {
    if(event.target.matches(".btn")) {
    console.log(event.target);
    var questionId = parseInt (event.target.getAttribute("data-btn-id"));    
        
    checkAnswer(questionId) 
    }   
};  

//--------------Check Answers------------}
var checkAnswer = function (questionId) {
    var compareAnswer = ansIndex
    var selectAnswerId = questionId   

    if (compareAnswer === selectAnswerId) {
        correctAnswer();  
        setTimeout(delayChange, 1000);
        
    } 
    else {
        wrongAnswer();
        setTimeout(delayChange, 1000);
        timerLeft = timerLeft - 10
        
    }
};

//-------------------SetTimeOt Function---------------//

var delayChange = function() {
    answerBtnId=0;
    deleteQuestion()
    deleteResponse()
    testIndex()    
}

//-------------------Delete Functions----------------//

var deleteQuestion = function () {
    answerButton.addEventListener("click", answerButtonHandler)
    var divSelected = document.querySelector("#div-id");
    divSelected.remove()    
}
var deleteResponse = function () {
    var divTwoSelected = document.querySelector("#div-two-id");
    divTwoSelected.remove()    
}

/////////////////////////////////////////////////////

//----------------EventsListeners-----------------------------//

// answerButton.addEventListener("click", answerButtonHandler)
startButton.addEventListener("click", startButtonHandler)   
initialButton.addEventListener("click", initialButtonHandler)


loadInitials();

//------------------------------------------------------------------//
















