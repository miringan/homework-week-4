// Start button connection from the HTML
var startButtonEl = document.getElementById('startButton');

// Declare questions div from HTML into variable questionsEl
var questionsEl = document.getElementById('questions');

// Declare var for quiz time h1 from HTML file
var quizTimeEl = document.getElementById('quizCountdown');

// Declare var to store number of correct answers for each quiz
var numCorrect;

// Declare var for quiz time length and set to 60 seconds.
var quizTimerInterval = 60;

// Declare var to store user initials
var userInitials;



// Quiz Indexer
var quizIndexer = 0;

// Create object array to store all questions for the quiz.
var quizQuestions = [
    // Question 1 Seattle Mariners
    {
    questionText: "Who was the first Mariner inducted into the MLB Hall of Fame?",

    multipleChoiceOptions: [
        "Ichiro Suzuki",
        "Ken Griffey Jr.",
        "Edgar Martinez",
        "Robinson Cano"
    ],

    correctAnswer: "Ken Griffey Jr.",
    },

    // Question 2 Seattle Seahawks
    {
    questionText: "Who was the quarterback of the Seattle Seahawks when they made their first Super Bowl appearance in Superbowl 40?",
    
    multipleChoiceOptions: [
        "Russell Wilson",
        "Tavaris Jackson",
        "Charlie Whitehurst",
        "Matt Hasselbeck"
    ],

    correctAnswer: "Matt Hasselbeck",
    }

];

// Declare and set number of total questions to the length of the quizQuestions array
var numTotalQuestions = quizQuestions.length;

// Compare user question with correct question
function userAnswer(event) {

    console.log("sdoifnweofinewofin");
    // Which answer is the correct choice?

    // Captures object from event into buttonEl
    var buttonEl = event.target;

    // Extracts answer data attribute from buttonEl into answer
    var answer = buttonEl.dataset.answer;

    if (answer === quizQuestions[quizIndexer].correctAnswer){
        // Increment numCorrect
        numCorrect++;
        // display correct - can either appendClassAttribute from hidden to visible to appendHTML if i want to write the message in JS
    } else {
        // display incorrect - *see note above*
        quizTimerInterval -= 6;
    }

    quizIndexer++;
    // clear out dynamically created elements
    // repopulate elements with current quizQuestions position

}

// Click event listener for questionsEl
questionsEl.addEventListener('click', userAnswer);

// Function to start the game from the welcome page.
function startGame(event) {
    
    // Hide the welcome message
    startButtonEl.parentNode.className = "hidden";

    // Write question
    var currentQuestion = document.createElement("h2");                        // Create a h2 element
    currentQuestion.innerHTML = quizQuestions[quizIndexer].questionText;       // Insert text
    questionsEl.appendChild(currentQuestion);                                  // Append <button> to <body>

    // Write button
    for (var i = 0; i< quizQuestions[quizIndexer].multipleChoiceOptions.length; i++) {
        var currentButton = document.createElement("button");                                               // Creates a button for an option
        currentButton.innerHTML = quizQuestions[quizIndexer].multipleChoiceOptions[i];                      // Grabs the current questions button content one at a time.
        currentButton.setAttribute("data-answer", quizQuestions[quizIndexer].multipleChoiceOptions[i]);
        questionsEl.appendChild(currentButton);                                                             // Append button to the questionsEl
    }

}

startButtonEl.addEventListener('click', startGame);

function quizTime() {
    var timerInterval = setInterval(function() {
        quizTimerInterval--;
        quizTimeEl.textContent = "Time Remaining: " + quizTimerInterval;

        if (quizTimerInterval === 0){
            clearInterval(timerInterval);
        }
    }, 1000);
}

function endGame() {
    // when time reaches 0
    // when all the questions have been answered
    // calculate score
    // user record initials
    // save to local storage
}

// Need to create another html file called high scores.