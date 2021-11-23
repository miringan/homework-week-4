# What starting data will my application need to run?

Questions and Answers:

    Array list for our series of questions

    Each question will be an object

        var questionOne {

            questionText: "Insert question here.",
            
            multipleChoiceOptions: [
                "Answer 1",
                "Answer 2",
                "Answer 3",
                "Answer 4"
            ],

            correctAnswer: multipleChoiceOptions[insert number],

        }

Timer / Score

# What kinds of actions does my application need to do?

- start the game
function startGame () { ... }

    - hide welcome
    function hideWelcome () { ... }

    - display the next question
    function displayNextQuestion () { ... }

    -start the countdown timer
    function startTime () { ... }

- validate that we clicked a button

- validate the user's answer (if else with conditionals)

    - If the user's answer is wrong, subtract time from the timer

    - If the user's answer is correct, increment number correct

- display the next question

- end the game

    - stop the timer from counting down (clearInterval())

    - record and store the user's initials

    - record and store the user's score

        - score is percent of number correct / number of answers

# What global variables do I need to declare?

- number of correct answers
var numCorrect;

- timer interval
var timerInterval;

- user initials
var userInitials = "";

- number of total questions
const numTotalQuestions = number;