function changeBackgroundColor(){
        var color = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.background = color;
}

function sendName(){
    var nameBox = document.getElementById("enter_name");
    alert("Hi, " + nameBox.value);
}
