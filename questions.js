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
    answer: ["Samsung", "Sony", "Nokia"],
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


    var correctOrIncorrectEl = document.getElementById("correctOrIncorrect");
    var currentQuestion = 0;
    var countDownEl = document.getElementById("timer");
    var timeLeft = 100;
    var correctAnswerCounterEl = document.getElementById("correctAnswerCounter");
    var incorrectAnswerCounterEl = document.getElementById("incorrectAnswerCounter");
    var correctAnswerCounter = 0;
    var incorrectAnswerCounter = 0;
    let score = 0;
    

    var quizFinishedEl = document.getElementById("quizFinished");
    var quizFinishedTitleEl = document.getElementById("quizFinishedTitle");
    var finalScoreEl = document.getElementById("finalScore");
    var enterInitialsTextBoxEl = document.getElementById("enterInitialsTextBox");
    var submit = document.getElementById("submit");
    
    
    // CountDown timer function
    function countDown(){
      var timer = setInterval(function(){
        if(timeLeft <= 0) {
          clearInterval(timer);
          countDownEl.innerHTML = "Time's up";
          quizFinishedEl.style.display = "block";
          bodyOfTheQuiz.style.display = "none";
        } else {
          countDownEl.innerHTML = "Time remaining: " + timeLeft + " seconds";
        }
        timeLeft -= 1;
      }, 1000) // update the timer every second
    }
    
    
    



function startQuiz() {
  var bodyOfTheQuiz = document.getElementById("bodyOfTheQuiz");
  bodyOfTheQuiz.style.display = "none";
  quizFinishedEl.style.display = "none";
  var startQuizButton = document.getElementById("startQuiz");
  startQuizButton.addEventListener("click", function() {

      countDown()

    if (bodyOfTheQuiz.style.display === "none") {
      bodyOfTheQuiz.style.display = "block";
      startQuizButton.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", startQuiz);

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

          var myCheckBox = document.getElementById("myCheckBox");
          var cheatModeAnswerChecked = document.getElementById("cheatModeAnswerChecked");

          myCheckBox.addEventListener("change", function() {
            if (this.checked) {
              cheatModeAnswerChecked.textContent = questions[currentQuestion].correctAnswer;
              
              }
            });
            // Add event listener to check if the clicked button is correct
            answerButton.addEventListener("click", function() {
              if (this.textContent === questions[currentQuestion].correctAnswer) {
                correctOrIncorrectEl.textContent = "Correct!";
                correctAnswerCounter++;
                //console.log("Correct answers: " + correctAnswerCounter);
                correctAnswerCounterEl.textContent = "Correct answers: " + correctAnswerCounter;
                setTimeout(function() {
                  correctOrIncorrectEl.textContent = "";
                }, 1000); 
              } else {
                correctOrIncorrectEl.textContent = "Incorrect!";
                incorrectAnswerCounter++;
                incorrectAnswerCounterEl.textContent = "Incorrect answers: " + incorrectAnswerCounter;
                timeLeft -=10;
                setTimeout(function() {
                  correctOrIncorrectEl.textContent = "";
                }, 1000); 
              }
          
          // Move on to the next question
          currentQuestion++;
          if (currentQuestion < questions.length) {
            displayQuestion();

            if (myCheckBox.checked) {
              cheatModeAnswerChecked.textContent = questions[currentQuestion].correctAnswer;
            } else {
              cheatModeAnswerChecked.textContent = "";
            }

          } else {
            // End of quiz
            alert("Quiz complete!");
            //clearInterval(timer);
            countDownEl.style.display = "none";
            
            bodyOfTheQuiz.style.display = "none";
            quizFinishedEl.style.display = "block";
          }
          score = timeLeft;
          finalScoreEl.textContent  = "Your score is: " + score;
          
        });
      }
    }
    var enterInitialsTextBoxEl = document.getElementById("enterInitialsTextBox");
    submit.addEventListener("click", function(){
      var initials = enterInitialsTextBoxEl.value;
      var studentData = {
        initials: initials, 
        studentScore: score
      }
      localStorage.setItem("studentData", JSON.stringify(studentData));
      console.log(localStorage.getItem("studentData"))
      var highscores = document.createElement("div");
      document.body.appendChild(highscores);
      highscores = localStorage.getItem("studentData")
      console.log(highscores);
    })
    // Start the quiz
    displayQuestion();