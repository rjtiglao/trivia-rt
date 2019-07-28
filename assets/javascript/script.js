


// Objects
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

//Variables
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let countHide = document.getElementById("countHide");
let hidden = answer2.getAttribute("style");
let count = 0;
let answerCount=0;


// FUNCTIONS
function show(){
        // displays rest of buttons
        answer2.setAttribute("style", " ");
        answer3.setAttribute("style", " ");
        answer4.setAttribute("style", " ");
    
}
function hide(){
    countHide.setAttribute("style", "display:none");
    answer1.setAttribute("style", "display:none");
    answer2.setAttribute("style", "display:none");
    answer3.setAttribute("style", "display:none");
    answer4.setAttribute("style", "display:none");
}
 
function timer(){
    var sec = 2;
    var min = 2;
    var timer = setInterval(function(){
        document.getElementById('countDown').innerHTML=`${min}: ${sec}`;
        sec--;
        if (sec < 0 && min < 0) {
            hide();
            clearInterval(timer);
            // run function to check score
            //change qcontainer to contain score, thanks for playing message and gif
        }
        else if (sec < 0) {
            min--
            sec = 59;
            // run function to check score
            //change qcontainer to contain score, thanks for playing message and gif
        }
    }, 1000);
}

let check = function(){
    
}



let test = document.getElementById("answer1");
console.log(answer1);


//MAIN CODE

test.onclick = function change(){

    // displays rest of buttons
    if(hidden === "display:none"){
        show();
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



