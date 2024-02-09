let questions = [
  {
    ques: "which language is used to make structure of a website",
    ans: [
      { Text: "CSS", correct: false },
      { Text: "Javascript", correct: false },
      { Text: "HTML", correct: true },
      { Text: "SQL", correct: false },
    ],
  },
  {
    ques: "which language is used for styling of a website",
    ans: [
      { Text: "CSS", correct: true },
      { Text: "Javascript", correct: false },
      { Text: "HTML", correct: false },
      { Text: "SQL", correct: false },
    ],
  },
  {
    ques: "which language is used for performing various logical operations of a website",
    ans: [
      { Text: "CSS", correct: false },
      { Text: "Javascript", correct: true },
      { Text: "HTML", correct: false },
      { Text: "SQL", correct: false },
    ],
  },
  {
    ques: "which language is used for managing the database of a website",
    ans: [
      { Text: "CSS", correct: false },
      { Text: "Javascript", correct: false },
      { Text: "HTML", correct: false },
      { Text: "SQL", correct: true },
    ],
  },
  {
    ques: "which language is used for managing the backend of a website",
    ans: [
      { Text: "CSS", correct: false },
      { Text: "Javascript", correct: false },
      { Text: "HTML", correct: false },
      { Text: "PHP", correct: true },
    ],
  },
  {
    ques: "which language is used for managing the database of a website",
    ans: [
      { Text: "CSS", correct: false },
      { Text: "Javascript", correct: false },
      { Text: "HTML", correct: false },
      { Text: "SQL", correct: true },
    ],
  },
];
const quesElement = document.getElementById("ques");
const answer = document.querySelector(".ansbtn");
const nextBtn = document.getElementById("nextbtn");

let currentQuesIndex = 0;
let score = 0;
function startQuiz() {
  currentQuesIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
  function showQuestion() {
    resetState();
    let currentQues = questions[currentQuesIndex];
    let quesNo = currentQuesIndex + 1;
    quesElement.innerHTML = quesNo + "." + currentQues.ques;
    currentQues.ans.forEach((ans) => {
      const button = document.createElement("button");
      button.innerHTML = ans.Text;
      button.classList.add("btn");
      answer.appendChild(button);
      if (ans.correct) {
        button.dataset.correct = ans.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  function resetState() {
    nextBtn.style.display = "none";
    while (answer.firstChild) {
      answer.removeChild(answer.firstChild);
    }
  }

  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }

    Array.from(answer.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextBtn.style.display = "block";
  }
  function showScore() {
    resetState();
    quesElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "play again";
    nextBtn.style.display = "block";
  }
  function handleNextbtn() {
    currentQuesIndex++;
    if (currentQuesIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  nextBtn.addEventListener("click", () => {
    if (currentQuesIndex < questions.length) {
      handleNextbtn();
    } else {
      startQuiz();
    }
  });
}
startQuiz();
