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

// Declare connection for highScoresList div in HTML
var highScoresEl = document.getElementById('highScoresList');

// Quiz Indexer
var quizIndexer = 0;

// Set connection from endGameDiv to endGameEl var
var endGameEl = document.getElementById('endGameDiv');

// Set connection from welcomMessage div to welcomeMessageEl var
var welcomeMessageEl = document.getElementById('welcomeMessage');

// Create array to store high scores
var savedHighScores = [];

// Run init function to pull local storage to variables defined in this script
init();

// Run welcomeScreen function upon page load
welcomeScreen();

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
    },

    // Question 3 Seattle Sonics
    {
    questionText: "Which of these basketball players was known as the Glove on the Seattle Sonics NBA team?",
    
    multipleChoiceOptions: [
        "Shawn Kemp",
        "Kevin Durant",
        "Gary Payton",
        "Michael Jordan"
    ],

    correctAnswer: "Gary Payton",
    },

    // Question 4 Seattle Storm
    {
    questionText: "In what year was Forward Breanna Stewart drafted by the Seattle Storm?",
    
    multipleChoiceOptions: [
        "2016",
        "2015",
        "2019",
        "2013"
    ],

    correctAnswer: "2016",
    },

    // Question 5 Seattle Sounders
    {
    questionText: "Which of the following former EPL athletes were part of the Seattle Sounders?",
    
    multipleChoiceOptions: [
        "Clint Dempsey",
        "Zlatan Ibrahimovic",
        "David Beckham",
        "Frank Lampard"
    ],

    correctAnswer: "Clint Dempsey",
    },

    // Question 6 

];

// Declare and set number of total questions to the length of the quizQuestions array
var numTotalQuestions = quizQuestions.length;

// Function to populate the welcomeMessage div in the HTML file.
function welcomeScreen() {
    // Create and append an h1
    var welcomeScreenTitle = document.createElement('h1');
    welcomeScreenTitle.innerHTML = "Welcome to my Seattle sports trivia quiz."
    welcomeMessageEl.appendChild(welcomeScreenTitle);

    // Create and append a P element
    var welcomeParagraph = document.createElement('p');
    welcomeParagraph.innerHTML = "This quiz contains trivia questions on Seattle sports. Have fun!"
    welcomeMessageEl.appendChild(welcomeParagraph);

    // Create and append a button with id #startButton
    var startQuizButton = document.createElement('button');
    startQuizButton.innerHTML = "Start Quiz";
    startQuizButton.setAttribute('id', 'startButton');
    welcomeMessageEl.appendChild(startQuizButton);
}

// Start button connection from the HTML
var startButtonEl = document.getElementById('startButton');

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
        // display correct 
    } else {
        // display incorrect 
        quizTimerInterval -= 6;
    }

    // Move the quizIndexer to the next number for the quizQuestions array
    quizIndexer++;
    
    if (quizIndexer < numTotalQuestions) {
        
        // clear out dynamically created elements
        // repopulate elements with current quizQuestions position
        nextQuestion();

    }

}

// Click event listener for questionsEl
questionsEl.addEventListener('click', userAnswer);

// Function to start the game from the welcome page.
function startGame(event) {

    // Clears out welcomeMessageDiv
    welcomeMessageEl.innerHTML = "";

    // Restarts quizIndexer
    quizIndexer = 0;

    // Resets quizTimerInterval
    quizTimerInterval = 60;

    // Set userInitials to empty (default)
    userInitials = "";

    // Set numCorrect to zero (default)
    numCorrect = 0;

    // Write question
    generateQuestion();

    // Run quizTime
    quizTime();

}

// Event listener for startButtonEl to start the game.
startButtonEl.addEventListener('click', startGame);

// Function to run the quizTime
function quizTime() {
    var timerInterval = setInterval(function() {
        quizTimerInterval--;
        
        // Add time to header.
        var timeDisplay = document.getElementById('quizCountdown');
        timeDisplay = quizTimeEl.textContent = "Time Remaining: " + quizTimerInterval;

        if (quizTimerInterval === 0 || quizIndexer === numTotalQuestions){
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

// This function dynamically creates the quiz question and quiz buttons
function generateQuestion() {
    // Write question

    // Create a h2 element
    var currentQuestion = document.createElement("h2");
    
    // Set id of question h2 element
    currentQuestion.setAttribute("id", "questionH2");
    
    // Insert text
    currentQuestion.innerHTML = quizQuestions[quizIndexer].questionText;       

    // Append <button> to <body>
    questionsEl.appendChild(currentQuestion);                                  

    // Write buttons
    for (var i = 0; i < quizQuestions[quizIndexer].multipleChoiceOptions.length; i++) {
        // Creates a button for an option
        var currentButton = document.createElement("button");                                               
        
        // Grabs the current questions button content one at a time.
        currentButton.innerHTML = quizQuestions[quizIndexer].multipleChoiceOptions[i];                      
        
        // Sets the data tag to the button
        currentButton.setAttribute("data-answer", quizQuestions[quizIndexer].multipleChoiceOptions[i]);             
        
        // Sets id's for buttons
        currentButton.setAttribute("id", "button" + i);

        // Append button to the questionsEl
        questionsEl.appendChild(currentButton);                                                             
    }

}

// This function clears out the contents of the dynamically generated elements from 
// generateQuestion and repopulates the contents with the information of the current indexer of quizQuestions.
function nextQuestion() {

    // Captures questionH2 element from document into nextQuestionEl var
    var nextQuestionEl = document.getElementById('questionH2');

    // Repopulate question with current quizIndexer position of quizQuestion
    nextQuestionEl.innerHTML = quizQuestions[quizIndexer].questionText;

    // Repopulate buttons with current quizIndexer position of quizQuestions
    for (var i = 0; i < quizQuestions[quizIndexer].multipleChoiceOptions.length; i++) {

        // Captures button from document into nextButton var
        var nextButton = document.getElementById('button' + i);

        // Grabs the current questions button content one at a time.
        nextButton.innerHTML = quizQuestions[quizIndexer].multipleChoiceOptions[i];                      

        // Sets the data tag to the button
        nextButton.setAttribute("data-answer", quizQuestions[quizIndexer].multipleChoiceOptions[i]);   

    }
}

// Function to end the game when timer runs out or all questions have been answered.
function endGame() {
    
    // Thanos joke for lols
    console.log("I am inevitable.");

    // Clear out questionsEl div
    questionsEl.innerHTML = "";

    // Create h1 endGameMessage in HTML and set connection
    var endGameMessage = document.createElement('h1');

    // Add endGameMessage to endGameEl
    endGameEl.appendChild(endGameMessage);

    // Set endGameMessage to "The quiz has ended." dynamically
    endGameMessage.innerHTML = "The Quiz has ended."

    // Create h2 quizScoreEl in HTML and set connection
    var quizScoreEl = document.createElement('h2');

    // Add quizScoreEl to endGameEl
    endGameEl.appendChild(quizScoreEl);

    // Display score dynamically.
    quizScoreEl.innerHTML = "Your score was " + numCorrect + " out of " + numTotalQuestions + ".";
    
    // Create text input box
    var userInitialsInputBox = document.createElement("input");

    // Set default value of text input box to "Enter Your Initials Here..."
    userInitialsInputBox.setAttribute("value", "Enter Your Initials Here...");

    // Set id of userInitialsInputBox
    userInitialsInputBox.setAttribute("id", "userInitials")

    // Add userInitialsInputBox to endGameEl div
    endGameEl.appendChild(userInitialsInputBox);

    // Create "Submit" button
    var submitButton = document.createElement("button");

    // Set text of submit button to "Submit"
    submitButton.innerHTML = "Submit";

    // Add submit button to endGameEl div
    endGameEl.appendChild(submitButton);
    
    submitButton.addEventListener('click', submission);

    function submission(event) {
    
        // Create variable to store the user's initials and score
        var submittedScore = userInitialsInputBox.value + " " + numCorrect.toString();
    
        // Add the submittedScore to the savedHighScores array and then clears the submittedScore var
        savedHighScores.push(submittedScore);
        submittedScore = "";
    
        // Add the object to local storage
        localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores));

        renderHighScores();
    }
}

// Function to run at the beginning of the page load.
function init() {
    // Retrieves high scores from local storage
    var storedHighScores = JSON.parse(localStorage.getItem("savedHighScores"));

    // Inputs high scores from local storage into the savedHighScores array
    if (storedHighScores !== null) {
        savedHighScores = storedHighScores;
    }


}

function renderHighScores() {
    // Clear out endGameEl to make the screen blank.
    endGameEl.innerHTML = "";
    
    // Create h1 title for highScoresEl div
    var highScoresTitle = document.createElement('h1');

    // Sets text of highScoresTitle
    highScoresTitle.innerHTML = "Highscores"

    // Add highScoresTitle to highScoresEl
    highScoresEl.appendChild(highScoresTitle);

    // Populate high scores
    for (var i = 0; i < savedHighScores.length; i++) {
        var scoreItem = document.createElement('li');
        scoreItem.setAttribute("id", "list" + i);
        scoreItem.innerHTML = savedHighScores[i];
        highScoresEl.appendChild(scoreItem);
    }

    // Create button to clear high scores
    var clearHighScoresButton = document.createElement('button');

    // Setting text to the clear high scores button
    clearHighScoresButton.innerHTML = "Clear High Scores";

    // Adding the button to the endGameEl div
    endGameEl.appendChild(clearHighScoresButton);

    // Create button to play the game again
    var playAgain = document.createElement('button');

    // Setting text to the play again button
    playAgain.innerHTML = "Play Again";

    // Adding the play again button to the endGameEl div
    endGameEl.appendChild(playAgain);

    // Creating a function to clearHighScores
    function clearHighScores() {
        
        savedHighScores = [];

        // Saves empty array into local storage to clear it out.
        localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores));

        highScoresEl.innerHTML = "";

        // Create h1 title for highScoresEl div
        var highScoresTitle = document.createElement('h1');

        // Sets text of highScoresTitle
        highScoresTitle.innerHTML = "Highscores"

        // Add highScoresTitle to highScoresEl
        highScoresEl.appendChild(highScoresTitle);

    }
    
    //event listener for the clear high scores
    clearHighScoresButton.addEventListener('click', clearHighScores);

    // Creating a function to Play Again
    function playQuizAgain() {
    
        console.log("play again?");
        highScoresEl.innerHTML = "";
        endGameEl.innerHTML = "";

        welcomeScreen();
    
    }

    playAgain.addEventListener('click', playQuizAgain);

}

var viewHighScoresEl = document.getElementById("viewHighScores");

function viewHighScoresList (event) {
    console.log("View high scores list yo.")
    welcomeMessageEl.innerHTML = "";
    questionsEl.innerHTML = "";
    endGameEl.innerHTML = "";
    renderHighScores();
}

viewHighScoresEl.addEventListener('click', viewHighScoresList);



