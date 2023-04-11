var theQuestion = document.getElementById("theQuestion");

// Questions
var questions = [
    {theQuestion: "1) Who sang the title song for the latest Bond film, No Time to Die?!",
    answer: ["Adele", "Sam Smith", "Billie Eilish"],
    correctAnswer: "Billie Eilish"
    },
    //billie
    {theQuestion: " 2) Which flies a green, white, and orange (in that order) tricolor flag? ",
    answer: ["Ireland", "Ivory Coast" , "Italy"],
    correctAnswer: "Italy"
    },
    // Italy
    {
    theQuestion: "3) What company makes the Xperia model of smartphone?",
    answer: ["Samsung", "Sony ", "Nokia"],
    correctAnswer: "Sony" },
    // Sony
    {theQuestion: "4) Which city is home to the Brandenburg Gate?",
    answer: ["Vienna", "Zurich", "Berlin"],
    correctAnswer:  "Berlin",
    },
    // Berlin
    {theQuestion: "5) Which of the following is NOT a fruit?",
    answer: ["Rhubarb", "Tomatoes", "Avocados"],
    correctAnswer: "Rhubarb"
    },
    // Rhubarb
    
    {theQuestion: "6) Where was the first example of paper money used?",
    answer: ["China", "Turkey", "Greece"],
    correctAnswer: "China"},
    // China
    
    {theQuestion: "// 7) Who is generally considered the inventor of the motor car?",
    answer: ["Henry Ford", "Karl Benz", "Henry M. Leland"],
    correctAnswer: "Karl Benz"},
    // Karl Benz
    
    {theQuestion: "// 8) If you were looking at Iguazu Falls, on what continent would you be?",
    answer: ["Asia", "Africa", "South America"],
    correctAnswer: "South America"},
    // South America
    
    {theQuestion: "// 9) What number was the Apollo mission that successfully put a man on the moon for the first time in human history? ",
    answer: ["Apollo 11", "Apollo 12", "Apollo 13"],
    correctAnswer: "Apollo 11"},
    // Apollo 11
    
    {theQuestion: "// 10) Which of the following languages has the longest alphabet?",
    answer: ["Greek", "Russian", "Arabic"],
    correctAnswer: "Russian"}
    // Russian
    
];// Questions end here


//logic starts here
    var currentQuestion = 0;

// function startQuiz() {
  
//   var bodyOfTheQuiz = document.getElementById("bodyOfTheQuiz")
//   bodyOfTheQuiz.setAttribute("class", "hide");

//   bodyOfTheQuiz.removeAttribute("class")
//   startQuiz.addEventListener('click', function(){
//       console.log("quiz bytton was clicked")
//       if (bodyOfTheQuiz.style.display === "block") {
//           this.contentEditable.style.display = "none"
//       }
//           else {

//             bodyOfTheQuiz.style.display = "block";
//             console.log(bodyOfTheQuiz.style.display)
//           }
          
      
//       });

  
// }


// function startQuiz() {
//   var bodyOfTheQuiz = document.getElementById("bodyOfTheQuiz");
//   bodyOfTheQuiz.classList.add("hide");

//   var startQuizButton = document.getElementById("startQuiz");
//   startQuizButton.addEventListener("click", function() {
//     console.log("Quiz button was clicked");
//     if (bodyOfTheQuiz.style.display === "none") {
//       bodyOfTheQuiz.style.display = "block";
//     } else {
//       bodyOfTheQuiz.style.display = "none";
//     }
//   });
// }


// function startQuiz() {
//   var bodyOfTheQuiz = document.getElementById("bodyOfTheQuiz");
//   bodyOfTheQuiz.style.display = "none";
//   //bodyOfTheQuiz.classList.add("hide");

//   var startQuizButton = document.getElementById("startQuiz");
//    {
//     console.log("Quiz button was clicked");
//     if (startQuizButton.addEventListener("click", function()) {
//       bodyOfTheQuiz.style.display = "block";
   
//   });
// }

// document.addEventListener("DOMContentLoaded", function() {
//   startQuiz();
// });


function startQuiz() {
  var bodyOfTheQuiz = document.getElementById("bodyOfTheQuiz");
  bodyOfTheQuiz.style.display = "none";

  var startQuizButton = document.getElementById("startQuiz");
  startQuizButton.addEventListener("click", function() {
    console.log("Quiz button was clicked");
    if (bodyOfTheQuiz.style.display === "none") {
      bodyOfTheQuiz.style.display = "block";
      startQuizButton.style.display = "none";
    } else {
      bodyOfTheQuiz.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  startQuiz();
});








    function displayQuestion() {
      // Clear any previous buttons
      var startQuiz = document.getElementById("startQuiz");
      
      
      
      var answerButtons = document.getElementById("answerButtons");
      answerButtons.innerHTML = "";
      


      // Display the current question
      var theQuestion = document.getElementById("theQuestion");
      theQuestion.textContent = questions[currentQuestion].theQuestion;
    
      // Display the answer buttons for the current question
      var answerArray = questions[currentQuestion].answer;
      for (var i = 0; i < answerArray.length; i++) {
        var answerButton = document.createElement("button");
        answerButton.textContent = answerArray[i];
        answerButton.style.cssText = "width: 200px; height: 50px; font-size: 30px; background-color: black; color: white; border: none; margin: 20px; display: block; font-size: 16px; cursor: pointer";
        answerButton.id = "btn-" + i;
        answerButtons.appendChild(answerButton);

     
        // Add event listener to check if the clicked button is correct
        answerButton.addEventListener("click", function() {
          if (this.textContent === questions[currentQuestion].correctAnswer) {
            alert("Correct!");
          } else {
            alert("Incorrect.");
          }
    
          // Move on to the next question
          currentQuestion++;
          if (currentQuestion < questions.length) {
            displayQuestion();
          } else {
            // End of quiz
            alert("Quiz complete!");
          }
        });
      }
    }
    
    // Start the quiz
    displayQuestion();

    





    // function printBtn() {
    //     // Loop through the questions
    //     for (var i = 0; i < questions.length; i++) {
    //         var question = questions[i];
            
    //         // Create a container for the question and append it to the body
    //         var questionContainer = document.createElement("div");
    //         questionContainer.style.cssText = "margin-bottom: 20px";
    //         document.body.appendChild(questionContainer);
            
    //         // Create the question element and append it to the container
    //         var questionElement = document.createElement("div");
    //         questionElement.textContent = question.theQuestion;
    //         questionElement.style.cssText = "font-weight: bold";
    //         questionContainer.appendChild(questionElement);
            
    //         // Loop through the answer options for the current question
    //         for (var j = 0; j < question.answer.length; j++) {
    //             var answerOption = question.answer[j];
                
    //             // Create the answer button element and append it to the container
    //             var btn = document.createElement("button");
    //             btn.textContent = answerOption;
    //             btn.style.cssText = "width: 200px; height: 50px; font-size: 30px; background-color: black; color: white; border: none; margin: 20px; display: block; font-size: 16px; cursor: pointer";
    //             questionContainer.appendChild(btn);
    
    //             // use a closure to capture the current value of btn and question
    //             (function(btn, question) {
    //                 btn.addEventListener("click", function() {
    //                     if (question.correctAnswer == btn.textContent) {
    //                         alert("Answer is correct!");
    //                     } else {
    //                         alert("Answer is incorrect.");
    //                     }
    //                 });
    //             })(btn, question);
    //         }
    //     }
    // }
    




    // function printBtn() {
    //     for (var i = 0; i < questions.length; i++) {
    //         var question = questions[i];
    //         var answer = question.answer;
    
    //         for (var j = 0; j < answer.length; j++) {
    //             var btn = document.createElement("button");
    //             btn.textContent = answer[j];
    //             btn.style.cssText = "width: 200px; height: 50px; font-size: 30px; background-color: black; color: white; border: none; margin: 20px; display: block; font-size: 16px; cursor: pointer";
    //             btn.id = "btn-" + i + "-" + j; // add an id to each button element
    //             document.body.appendChild(btn);
    
    //             // use a closure to capture the current value of question and answer
    //             (function(question, answer) {
    //                 btn.addEventListener("click", function() {
    //                     if (question.correctAnswer === this.textContent) {
    //                         alert("Answer is correct");
    //                     } else {
    //                         alert("Answer is incorrect");
    //                     }
    //                 });
    //             })(question, answer[j]);
    //         }
    //     }
    // }
    




    // function printBtn() {
    //     for (var i = 0; i < questions.length; i++) {
    //       var question = questions[i];
    //       var answer = question.answer;
    //       var correctAnswer = question.correctAnswer;
    //       var buttonsContainer = document.createElement("div");
    //       buttonsContainer.style.cssText = "display: flex; flex-direction: column; align-items: center; margin-bottom: 20px;";
    //       document.body.appendChild(buttonsContainer);
    //       var questionEl = document.createElement("div");
    //       questionEl.textContent = question.theQuestion;
    //       questionEl.style.cssText = "font-size: 20px; font-weight: bold; margin-bottom: 10px;";
    //       buttonsContainer.appendChild(questionEl);
    //       for (var j = 0; j < answer.length; j++) {
    //         var btn = document.createElement("button");
    //         btn.textContent = answer[j];
    //         btn.style.cssText = "width: 200px; height: 50px; font-size: 16px; background-color: black; color: white; border: none; margin: 10px; cursor: pointer;";
    //         btn.id = "btn-" + j;
    //         buttonsContainer.appendChild(btn);
    //         (function(btn) {
    //           btn.addEventListener("click", function() {
    //             if (correctAnswer === btn.textContent) {
    //               alert("Your answer is correct!");
    //             } else {
    //               alert("Your answer is incorrect.");
    //             }
    //           });
    //         })(btn);
    //       }
    //     }
    //   }
      




// function printBtn() {
//     for (var i = 0; i < answer.length; i++) {
//         var question = questions[i];
//         var answer = question.answer;
//         var correctAnswer = question.correctAnswer;
//         var buttonsContainer = document.createElement("div");
//         buttonsContainer.style.cssText =  "display: flex; flex-direction: column; align-items: center; margin-bottom: 20px;";
//         document.body.appendChild(buttonsContainer);
//         var btn = document.createElement("button");
//         btn.textContent = answer[i];
//         btn.style.cssText = "width: 200px; height: 50px; font-size: 30px; background-color: black; color: white; border: none; margin: 20px; display: block; font-size: 16px; cursor: pointer";
//         btn.id = "btn-" + i; // add an id to each button element
//         document.body.appendChild(btn);
// console.log(answer[i])
//         // use a closure to capture the current value of btn
//         (function(btn) {
//             btn.addEventListener("click", function() {
//                 if (correctAnswer == btn.textContent) {
//                     alert("answer is correct")
//                 }
//                 else alert("answer is incorrect")
//                 console.log(correctAnswer);
//                 console.log(btn.id);
//             });
//         })(btn);
//     }
// }





// if(document.getElementById('button').clicked == true)
// {
//    alert("button was clicked");
// }






//var correctAnswer = document.getElementById("correctAnswer");




