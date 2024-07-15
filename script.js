let userScore=0;
let compScore=0;
const ch=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
ch.forEach((choice) => {
const gencompchoice=()=>{
    const options=["paper","rock","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
    }; 
const drawgame=()=>{
    msg.innerText="Game was Draw. Play Again!";
    msg.style.backgroundColor="blue";  
};
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
const compchoice=gencompchoice();
console.log("computer  choice=",compchoice);
if (userchoice===compchoice){
    drawgame();
}else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=compchoice==="paper"?false :true;
    }else if(userchoice==="paper"){
        userwin=compchoice==="scissor"?false:true;
    }  else{
        userwin=compchoice==="rock"?false:true;
    }  
winner(userwin,userchoice,compchoice);
};
};
const winner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
    msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
msg.style.backgroundColor="green";  
}
 else{
        compScore++;
        compScorePara.innerText=compScore;
    msg.innerText=`You lose! ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";   
}
}
choice.addEventListener("click",()=>{
const userchoice=choice.getAttribute("id");
playgame(userchoice);
 });
 })