var currentNumberWraper = document.getElementById("currentNumber")
var currentNumber = 0;

var currentMsgWrapper = document.getElementById("msg")
var currentMsg = ""

function increment(){
	currentNumber = currentNumber == 10 ? currentNumber : currentNumber + 1;
	currentNumber == 10 ? showMsg("máximo") : hideMsg() + 1;
	currentNumberWraper.innerHTML = currentNumber;
}

function decrement(){
	currentNumber = currentNumber == 0 ? currentNumber : currentNumber - 1;
	currentNumber == 0 ? showMsg("mínimo") : hideMsg();
	currentNumberWraper.innerHTML = currentNumber;
}

function showMsg(txt){
	document.getElementById("msg").style.display = 'block';
	currentMsgWrapper.innerHTML = "Ops... Você alcançou o valor " + txt;
}

function hideMsg(){
	document.getElementById("msg").style.display = 'none';
}