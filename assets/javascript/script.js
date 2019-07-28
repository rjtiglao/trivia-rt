

let qna = [{
        question: "One of the first science fiction films to be taken seriously by critics and movie-goers alike, this 1968 movie was made by Stanley Kubrick. Which film is this?",
        choices:["Fantastic Voyage", "this is choice 2","this is choice 3","this is choice 4"],
        answer: "this is choice 2",
        user: ""
    },{
        question: "This is the question!",
        answer: "This is the answer!!",
        user: ""
        
    }];

let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let quest = document.getElementById("test1");
let count = 0;
let answerCount=0;


function timer(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('countDown').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

let check = function(){
    
}

let test = document.getElementById("answer1");
console.log(answer1);


//starts function onclick

test.onclick = function change(){

    //variables
    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer2");
    let answer3 = document.getElementById("answer3");
    let answer4 = document.getElementById("answer4");
    let hidden = answer2.getAttribute("style");

    // displays rest of buttons
    if(hidden === "display:none"){
        answer2.setAttribute("style", " ");
        answer3.setAttribute("style", " ");
        answer4.setAttribute("style", " ");

    }
    
    alert("Game has started")
    count++
    timer();
    document.getElementById("question").innerHTML = qna[answerCount]["question"];
    
    // updates text in buttons with choices appropriate for the question
    answer1.innerHTML = qna[answerCount]["choices"][0];
    answer2.innerHTML = qna[answerCount]["choices"][1];
    answer3.innerHTML = qna[answerCount]["choices"][2];
    answer4.innerHTML = qna[answerCount]["choices"][3];
    answer1.setAttribute("data-answer",qna[answerCount]["choices"][0]);
    answer2.setAttribute("data-answer",qna[answerCount]["choices"][1]);
    answer3.setAttribute("data-answer",qna[answerCount]["choices"][2]);
    answer4.setAttribute("data-answer",qna[answerCount]["choices"][3]);
};

// document.getElementById(`#button`).innerHTML = "Hello World!";

// asking a question and saving the answer



