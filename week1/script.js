console.log("Welcome to Greenwich Vietnam");
console.log("Web Programming 2");

function displayName() {
   //get name from text box
   let name = document.getElementById("input").value;

   //show name to heading 1
   document.getElementById("output").innerHTML = "Welcome " + name + " to Greenwich Vietnam";
}

function clearText() {
   //clear text in textbox
   document.getElementById("input").value = "";

   //clear text in heading 1
   document.getElementById("output").innerHTML = "";
}

function changeStyle() {
   document.getElementById("output").style.color = "yellow";
   document.getElementById("output").style.backgroundColor = "red";
}