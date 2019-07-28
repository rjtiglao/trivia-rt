

let qna = [{
        question: "What is the question?",
        answer: "What is the answer?",
        user: ""
    },{
        question: "This is the question!",
        answer: "This is the answer!!",
        user: ""
        
    }];

let true1 = document.getElementById("trueBtn");
let false1 = document.getElementsByClassName("falseBtn");
let quest = document.getElementById("test1");
let count = 0;



true1.onclick = function change(){

    for(i=-1;i<qna.length;i++){
    if(count === 0){
        alert("Game has started")
        count++
    }
    else{
    qna[i]["user"] =  prompt(qna[i]["question"]);
    console.log(qna[i]["user"]);
    console.log(qna[i]["question"]);
    console.log(quest); 
    document.getElementById("test1").innerHTML = qna[i]["question"];
    let text=document.getElementById("texting").value;
    qna[i].user=text;
    console.log(qna[i].user);
    }   
};
};

// document.getElementById(`#button`).innerHTML = "Hello World!";

// asking a question and saving the answer




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