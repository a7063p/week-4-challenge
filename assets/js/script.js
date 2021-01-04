var answerInputEl = document.querySelector("#answers");
var questionGroupEl = document.querySelector("#questions-group");
var questionInputEl = document.querySelector("#questions");

var buttonEl = document.querySelector("#question2-id", "#question1-id");



var question1 = function () {
    var testObj = {
        question: "What is JavaScript?",
        answer: ["program", "coffee", "computer", "Dont Know"]   
    }
      console.log(testObj);
      createQuestionEl(testObj)
     

}     


    var createQuestionEl = function(testObj) {

        var groupEl = document.createElement('div');
        groupEl.className = "question-wrapper"
        groupEl.id = "#test-id"
        // groupEl.innerHTML = "<h2 class='question-title'>" + testObj.question + "</h2>";
        
        questionGroupEl.appendChild(groupEl)

        var questionTitleEl = document.createElement('h2')
        groupEl.appendChild(questionTitleEl)

        var questions = document.createElement('p');
        questions.textContent = testObj.question
        questionTitleEl.appendChild(questions)

        var answerEl = document.createElement('ul');
            answerEl.className = "question-list"
        groupEl.appendChild(answerEl);

          for (var i = 0; i < testObj.answer.length; i++) {
    var answerListEl = document.createElement("li");
        answerEl.appendChild(answerListEl);

    var answerBtn = document.createElement('button')
    answerBtn.textContent = testObj.answer[i];
    answerBtn.className = "btn";
    answerBtn.type = "submit"
    answerListEl.appendChild(answerBtn);

    }
}
        
        
    

//     var createAnswerEl = function(testObj) {
//         var ansGroupeEl = document.createElement('div');
//         ansGroupEl.document.createElement('ul')
//         questionGroupEl.appendChild(ansGroupeEl);




//     for (var i = 0; i < testObj.answer.length; i++) {
//     var answerEl = document.createElement("li");
//         answerEl.textContent = testObj.answer[i];
//         answerEl.className = "btn"
//         answerInputEl.appendChild(answerEl);
//     }
//     }
// }


    






        // var questionEl = document.createElement("p");
        //     questionEl.textContent = testObj.question;
        //     questionInputEl.appendChild(questionEl);

        // for (var i = 0; i < testObj.answer.length; i++) {
        //     var answerEl = document.createElement("li");
        //         answerEl.textContent = testObj.answer[i];
        //         answerEl.className = "btn"
        //         answerInputEl.appendChild(answerEl);
        //     }
    
 
question1()
    



var question2 = function () {
    var testObj = {
        question: "What day is it?",
        answer: ["Monday", "tuesday", "wednesyday", "Thursday"]   
    }
      console.log(testObj);
      testFunc(testObj)

}     

















