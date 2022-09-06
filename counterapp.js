var a=document.getElementById('number1').value;
var b=document.getElementById('number2').value;

function add(){
    var d=parseInt(a);
    var e=parseInt(b);
    var f=parseInt(d+e);
    document.getElementById('output').innerHTML=f;
    document.getElementById('sign').innerHTML="+"
    
                }
 function minus(){
    var d=parseInt(a);
    var e=parseInt(b);
     var f=parseInt(d-e);
    document.getElementById('output').innerHTML=f;
    document.getElementById('sign').innerHTML="-"
 
                }
   function divide(){
      var d=parseInt(a);
     var e=parseInt(b);
     var f=parseFloat(d/e);
     document.getElementById('output').innerHTML=f;
     document.getElementById('sign').innerHTML="/"
  
   }
   function multiply(){
    var d=parseInt(a);
    var e=parseInt(b);
     var f=parseInt(d*e);
    document.getElementById('output').innerHTML=f;
    document.getElementById('sign').innerHTML="x"

                }

  function refresh(){

    var d=parseInt(a);
    var e=parseInt(b);
    document.getElementById('output').innerHTML=0;
   document.getElementById('sign').innerHTML=""
                }

    function Off(){
     document.getElementById('screen').style.display='none';
                }
    function On(){
      document.getElementById('screen').style.display='unset'
      
    }