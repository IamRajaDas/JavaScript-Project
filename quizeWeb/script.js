const questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Sherk",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Human",correct:false}
        ]
    },
    {
        question:"Which is a fruit among them?",
        answers:[
            {text:"Paper",correct:false},
            {text:"Lotus",correct:false},
            {text:"Rose",correct:false},
            {text:"Apple",correct:true}
        ]
    },
    {
        question:"Who was the player of the match in T20 world cup 2024 final?",
        answers:[
            {text:"Virat Kohli",correct:true},
            {text:"Rohit Sharma",correct:false},
            {text:"Jasprit Bumrah",correct:false},
            {text:"Hardik Pandiya",correct:false}
        ]
    },
    {
        question:"Who is the current caption of indian cricket team?",
        answers:[
            {text:"Virat Kohli",correct:false},
            {text:"M. S. Dhoni",correct:false},
            {text:"Rohit Sharma",correct:true},
            {text:"Hardik Pandya",correct:false}
        ]
    },
]

const questionElement=document.getElementById("question");
const answerBtn=document.getElementById("answer-buttons");
const nextBtn=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
    
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextBtn.style.display="none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect=selectBtn.dataset.correct==='true';
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button=>{
        if(button.dataset.correct==='true'){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextBtn.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`Your scored ${score} out of ${questions.length} !`;
    nextBtn.innerHTML="Play Again!";
    nextBtn.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();