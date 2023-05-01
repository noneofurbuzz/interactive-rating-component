function number(value){
    const values = ["1","2","3","4","5"];
    localStorage.setItem("Value",value);
    document.getElementById(value).style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById(value).style.color = "hsl(0, 0%, 100%)";
    for(let i =0;i < values.length;i = i + 1){
        if (value !== values[i]){
            document.getElementById(values[i]).style.backgroundColor = "hsla(213, 19%, 21%,0.9)";
            document.getElementById(values[i]).style.color = "hsl(217, 12%, 63%)";
        }
    }
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
}




