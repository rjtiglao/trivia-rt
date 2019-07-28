

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

document.getElementsByTagName('BUTTON').click = function change(){
    for(i=-1;i<qna.length;i++){
        if(count === 0){
            alert("Game has started")
            count++
            timer();
        }
        else{
            document.getElementById("question").innerHTML = qna[answerCount]["question"];
            document.getElementById("answer1").innerHTML = qna[answerCount]["choices"][0];
            document.getElementById("answer2").innerHTML = qna[answerCount]["choices"][1];
            document.getElementById("answer3").innerHTML = qna[answerCount]["choices"][2];
            document.getElementById("answer4").innerHTML = qna[answerCount]["choices"][3];

        }   
    };
};

// document.getElementById(`#button`).innerHTML = "Hello World!";

// asking a question and saving the answer



