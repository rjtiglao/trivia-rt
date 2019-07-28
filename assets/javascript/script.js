


// Objects
let qna = [{
        question: "One of the first science fiction films to be taken seriously by critics and movie-goers alike, this 1968 movie was made by Stanley Kubrick. Which film is this?",
        choices:["Fantastic Voyage", "Plan 9 From Outer Space","Metropolis","2001: A Space Odyssey"],
        answer: "2001: A Space Odyssey",
        user: ""
    },{
        question: `"In space, no one can hear you scream." This was the famous tag line for which 1979 space thriller starring Sigourney Weaver?
        "`,
        choices: ["The Terminator", "The Blob", "Swamp Thing", "Alien"],
        answer: "Alien",
        user: ""
    },
    {
        question: `Which 1979 movie about post-apocalyptic life in the Outback became a cult hit and put young Australian actor Mel Gibson on the fast track to super-stardom?`,
        choices: ["Mad Max", "Bird on a Wire", "Lethal Weapon", "The Bounty"],
        answer: "Mad Max",
        user: ""
    },
    {
        question: `"I'll be back." Arnold turned this simple line into his greatest catchphrase, and this movie spawned a robot army of stunt-spectacular sequels, a Universal Studios attraction, and a TV show. Which movie is this?`,
        choices: ["Commando", "The Terminator", "I,Robot", "Robocop"],
        answer: "The Terminator",
        user: ""
    },
    {
        question: `"What are you trying to tell me? That I can dodge bullets?" Well, thanks to the ground-breaking "bullet time" special effects created for this 1999 movie, when he was ready, Keanu Reeves didn't have to. What's the movie?`,
        choices: ["Johnny Mcemonit", "V for Vendetta", "Equilibrium", "The Matrix"],
        answer: "The Matrix",
        user: ""
    },
    {
        question: `Will Smith stars as Capt. Steven Hiller in this movie, the top grossing movie in 1996. Hey, it's not every day you get to save the world AND punch tentacled aliens in the face! What movie is this?`,
        choices: ["Wild Wild West", "I Am Legend", "Independence Day", "Bad Boys"],
        answer: "Independence Day",
        user: ""
    },
    {
        question: `This movie features a DeLorean that looks like a spaceship but is actually a time machine, a jacket that looks like a life vest, and Michael J. Fox using the musical stylings of Eddie Van Halen to torture his future father. Oh, the '80s! What's that movie title?`,
        choices: ["Teen Wolf", "Ferris Bueller's Day Off", "Time Bandits", "Back to the Future"],
        answer: "Back to the Future",
        user: ""
    },{
        question: `Harrison Ford, trying to avoid being typecast for all time as street-wise gunslinging crook Han Solo, took the role of street-wise gunslinging cop Rick Deckard (see, the haircut is totally different), whose job is to hunt down a few rogue androids in the streets of Los Angeles in this film. Name the film.`,
        choices: ["Raiders of the Lost Ark", "Force 10 From Navarone", "Blade Runner", "Witness"],
        answer: "Blade Runner",
        user: ""
    },{
        question: `An ocean liner is found in the Gobi Desert, Richard Dreyfuss gets a sunburn on half of his face, and spaceships shaped like ice cream cones fail to pay the Ohio highway toll. Throw in Devil's Tower and a government cover-up, and you get what movie?`,
        choices: ["The X Files", "E.T", "Close Encounters of the Third Kind", "Jaws"],
        answer: "Close Encounters of the Third Kind",
        user: ""  
    },
    {
        question: `One of the most technically innovative movies in filmmaking history, and certainly one of the most popular, this movie took place in a galaxy far, far away and forever changed the way movies were made and watched. Name this movie.`,
        choices: ["Start Trek: The Motion Picture", "Star Wars", "Howard the Duck", " Battlefield Earth"],
        answer: "Star Wars",
        user: ""
    }
];

//Variables
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let countHide = document.getElementById("countHide");
let hidden = answer2.getAttribute("style");
let count = 0;
let answerCount=0;
let correctAnswer=0;
let timerCheck = false;


// FUNCTIONS
function show(){
        // displays rest of buttons
        answer2.setAttribute("style", " ");
        answer3.setAttribute("style", " ");
        answer4.setAttribute("style", " ");
    
}


function hide(){
    answer2.setAttribute("style", "display:none");
    answer3.setAttribute("style", "display:none");
    answer4.setAttribute("style", "display:none");
}
 

// starts a 3 minute timer and updates every second
function timer(){
    var sec = 59;
    var min = 2;
    var timer = setInterval(function(){
        document.getElementById('countDown').innerHTML=` 0${min} : ${sec}`;
        sec--;
        if (sec < 0 && min < 0) {
            hide();
            clearInterval(timer);
            answerCheck();
            // run function to check score
            //change qcontainer to contain score, thanks for playing message and gif
        }
        else if (sec < 0) {
            min--
            sec = 59;
            // run function to check score
            //change qcontainer to contain score, thanks for playing message and gif
        }
        else if(answerCount === 10){
            hide();
            clearInterval(timer);
            answerCheck();
        }
    }, 1000);
}

function answerCheck(){
    for(i=0;i<qna.length;i++){
        let userResponse = qna[i]["user"]
        let answer = qna[i]["answer"]
        console.log(`User: ${userResponse} and Answer: ${answer}`);
        if(userResponse === answer){
            correctAnswer++
        }
    }

    document.getElementById("question").innerHTML = `You got ${correctAnswer}/10 questions correct!`;
    answer1.innerHTML = `Restart the Game`;
    
}
//MAIN CODE
 function change(){

    // displays rest of buttons
    if(hidden === "display:none"){
        show();
    }
    // starts timer
    if(timerCheck === false){
        timer();
        timerCheck = true;
    }
    else if(timerCheck === true){
        let response = this.getAttribute("data-answer");
        qna[answerCount]["user"] = response;
        console.log(qna[answerCount]["user"]);
        answerCount++
    }
    count++

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

answer1.onclick = change;
answer2.onclick = change;
answer3.onclick = change;
answer4.onclick = change;