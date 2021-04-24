// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

document.addEventListener('deviceready', onDeviceReady, false);
var butt2=document.getElementById("register_button");

function Register(){
    var user=document.getElementById("username").value;
    var pass=document.getElementById("pass").value;
    localStorage.setItem(username.value,pass.value);
    alert("Registered");
};

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    butt2.onclick= function(){
        var user=document.getElementById("username");
        var pass=document.getElementById("pass");
        localStorage.setItem(user.value, JSON.stringify({"pass":pass.value}));
        alert("Registered");
    };
   
}