// Define the quiz questions and answers
const quizData = [
    {
      question: "Question 1: What is the capital of France?",
      options: ["Paris", "London", "Rome", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Question 2: Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Venus", "Mercury"],
      answer: "Mars"
    },
    {
      question: "Question 3: Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
      answer: "Leonardo da Vinci"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submitBtn");
  const popupContainer = document.getElementById("popup");
  const leaderboardContainer = document.getElementById("leaderboard");
  
  // Display the current question and options
  function displayQuestion() {
    const question = quizData[currentQuestion].question;
    const options = quizData[currentQuestion].options;
  
    const optionsList = options
      .map(option => `<li><input type="radio" name="answer" value="${option}">${option}</li>`)
      .join("");
  
    quizContainer.innerHTML = `
      <div class="question">${question}</div>
      <ul class="options">${optionsList}</ul>
    `;
  }
  
  // Check the user's answer and display the popup
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return;
  
    const userAnswer = selectedOption.value;
    const correctAnswer = quizData[currentQuestion].answer;
  
    if (userAnswer === correctAnswer) {
      score++;
      showPopup("Correct!", "popup-correct");
    } else {
      showPopup("Wrong!", "popup-wrong");
    }
  
    currentQuestion++;
  
    // Check if there are more questions or display the leaderboard
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      showLeaderboard();
    }
  }
  
  // Display the popup with feedback
  function showPopup(message, className) {
    popupContainer.innerHTML = `<p class="${className}">${message}</p>`;
    popupContainer.style.display = "block";
    setTimeout(() => {
      popupContainer.style.display = "none";
    }, 1500);
  }
  
  // Display the leaderboard with user's score
  function showLeaderboard() {
    const totalQuestions = quizData.length;
    const incorrectAnswers = totalQuestions - score;
  
    leaderboardContainer.innerHTML = `
      <h2>Leaderboard</h2>
      <table>
        <tr>
          <th>Total Questions</th>
          <td>${totalQuestions}</td>
        </tr>
        <tr>
          <th>Correct Answers</th>
          <td>${score}</td>
        </tr>
        <tr>
          <th>Incorrect Answers</th>
          <td>${incorrectAnswers}</td>
        </tr>
      </table>
    `;
  
    leaderboardContainer.style.display = "block";
  }
  
  // Attach event listeners
  submitButton.addEventListener("click", checkAnswer);
  
  // Start the quiz
  displayQuestion();
  