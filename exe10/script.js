let turn='x';
let carre=[];

function finish(num1,num2,num3){
    document.getElementById('item'+num1).style.background='gray';
    document.getElementById('item'+num2).style.background='gray';
    document.getElementById('item'+num3).style.background='gray';

    setTimeout(()=>{location.reload();},3000);
}

function winner(){
    for(let i=1; i<10 ; i++){

       carre[i]= document.getElementById('item'+i).innerHTML;
    }
    if(carre[1]===carre[2] && carre[2]===carre[3] && carre[1]!==''){
        finish(1,2,3);
    }
    else if(carre[4]===carre[5] && carre[5]===carre[6] && carre[4]!==''){
        finish(4,5,6);
    }
    else if(carre[7]===carre[8] && carre[8]===carre[9] && carre[7]!==''){
        finish(7,8,9);
    }
    else if(carre[1]===carre[4] && carre[4]===carre[7] && carre[1]!==''){
        finish(1,4,7);
    }
    else if(carre[2]===carre[5] && carre[5]===carre[8] && carre[2]!==''){
        finish(2,5,8);
    }
    else if(carre[3]===carre[6] && carre[6]===carre[9] && carre[3]!==''){
        finish(3,6,9);
    }
    else if(carre[1]===carre[5] && carre[5]===carre[9] && carre[1]!==''){
        finish(1,5,9);
    }
    else if(carre[3]===carre[5] && carre[5]===carre[7] && carre[3]!==''){
        finish(3,5,7);
    }
}

function game(id){

    let element=document.getElementById(id);
    if(turn==='x' && element.innerHTML===""){
        element.innerHTML='X';
        turn='o';
    }
    else{
        element.innerHTML='O';
        turn='x';
    }

    winner();
}