let currentvalue="";
document.querySelector("#display").value=currentvalue;

function one(){
    document.getElementById('one');
    currentvalue=currentvalue+'1';
    document.querySelector('#display').value=currentvalue;
}

function two(){
    document.getElementById('two');
    currentvalue=currentvalue+'2';
    document.querySelector('#display').value=currentvalue;
}
function three(){
    document.getElementById('three');
    currentvalue=currentvalue+'3';
    document.querySelector('#display').value=currentvalue;
}
function four(){
    document.getElementById('four');
    currentvalue=currentvalue+'4';
    document.querySelector('#display').value=currentvalue;
}
function five(){
    document.getElementById('five');
    currentvalue=currentvalue+'5';
    document.querySelector('#display').value=currentvalue;
}
function six(){
    document.getElementById('six');
    currentvalue=currentvalue+'6';
    document.querySelector('#display').value=currentvalue;
}
function seven(){
    document.getElementById('seven');
    currentvalue=currentvalue+'7';
    document.querySelector('#display').value=currentvalue;
}
function eigth(){
    document.getElementById('eigth');
    currentvalue=currentvalue+'8';
    document.querySelector('#display').value=currentvalue;
}
function nine(){
    document.getElementById('nine');
    currentvalue=currentvalue+'9';
    document.querySelector('#display').value=currentvalue;
}
function zero(){
    document.getElementById('zero');
    currentvalue=currentvalue+'0';
    document.querySelector('#display').value=currentvalue;
}
function clear(){
    
    currentvalue='';
    document.querySelector('#display').value=currentvalue;
}
//adding an event listener to the clear button
document.getElementById('clear').addEventListener('click',clear);
function plus(){
    document.getElementById('plus');
    currentvalue=currentvalue+'+';
    document.querySelector('#display').value=currentvalue;
}
function equal(){
    document.getElementById('equal');
    currentvalue=eval(currentvalue)
    document.querySelector('#display').value=currentvalue;
}
function minus(){
    document.getElementById('minus');
    currentvalue=currentvalue+'-';
    document.querySelector('#display').value=currentvalue;
}
function mult(){
    document.getElementById('mult');
    currentvalue=currentvalue+'*';
    document.querySelector('#display').value=currentvalue;
}
function divide(){
    document.getElementById('divide');
    currentvalue=currentvalue+'/';
    document.querySelector('#display').value=currentvalue;
}
