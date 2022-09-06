
var num=0;

function add(){
num++;
document.getElementById('number').innerHTML=num;
}

function minus(){
num--;
if(num<0) num=0;
document.getElementById('number').innerHTML=num;
}

function reset(){
    num=0;
    document.getElementById('number').innerHTML=num;
}
