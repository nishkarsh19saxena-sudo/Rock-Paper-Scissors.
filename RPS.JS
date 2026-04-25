let userscore=0;
let compscore=0;
let yourchoice=0;
let msg=document.getElementById("res");
let symY=document.getElementById("yor");
let symC=document.getElementById("com2");
let cont=document.querySelector(".container");
let cont2=document.querySelector(".container2");
let compchoice=0;
let choices=document.querySelector(".choices");
const computer_choice=()=>{
    const options=["rock","paper","scissor"];
       compchoice=options[Math.floor(Math.random()*3)];
       console.log(compchoice);
}

s.onclick=(e)=>{
    console.log("clicked");
     yourchoice="scissor";
     symY.innerHTML= '<img src="https://i.pinimg.com/474x/67/eb/fd/67ebfd32e898b4ec3ae4e59ae33832c8.jpg">';
     
     computer_choice();
     computer_symbol();
     comparechoices();
        
}
reset.onclick=(e)=>{
    userscore=0;
    compscore=0;
    ys.innerText=userscore;
    cs.innerText=compscore;
    msg.innerText="Game reset!";
    msg.style.color="black";
    // cont.style.backgroundColor="white";
    // cont2.style.backgroundColor="white";
}
const computer_symbol=()=>{
    if(compchoice==="rock"){
        symC.innerHTML= '<img src="https://i.pinimg.com/736x/fe/0e/82/fe0e8236b49946995e7af8e02976e243.jpg" alt="rock" width="50px">';
    }
    else if(compchoice==="paper"){
        symC.innerHTML= '<img src="https://i.pinimg.com/736x/15/c4/d7/15c4d790bc41f466f3e210d3840c849d.jpg" alt="paper" width="50px">';
    }
    else{
        symC.innerHTML= '<img src="https://i.pinimg.com/474x/67/eb/fd/67ebfd32e898b4ec3ae4e59ae33832c8.jpg" alt="scissors" width="50px">';
    }
}
p.onclick=(e)=>{
    console.log("clicked");
     yourchoice="paper";
     symY.innerHTML= '<img src="https://i.pinimg.com/736x/15/c4/d7/15c4d790bc41f466f3e210d3840c849d.jpg" alt="paper" width="50px">';
     
     computer_choice();
     computer_symbol();
    comparechoices();
    

}
r.onclick=(e)=>{
    console.log("clicked");
     yourchoice="rock";
     symY.innerHTML= '<img src="https://i.pinimg.com/736x/fe/0e/82/fe0e8236b49946995e7af8e02976e243.jpg" alt="rock" width="50px">';
     
     computer_choice();
     computer_symbol();
     comparechoices();
     
}
const comparechoices=()=>{  

if(yourchoice===compchoice){
    
    console.log("It's a tie!");
    msg.innerText="It's a tie!";
    msg.style.color="blue";
    // cont.style.backgroundColor="blue";
    // cont2.style.backgroundColor="blue";
    

    
    
}
else if(
    (yourchoice==="rock" && compchoice==="scissor") ||
    (yourchoice==="paper" && compchoice==="rock") ||
    (yourchoice==="scissor" && compchoice==="paper")
){
    console.log("You win!");
    msg.innerText="You win!";
    msg.style.color="green";
    // cont2.style.backgroundColor="green";
    finish_check();
    userscore++;
    ys.innerText=userscore;
    // cont.style.backgroundColor="white";

}else{
    console.log("Computer wins!");
    msg.innerText="Computer wins!";
    msg.style.color="red";
    // cont.style.backgroundColor="red";
    // cont2.style.backgroundColor="white";
    finish_check();
    compscore++;
    cs.innerText=compscore;
}
}
const finish_check=()=>{
if(userscore==5&&compscore<5){
    msg.innerText="You are the champion!";
    msg.style.color="gold";
    // cont.style.backgroundColor="gold";
    // cont2.style.backgroundColor="white";
    userscore=0;
    compscore=0;
    return;
}
else if(compscore==5&&userscore<5){
    msg.innerText="Computer is the champion!";
    msg.style.color="gold";
    // cont2.style.backgroundColor="gold";
    // cont.style.backgroundColor="white";
    userscore=0;
    compscore=0;
    return;
}
else if(userscore==5&&compscore==5){
    msg.innerText="It's a tie!";
    msg.style.color="blue";
    // cont.style.backgroundColor="blue";
    // cont2.style.backgroundColor="blue";
    userscore=0;
    compscore=0;
    return;
}
}
