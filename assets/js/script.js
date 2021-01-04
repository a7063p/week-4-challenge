var answerInputEl = document.querySelector("#answers");
var questionInputEl = document.querySelector("#questions")
var buttonEl = document.querySelector("#question2-id", "#question1-id");

var questionArray = [];



var question1 = function () {
    var testObj = {
        question: "What is JavaScript?",
        answer: ["program", "coffee", "computer", "Dont Know"]   
    }
    questionArray.push(testObj.question);
    console.log(questionArray);

    //testFunc()
    
}



var testFunc = function(question1) {

    var questionEl = document.createElement("p");
        questionEl.textContent = testObj.question;
        questionInputEl.appendChild(questionEl);

    for (var i = 0; i < testObj.answer.length; i++) {
        var answerEl = document.createElement("li");
            answerEl.textContent = testObj.answer[i];
            answerEl.className = "btn"
            answerInputEl.appendChild(answerEl);
        }
}   

// testFunc()
    
question1()




var buttonEl = document.querySelector("#question2-id", "#question1-id");













