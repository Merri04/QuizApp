// Array of quiz questions
const questions = [
    {
        question: "What is the term for teaching a machine to learn from data without being explicitly programmed?",
        answers: [
            { text: "Machine Learning", correct: true},
            { text: "Deep Learning", correct: false},
            { text: "Artificial Neural Network", correct: false},
            { text: "Algorithmic Intelligence", correct: false},
        ]
    },
    {
        question: "Which programming language is commonly used for implementing machine learning algorithms?",
        answers: [
            { text: "Python", correct: true},
            { text: "Java", correct: false},
            { text: "C++", correct: false},
            { text: "Ruby", correct: false},
        ]
    },
    {
        question: "What is the term for biased outcomes in machine learning models based on the training data?",
        answers: [
            { text: "Algorithmic Fairness", correct: true},
            { text: "Data Neutrality", correct: false},
            { text: "Bias Correctness", correct: false},
            { text: "Ethical Parity", correct: false},
        ]
    },
    {
        question: "Which humanoid robot, known for its ability to walk and run, was developed by Boston Dynamics?",
        answers: [
            { text: "ASIMO", correct: false},
            { text: "Atlas", correct: true},
            { text: "Pepper", correct: false},
            { text: "Sophia", correct: false},
        ]
    },
    {
        question: "In the movie 'Ex Machina,' what is the name of the humanoid robot with artificial intelligence?",
        answers: [
            { text: "Eve", correct: false},
            { text: "Ava", correct: true},
            { text: "Iris", correct: false},
            { text: "Luna", correct: false},
        ]
    },
    {
        question: " How is AI commonly used in medical image analysis?",
        answers: [
            { text: "Predicting the weather", correct: false},
            { text: " Cooking recipes", correct: false},
            { text: "Diagnosing diseases", correct: true},
            { text: "Building websites", correct: false},
        ]
    },
    {
        question: "Which computer scientist is often considered the 'father of artificial intelligence' and developed the Turing Test?",
        answers: [
            { text: "Herbert Simon", correct: false},
            { text: "Marvin Minsky", correct: false},
            { text: "John McCarthy", correct: false},
            { text: "Alan Turing", correct: true},
        ]
    },
    {
        question: "What is the name of the robot developed by Softbank Robotics that is designed to recognize and respond to human emotions?",
        answers: [
            { text: "Spot", correct: false},
            { text: "Atlas", correct: false},
            { text: "Nao", correct: true},
            { text: "Jibo", correct: false},
        ]
    },
    {
        question: "What is the name of the natural language processing AI developed by OpenAI that generates human-like text?",
        answers: [
            { text: "Alexa", correct: false},
            { text: "GPT-3", correct: true},
            { text: "Siri", correct: false},
            { text: "Watson", correct: false},
        ]
    },
    
    
];
// DOM elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Variables to manage quiz state
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Function to display a question
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Create buttons for each answer
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Function to reset the quiz state
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to handle user answer selection
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    // Disable all buttons after an answer is selected
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Function to display the final score
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// Function to handle the next button click
function hanleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

// Event listener for the next button
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        hanleNextButton();
    }else{
        startQuiz();
    }
})

// Start the quiz when the page loads
startQuiz();

