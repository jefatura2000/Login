// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
var butt=document.getElementById("login_button")

function check_login(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("pass").value;
    if (JSON.parse(localStorage.getItem("pepe")).pass=password) {
        alert("nice");
    }else
        alert("wrong");
};



function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    butt.onclick=check_login;
    
}
