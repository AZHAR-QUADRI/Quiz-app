const questions=[
    {
        question: "What is the maximum number of overs in a One Day International (ODI) cricket match?",
        answer:[
            {text: "20 overs", correct: false},
            {text: "40 overs", correct: false},
            {text: "50 overs", correct: true},
            {text: "60 overs", correct: false}
        ]

    },
    {
        question: "How many runs are awarded to the batting team if the ball crosses the boundary without bouncing?",
        answer:[
            {text: "4 runs", correct: false},
            {text: "6 runs", correct: true},
            {text: "1 run", correct: false},
            {text: "0 runs", correct: false}
                    ]
    },
    {
        question:"What is the term used when a bowler takes three wickets on consecutive deliveries?",
        answer:[
            {text: "Hat-trick", correct: true},
            {text: "Yorker", correct: false},
            {text: "Doosra", correct: false},
            {text: "Stumping", correct: false}
        ]
        
    },
    {
        question:"What is the term used when a bowler dismisses a batsman without any assistance from fielders or wicketkeepers?",
        answer:[
            {text: "Caught", correct: false},
            {text: "Run out", correct: false},
            {text: "Stumped", correct: false},
            {text: "Bowled", correct: true}
        ]
        
    },
    {
        question:"Who is the king of Cricket?",
        answer:[
            {text: "Ab develliers", correct: false},
            {text: "Rohit Sharma", correct: false},
            {text: "Mahendra Singh Dhoni", correct: false},
            {text: "Virat Kohli", correct: true}
        ]
        
    }

];


const questionElement=document.querySelector(".question");
const answers=document.querySelector(".answers");
const nextButton=document.querySelector(".next");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNumber=currentQuestionIndex+1;
    questionElement.innerHTML=questionNumber+". "+currentQuestion.question;


    currentQuestion.answer.forEach((element)=>{
        const button=document.createElement("button");
        button.innerHTML=element.text;
        button.classList.add("buttons");
        answers.appendChild(button);
        if(element.correct){
            button.dataset.correct=element.correct;
        }
        button.addEventListener("click",selectAnswer);

    })

}

function resetState(){
    nextButton.style.display="none";
    while(answers.firstChild){
        answers.removeChild(answers.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answers.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nextButton.style.display="block";
}



nextButton.addEventListener("click",(element)=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 })


 
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }


}

function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

startQuiz();







