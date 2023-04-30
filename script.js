function number(value){
    localStorage.setItem("Value",value);
    document.getElementById(value).style.backgroundColor = "hsl(217, 12%, 63%)";
    document.getElementById(value).style.color = "hsl(0, 0%, 100%)";
    
}
function message(){
   if (localStorage.getItem("Value") == null){
    alert("Please choose a rating");
   }
   else{
    location.replace("message.html");
   }
}
function again(){
    location.replace("index.html");
    localStorage.clear();
}




