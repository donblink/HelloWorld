

function helloWorld(){
  //"hello world";


  //document.getElementById('thisbtn').addEventListener('click', function(){
  //var text=helloWorld();
  //document.getElementById('first').innerHTML="hello world";
  var buttonElem = document.getElementById("thisbtn");
  console.log("buttonElem is :"+buttonElem);
  buttonElem.addEventListener("click", function(){
  var firstTagElem= document.getElementById("first");
  console.log("first element dom tag : "+ firstTagElem);
  firstTagElem.innerHTML = "Hello World";
});
}
window.addEventListener('load', helloWorld, false);
