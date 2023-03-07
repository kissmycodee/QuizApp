let questions = [
  {
    question: "Wer hat HTML erfunden ?",
    answer_1: "Robbie Williams",
    answer_2: "Ich",
    answer_3: "Tim Berners Lee",
    answer_4: "Robbie Williams",
    right_answer: 3,
  },
  {
    question: "Wer ist cool",
    answer_1: "Robbie Williams",
    answer_2: "Robbie Williams",
    answer_3: "Orhan",
    answer_4: "Robbie Williams",
    right_answer: 3,
  },
  {
    question: "Wer liebt Programmieren",
    answer_1: "Robbie Williams",
    answer_2: "Robbie Williams",
    answer_3: "Orhan",
    answer_4: "Robbie Williams",
    right_answer: 3,
  },
  {
    question: "Wer ist der Programmierer",
    answer_1: "Robbie Williams",
    answer_2: "Robbie Williams",
    answer_3: "Orhan",
    answer_4: "Robbie Williams",
    right_answer: 3,
  },
  {
    question: "Wer ist berühmt",
    answer_1: "Robbie Williams",
    answer_2: "Robbie Williams",
    answer_3: "Orhan",
    answer_4: "Robbie Williams",
    right_answer: 3,
  },
];

let rightQuestions = 0
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3')
let AUDIO_FAIL = new Audio('audio/wrong.mp3')


function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
    if(gameIsOver()) {
       showEndScreen()
    } else { 
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length
}


function showEndScreen() {
    document.getElementById('endScreen').style = ""
    document.getElementById('questionBody').style = "display: none"

    document.getElementById('amount-of-questions').innerHTML = questions.length
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions
    document.getElementById('header-image').src = `img/pokal.png`

}

function updateProgressBar() {
    let percent =  (currentQuestion + 1) / questions.length 
    percent = Math.round(percent * 100)
    document.getElementById('progress-bar').innerHTML = `${percent} %`
    document.getElementById('progress-bar').style = `width: ${percent}%`
}


function updateToNextQuestion() {
   
let question = questions[currentQuestion];

document.getElementById('question-number').innerHTML = currentQuestion + 1
document.getElementById("questiontext").innerHTML = question["question"];
document.getElementById("answer_1").innerHTML = question["answer_1"];
document.getElementById("answer_2").innerHTML = question["answer_2"];
document.getElementById("answer_3").innerHTML = question["answer_3"];
document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  console.log("Seleceted answer is", selection);
  let selectedQuestionNumber = selection.slice(-1);
  console.log("selectedQuestionNUmber is", selectedQuestionNumber);
  console.log("Current question is", question["right_answer"]);

  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) { // Richtige Frage beantwortet
    console.log("Richtige Antwort!!");
    document.getElementById(selection).parentNode.classList.add("bg-success");
    AUDIO_SUCCESS.play()
    rightQuestions++
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    AUDIO_FAIL.play()
}
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++; //z.B von 0 auf 1

  document.getElementById("next-button").disabled = true;

  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function restartGame() {
    document.getElementById('header-image').src = `img/quiz.jpg`
    document.getElementById('questionBody').style = "" // Questionbody wieder anzeigen
    document.getElementById('endScreen').style = "display: none" // Endscreen ausblenden

    rightQuestions= 0
    currentQuestion= 0
    init()
}


