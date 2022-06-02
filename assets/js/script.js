const question = document.querySelector("#question");
const choices = document.querySelector(".choices-text");

let currentQuestion = {}
let acceptingAnswers = true 
let time = 1000
let availableQuestions = []

let questions = [
    {
        question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
        choice1: 'Boolean',
        choice2: 'Undefined',
        choice3: 'Object',
        choice4: 'Integer',
        answer: 3,
    },
    {
        question: 'Javascript is an ______ language?',
        choice1: 'Object-Oriented',
        choice2: 'Object-Based',
        choice3: 'Procedural',
        choice4: 'None of the above',
        answer: 1,
    },
    {
        question: 'How do we write a comment in javascript?',
        choice1: '/* */',
        choice2: '//',
        choice3: '#',
        choice4: '$$',
        answer: 2,
    },
    {
        question: 'Which function is used to serialize an object into JSON string in javascript?',
        choice1: 'parse()',
        choice2: 'convert()',
        choice3: 'stringify()',
        choice4: 'None of the above',
        answer: 3,
    }
]


