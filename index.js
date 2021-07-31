let happyFace = document.getElementById('happy-face');
let turnYellow = function(){
    happyFace.style.backgroundColor = 'yellow';
}

let turnBack = function(){
    happyFace.style.backgroundColor = "white";
}

let backForth = function(){
    if(happyFace.style.backgroundColor = "yellow"){
        happyFace.onclick = turnBack;
    }
    else{
        happyFace.onclick = turnYellow;
    }
}

happyFace.onclick = backForth;
