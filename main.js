const numberInput=document.getElementById("numberInput");
const baseInput=document.getElementById("baseInput");
const button=document.querySelector("button");
const result1=document.querySelector(".result1");
const result2=document.querySelector(".result2");


function changeBase(){
	let finalNumber=""
	let number=numberInput.value;
	let base=baseInput.value;
	if (number=="" | base==""){
		alert("You need to write both a number and a base");
		return;
	}
	if (base<2 | base%1!=0){
		alert("enter a valid base");
		return;
	}
	if (number%1!=0){
		alert("enter a whole number");
		return;
	}
	if (number<0){
		alert("enter a positive number");
		return;
	}
	if (number==0){
		finalNumber="0";
	}
	while ((number/base)!=0){
		finalNumber=(number%base).toString(10)+finalNumber;
		number=Math.floor(number/base);
	}
	result1.textContent="original number: "+ numberInput.value.toString(10);
	result1.style.visibility="visible";
	result2.textContent="number in base  "+ base.toString(10)+": "+finalNumber;
	result2.style.visibility="visible";
}

button.addEventListener("click",changeBase);
	