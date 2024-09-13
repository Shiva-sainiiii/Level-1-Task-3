
var tap = new Audio("tap.mp3")
var clear = new Audio("clear.mp3")
var equalto = new Audio("euqalto.mp3")


var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");
var zero = document.querySelector(".zero");
var dblzero = document.querySelector(".dblzero");
var dot = document.querySelector(".dot");
var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var divide = document.querySelector(".divide");
var multiply = document.querySelector(".multiply");
var input = document.querySelector("#input");
var equal = document.querySelector(".equal");
var ac = document.querySelector(".ac");
var percent = document.querySelector(".percent");
var cut = document.querySelector(".cut");


var num = document.querySelectorAll(".num");
num.forEach(function(e){
e.addEventListener("touchstart",function(){
e.style.backgroundColor="#666";
})
e.addEventListener("touchend",function(){
e.style.backgroundColor="#444";
})
});

equal.addEventListener("touchstart",function(){
equal.style.backgroundColor="orange";
})


equal.addEventListener("touchend",function(){
equal.style.backgroundColor="orangered";
})


one.addEventListener("click",function(){ 
tap.play();
input.innerHTML = input.innerHTML + "1"; })
two.addEventListener("click",function(){ 
tap.play();
input.innerHTML = input.innerHTML + "2"; })
three.addEventListener("click",function(){ 
tap.play();
input.innerHTML = input.innerHTML + "3"; })
four.addEventListener("click",function(){ 
tap.play();
input.innerHTML = input.innerHTML + "4"; })
five.addEventListener("click",function(){
tap.play();
 input.innerHTML = input.innerHTML + "5"; })
six.addEventListener("click",function(){ 
tap.play();
input.innerHTML = input.innerHTML + "6"; })
seven.addEventListener("click",function(){
tap.play();
 input.innerHTML = input.innerHTML + "7"; })
eight.addEventListener("click",function(){ 
tap.play();
input.innerHTML = input.innerHTML + "8"; })
nine.addEventListener("click",function(){ 
tap.play();
input.innerHTML = input.innerHTML + "9"; })
zero.addEventListener("click",function(){
 tap.play();
 input.innerHTML = input.innerHTML + "0"; }) 
dblzero.addEventListener("click",function(){ 
tap.play();
input.innerHTML = input.innerHTML + "00"; }) 
dot.addEventListener("click",function(){
tap.play(); 
 input.innerHTML = input.innerHTML + "."; }) 
plus.addEventListener("click",function(){ 
tap.play();
input.innerHTML = input.innerHTML + " + "; })
minus.addEventListener("click",function(){
tap.play(); 
 input.innerHTML = input.innerHTML + " - "; })
divide.addEventListener("click",function(){ 
tap.play();
input.innerHTML = input.innerHTML + " / "; })
multiply.addEventListener("click",function(){ 
tap.play();
input.innerHTML = input.innerHTML + " * "; })
ac.addEventListener("click",function(){
clear.play();
 input.innerHTML = ""; })
tap.play();
equal.addEventListener("click",function(){

if(input.innerHTML == ""){
input.style.color="lime";
input.innerHTML = "admin Shiva"}
else{
input.style.color="white";
input.innerHTML = eval(input.innerHTML);}
equalto.play();
})

percent.addEventListener("click",function(){
tap.play();
 input.innerHTML = input.innerHTML/100;})
cut.addEventListener("click",function(){
clear.play();
 input.innerHTML = input.innerHTML.slice(0,-1)})