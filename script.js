function changeBackgroundColor(){
        var color = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.background = color;
}

function sendName(){
    var nameBox = document.getElementById("enter_name");
    alert("Hi, " + nameBox.value);
}

function convertToKilometer(){
    
    var distanceBox = document.getElementById("enter_miles");
    var distanceInMiles = distanceBox.value;
    var distanceInKilometer = distanceInMiles*1.6;
    var displayBox = document.getElementById("displayBox");
    displayBox.innerHTML = distanceInMiles +"miles is equal to " + distanceInKilometer + "kilometers";

}