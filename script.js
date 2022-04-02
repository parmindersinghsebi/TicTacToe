let turn="X";

//change turn function
const Changeturn = ()=>{
    if (turn=="X"){
        return turn ="0";
    }
    else{
        return turn="X";
    }
}
let button=document.getElementById("button");
button.addEventListener("click",()=>{
    location.reload();
})

let flag=0;
//win function
const checkwin=()=>{
    let boxes=document.getElementsByClassName("box");
    if(boxes[0].innerText=="X"&&boxes[1].innerText=="X"&&boxes[2].innerText=="X"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b1").style.backgroundColor='yellow';
        document.getElementById("b2").style.backgroundColor='yellow';
        document.getElementById("b3").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
    if(boxes[3].innerText=="X"&&boxes[4].innerText=="X"&&boxes[5].innerText=="X"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b4").style.backgroundColor='yellow';
        document.getElementById("b5").style.backgroundColor='yellow';
        document.getElementById("b6").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
    if(boxes[6].innerText=="X"&&boxes[7].innerText=="X"&&boxes[8].innerText=="X"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b7").style.backgroundColor='yellow';
        document.getElementById("b8").style.backgroundColor='yellow';
        document.getElementById("b9").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
    if(boxes[0].innerText=="X"&&boxes[3].innerText=="X"&&boxes[6].innerText=="X"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b1").style.backgroundColor='yellow';
        document.getElementById("b4").style.backgroundColor='yellow';
        document.getElementById("b7").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
    if(boxes[1].innerText=="X"&&boxes[4].innerText=="X"&&boxes[7].innerText=="X"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b2").style.backgroundColor='yellow';
        document.getElementById("b5").style.backgroundColor='yellow';
        document.getElementById("b8").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
    if(boxes[2].innerText=="X"&&boxes[5].innerText=="X"&&boxes[8].innerText=="X"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b3").style.backgroundColor='yellow';
        document.getElementById("b6").style.backgroundColor='yellow';
        document.getElementById("b9").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
    if(boxes[0].innerText=="X"&&boxes[4].innerText=="X"&&boxes[8].innerText=="X"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b1").style.backgroundColor='yellow';
        document.getElementById("b5").style.backgroundColor='yellow';
        document.getElementById("b9").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
    if(boxes[2].innerText=="X"&&boxes[4].innerText=="X"&&boxes[6].innerText=="X"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b3").style.backgroundColor='yellow';
        document.getElementById("b5").style.backgroundColor='yellow';
        document.getElementById("b7").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
    if(boxes[2].innerText=="0"&&boxes[4].innerText=="0"&&boxes[6].innerText=="0"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b3").style.backgroundColor='yellow';
        document.getElementById("b5").style.backgroundColor='yellow';
        document.getElementById("b7").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
    if(boxes[0].innerText=="0"&&boxes[1].innerText=="0"&&boxes[2].innerText=="0"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b1").style.backgroundColor='yellow';
        document.getElementById("b2").style.backgroundColor='yellow';
        document.getElementById("b3").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
    if(boxes[3].innerText=="0"&&boxes[4].innerText=="0"&&boxes[5].innerText=="0"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b4").style.backgroundColor='yellow';
        document.getElementById("b5").style.backgroundColor='yellow';
        document.getElementById("b6").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
    if(boxes[6].innerText=="0"&&boxes[7].innerText=="0"&&boxes[8].innerText=="0"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b7").style.backgroundColor='yellow';
        document.getElementById("b8").style.backgroundColor='yellow';
        document.getElementById("b9").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
    if(boxes[0].innerText=="0"&&boxes[3].innerText=="0"&&boxes[6].innerText=="0"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b1").style.backgroundColor='yellow';
        document.getElementById("b4").style.backgroundColor='yellow';
        document.getElementById("b7").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
    if(boxes[1].innerText=="0"&&boxes[4].innerText=="0"&&boxes[7].innerText=="0"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b2").style.backgroundColor='yellow';
        document.getElementById("b5").style.backgroundColor='yellow';
        document.getElementById("b8").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
    if(boxes[2].innerText=="0"&&boxes[5].innerText=="0"&&boxes[8].innerText=="0"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b3").style.backgroundColor='yellow';
        document.getElementById("b6").style.backgroundColor='yellow';
        document.getElementById("b9").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
    if(boxes[0].innerText=="0"&&boxes[4].innerText=="0"&&boxes[8].innerText=="0"){
        document.getElementsByClassName("turn")[0].innerText=turn+" win "; 
        flag=1;
        document.getElementById("b1").style.backgroundColor='yellow';
        document.getElementById("b5").style.backgroundColor='yellow';
        document.getElementById("b9").style.backgroundColor='yellow';
        document.getElementById("img").style.display='flex';
    }
}

//game
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(e=>{
    e.addEventListener('click',()=>{
        if(e.innerText===''&&flag==0){
            e.innerText=turn;
            checkwin();
            Changeturn();
           if(flag==0){ document.getElementsByClassName("turn")[0].innerText="Turn for "+turn;
        }}
    })
})