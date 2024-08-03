let target = 0;
let runs =0;
let wickets = 2;
let balls =0;

const TargetGenrator = () =>{
    const tar = Math.floor(Math.random()*36);
    return tar;
}
target=TargetGenrator();
document.getElementById("target").innerText = target;
document.getElementById("runs").innerText = runs;
document.getElementById("wickets").innerText = wickets;
console.log(target)
const throwball = ()=>{
    const action = ["1","2","3","4","6","wide","NoBall","wicket"];
    const bowl = Math.floor(Math.random()*8);
    return action[bowl];
}
let screen  = document.querySelectorAll(".circle");
let counter =0;
function Play(){
    const ball = throwball();
    
    if(balls<6 && wickets>0 && target>runs){
        
        if(ball==="1"){
            runs++;
            balls++
        }
        if(ball==="2"){
            runs=runs+2;
            balls++;
        }
        if(ball==="3"){
            runs=runs+3;
            balls++;
        }
        if(ball==="4"){
            runs=runs+4;
            balls++;
        }
        if(ball==="6"){
            runs=runs+6;
            balls++;
        }
        if(ball==="wide"){
            runs++;
        }
        if(ball==="NoBall"){
            runs++;
        }
        if(ball==="wicket"){
            balls++;
            wickets--;
        }
        updateUI(ball);
        document.getElementById("target").innerText = target;
        document.getElementById("runs").innerText = runs;
        document.getElementById("wickets").innerText = wickets;
    }
    if(target<=runs && wickets>=1){
        setTimeout(() =>{alert("game has ended You Won")},1000)
    }
    if(((balls>=6 && target>runs) ||  wickets==0 || (wickets==0 && target>runs ))){
        setTimeout(() =>{alert("game has ended You Lost")},1000)
    }
}

const updateUI = (ball) =>{
    let element = document.querySelector(".score-board");
    let img = document.createElement("img");

    if(ball==="1"){
        img.src = "/superOver/number-one.png"
    }
    if(ball==="2"){
        img.src = "/superOver/two.png"
    }
    if(ball==="3"){
        img.src = "/superOver/number-3.png"
    }
    if(ball==="4"){
        img.src = "/superOver/number-four.png"
    }
    if(ball==="6"){
        img.src = "/superOver/six.png"
    }
    if(ball==="wide"){
        img.src = "/superOver/wide-ball.png"
    }
    if(ball==="NoBall"){
        img.src = "/superOver/no-ball.png"
    }
    if(ball==="wicket"){
        img.src = "/superOver/cricket.png"
    }
    img.id="circle";
    element.appendChild(img);
}
let btn = document.getElementById("btn");
btn.addEventListener("click" ,Play);