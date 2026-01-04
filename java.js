let msg = document.querySelector("#res");
let res = document.querySelector("#res1");

let userscore1 = document.querySelector("#userscore");
let comscore1 = document.querySelector("#comscore");

let userscore = 0;
let comscore = 0;

options = ["rock","paper","scissors"];

const comchoice  = ()=>{
    let rand = Math.random()*3;
    let idx = Math.floor(rand);
    return options[idx];
}


const draw = ()=>{
    console.log("Game was Drawn!");
}


let rock = document.querySelector("#rock");
console.log(rock);

rock.addEventListener("click",()=>{
    let userchoice = "rock";
    let compchoice = comchoice()
    console.log("Rock was selected");
    console.log("computer chose :",compchoice);

    if(compchoice==userchoice){
        console.log("Draw!");
        msg.innerText = "Game was Drawn";
        res.innerText = "Comp chose Rock";
        msg.style.backgroundColor = "grey";
        res.style.backgroundColor = "grey";
    }

    else if(compchoice=="paper"){
        console.log("You lose!");
        msg.innerText = "You lose";
        comscore++;
        comscore1.innerText = comscore;
        res.innerText = "Comp chose Paper";
        msg.style.backgroundColor = "red";
        res.style.backgroundColor = "white";
        res.style.color = "black";
    }

    else if(compchoice=="scissors"){
        console.log("You win!");
        msg.innerText = "You win";
        res.innerText = "Comp chose Scissors";
        userscore++;
        userscore1.innerText = userscore;
        msg.style.backgroundColor = "green";
        res.style.backgroundColor = "pink";
    }

})

let paper = document.querySelector("#paper");
console.log(paper);

let scissors = document.querySelector("#Scissors");
console.log(scissors);

paper.addEventListener("click",()=>{
    let userchoice = "paper";
    let compchoice = comchoice();

    console.log("Paper was selected");
    console.log("computer chose :",compchoice);

    
    if(compchoice==userchoice){
        console.log("Draw!");
        msg.innerText = "Game was Drawn";
        res.innerText = "Comp chose Paper";
        msg.style.backgroundColor = "grey";
        res.style.backgroundColor = "white";
        res.style.color = "black";

    }

    else if(compchoice=="scissors"){
        console.log("You lose!");
        msg.innerText = "You lose";
        res.innerText = "Comp chose Scissors";
        comscore++;
        comscore1.innerText = comscore;
        msg.style.backgroundColor = "red";
        res.style.backgroundColor = "pink";
    }

    else if(compchoice=="rock"){
        console.log("You win!");
        msg.innerText = "You win";
        res.innerText = "Comp chose Rock";

        userscore++;
        userscore1.innerText = userscore;
        msg.style.backgroundColor = "green";
        res.style.backgroundColor = "grey";
    }

})

scissors.addEventListener("click",()=>{
    let userchoice = "scissors";
    let compchoice = comchoice();

    
    console.log("Scissors was selected");
    console.log("computer chose :",compchoice);

    
    if(compchoice==userchoice){
        console.log("Draw!");
        msg.innerText = "Game was Drawn";
        res.innerText = "Comp chose Scissors";
        msg.style.backgroundColor = "grey";
        res.style.backgroundColor = "pink";
    }

    else if(compchoice=="rock"){
        console.log("You lose!");
        msg.innerText = "You lose";
        res.innerText = "Comp chose Rock";
        comscore++;
        comscore1.innerText = comscore;
        msg.style.backgroundColor = "red";
        res.style.backgroundColor = "grey";
    }

    else if(compchoice=="paper"){
        console.log("You win!");
        msg.innerText = "You win";
        res.innerText = "Comp chose Paper";
        
        userscore++;
        userscore1.innerText = userscore;
        msg.style.backgroundColor = "green";
        res.style.backgroundColor = "white";
        res.style.color = "black";
    }


})

