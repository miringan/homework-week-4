// Declare questions div from HTML into variable questionsEl
var questionsEl = document.getElementById('questions');

function userAnswer(event) {

    // Which answer is the correct choice?

    // Captures object from event into buttonEl
    var buttonEl = event.target;
    
    // Extracts answer data attribute from buttonEl into answer
    var answer = buttonEl.dataset.answer;
}

// Click event listener for questionsEl
questionsEl.addEventListener('click', userAnswer);

// Question one contents
var questionOne = {

    questionText: "",

    multipleChoiceOptions: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
    ],

    correctAnswer: multipleChoiceOptions[0],

}

var questionTwo = {

    questionText: "",

    multipleChoiceOptions: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
    ],

    correctAnswer: multipleChoiceOptions[0],
}

var questionThree = {

    questionText: "",

    multipleChoiceOptions: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
    ],

    correctAnswer: multipleChoiceOptions[0],

}

var questionFour = {

    questionText: "",

    multipleChoiceOptions: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
    ],

    correctAnswer: multipleChoiceOptions[0],

}

var questionFive = {

    questionText: "",

    multipleChoiceOptions: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
    ],

    correctAnswer: multipleChoiceOptions[0],

}

var questionSix = {

    questionText: "",

    multipleChoiceOptions: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
    ],

    correctAnswer: multipleChoiceOptions[0],

}

var questionSeven = {

    questionText: "",

    multipleChoiceOptions: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
    ],

    correctAnswer: multipleChoiceOptions[0],

}

var questionEight = {

    questionText: "",

    multipleChoiceOptions: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
    ],

    correctAnswer: multipleChoiceOptions[0],

}

var questionNine = {

    questionText: "",

    multipleChoiceOptions: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
    ],

    correctAnswer: multipleChoiceOptions[0],

}

var questionTen = {

    questionText: "",

    multipleChoiceOptions: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4"
    ],

    correctAnswer: multipleChoiceOptions[0],

}