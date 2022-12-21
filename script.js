// variables
var welcome = document.body.getElementsByClassName("welcome")[0];
var welcomeContent = document.body.getElementsByClassName("welcome-content")[0];
var selection = document.body.getElementsByClassName("selection")[0];
var desktopsready = document.body.getElementsByClassName("desktopsready")[0];

// Basic functions
function showDesktop() {

    setTimeout(() => {
        document.body.getElementsByClassName("copyright")[0].style.visibility= "visible";
        document.body.getElementsByClassName("copyright")[0].style.opacity= "1";
        welcomeContent.style.visibility= "visible";
        welcomeContent.style.opacity= "1";
        selection.style.visibility= "visible";
        selection.style.opacity= "1";
    }, 100); 

}

function IntoRipen() {
    setTimeout(() => {
        document.body.getElementsByClassName("copyright")[0].style.visibility= "hidden";
        document.body.getElementsByClassName("copyright")[0].style.opacity= "0";
        desktopsready.style.visibility= "visible";
        desktopsready.style.opacity= "1";

        selection.style.visibility= "hidden";
        selection.style.opacity= "0";
        
        welcomeContent.style.top= "40%";
        welcomeContent.style.left= "50%";
        welcomeContent.style.transform= "translate(-50%, -40%)";
        welcomeContent.style.scale= "1";
    }, 500); 

    setTimeout(() => {
        welcome.style.visibility= "hidden";
        welcome.style.opacity= "0";
    }, 3000); 

    setTimeout(() => {
        welcome.style.display= "none";
    }, 3400);
}


var dockApps = document.body.getElementsByClassName("dockApps")[0];

function dockZoomIn() {
        if (document.getElementById("dock").style.height == "575px"){
            document.getElementById("dock").style.paddingBottom = "35px";
            dockApps.style.marginBottom= "0px";
            dockApps.style.scale= "1";
            dockApps.style.transform= "translateX(-50%)";
            document.getElementById("myripebar").style.bottom = "0px";
            document.getElementById("feedbar").style.bottom = "0px";
            document.getElementById("borderLeft").style.bottom = "35px";
            document.getElementById("borderRight").style.bottom = "35px";
        }
        else {
            document.getElementById("dock").style.paddingBottom = "65px";
            dockApps.style.marginBottom= "15px";
            dockApps.style.scale= "1.3";
            dockApps.style.transform= "translateX(-40%)";
            document.getElementById("AllApps").style.marginTop= "12px";
            document.getElementById("myripebar").style.bottom = "-15px";
            document.getElementById("feedbar").style.bottom = "-15px";
            document.getElementById("borderLeft").style.bottom = "15px";
            document.getElementById("borderRight").style.bottom = "15px";
        }
  }

  function dockZoomOut() {
    document.getElementById("dock").style.paddingBottom = "35px";
    dockApps.style.marginBottom= "0px";
    dockApps.style.scale= "1";
    dockApps.style.transform= "translateX(-50%)";
    document.getElementById("AllApps").style.marginTop= "-2.5px";
    document.getElementById("myripebar").style.bottom = "0px";
    document.getElementById("feedbar").style.bottom = "0px";
    document.getElementById("borderLeft").style.bottom = "35px";
    document.getElementById("borderRight").style.bottom = "35px";
  }

  document.getElementById("AllApps").addEventListener("click", ()=>{
    if (document.getElementById("dock").style.height == "575px"){
        document.getElementById("dock").style.height = "45px";
        document.getElementById("dock").style.paddingTop = "10px";
        document.getElementById("dock").style.paddingLeft = "10px";
        document.getElementById("SearchApps").style.visibility = "hidden";
        document.getElementById("SearchApps").style.opacity = "0";


    }
    else {
        document.getElementById("dock").style.height = "575px";
        document.getElementById("dock").style.paddingTop = "20px";
        document.getElementById("dock").style.paddingLeft = "15px";
        document.getElementById("SearchApps").style.visibility = "visible";
        document.getElementById("SearchApps").style.opacity = "1";

    }
})

document.getElementById("controlShowBtn").addEventListener("click", ()=>{
    if (document.getElementById("feedbar").style.height == "95px"){
        document.getElementById("feedbar").style.height = "45px";
        document.getElementsByClassName("controlBtn")[0].style.right = "15px";
        document.getElementById("controlButtonB").style.right = "145px";
        document.getElementById("ControlToggles").style.visibility = "hidden";
        document.getElementById("ControlToggles").style.opacity = "0";

    }
    else {
        document.getElementById("feedbar").style.height = "95px";
        document.getElementsByClassName("controlBtn")[0].style.right = "8px";
        document.getElementById("controlButtonB").style.right = "140px";
        document.getElementById("ControlToggles").style.visibility = "visible";
        document.getElementById("ControlToggles").style.opacity = "1";
        document.getElementById("wifiPanel").style.visibility = "hidden";
        document.getElementById("wifiPanel").style.opacity = "0";
        document.getElementById("audioPanel").style.visibility = "hidden";
        document.getElementById("audioPanel").style.opacity = "0";
        document.getElementById("batteryPanel").style.visibility = "hidden";
        document.getElementById("batteryPanel").style.opacity = "0";
    }
})

document.getElementById("wifiBtn").addEventListener("click", ()=>{
    if (document.getElementById("feedbar").style.height == "540px"){
        document.getElementById("feedbar").style.height = "95px";
        document.getElementById("wifiPanel").style.visibility = "hidden";
        document.getElementById("wifiPanel").style.opacity = "0";
    }
    else {
        document.getElementById("feedbar").style.height = "540px";
        document.getElementById("wifiPanel").style.visibility = "visible";
        document.getElementById("wifiPanel").style.opacity = "1";
        document.getElementById("audioPanel").style.visibility = "hidden";
        document.getElementById("audioPanel").style.opacity = "0";
        document.getElementById("batteryPanel").style.visibility = "hidden";
        document.getElementById("batteryPanel").style.opacity = "0";
    }
})

document.getElementById("audioBtn").addEventListener("click", ()=>{
    if (document.getElementById("feedbar").style.height == "240px"){
        document.getElementById("feedbar").style.height = "95px";
        document.getElementById("audioPanel").style.visibility = "hidden";
        document.getElementById("audioPanel").style.opacity = "0";
    }
    else {
        document.getElementById("feedbar").style.height = "240px";
        document.getElementById("audioPanel").style.visibility = "visible";
        document.getElementById("audioPanel").style.opacity = "1";
        document.getElementById("wifiPanel").style.visibility = "hidden";
        document.getElementById("wifiPanel").style.opacity = "0";
        document.getElementById("batteryPanel").style.visibility = "hidden";
        document.getElementById("batteryPanel").style.opacity = "0";
    }
})

document.getElementById("batteryBtn").addEventListener("click", ()=>{
    if (document.getElementById("feedbar").style.height == "290px"){
        document.getElementById("feedbar").style.height = "95px";
        document.getElementById("batteryPanel").style.visibility = "hidden";
        document.getElementById("batteryPanel").style.opacity = "0";
    }
    else {
        document.getElementById("feedbar").style.height = "290px";
        document.getElementById("wifiPanel").style.visibility = "hidden";
        document.getElementById("wifiPanel").style.opacity = "0";
        document.getElementById("audioPanel").style.visibility = "hidden";
        document.getElementById("audioPanel").style.opacity = "0";
        document.getElementById("batteryPanel").style.visibility = "visible";
        document.getElementById("batteryPanel").style.opacity = "1";
    }
})

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
        h = h - 12;
        ampm = " PM";
    } else if (h == 12){
        h = 12;
        ampm = " PM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };

    document.getElementById('txt').innerHTML =  h + ":" + m+ampm;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function StartDate(){
    const dToday = new Date();
    let dt = dToday.getDate();

    var myDate = new Date();
    var myDay = myDate.getDay();

    // Array of days.
    var weekday = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    document.getElementById('txtdty').innerHTML =  dt + '/' + dToday.getMonth() + '/' + dToday.getFullYear();
    setTimeout(startTime, 1000);
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  function disp_prompt()
{
var sitename = document.getElementById("adrsbr")
document.getElementById("msg").src = "https://" + sitename.value;

sitename.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        validate(e);
    }
});

function validate(e) {
	document.getElementById("msg").src = "https://" + sitename.value;
}

}

function exitSearchMenu() {
    document.getElementById("myripebar").style.height = "500px";
    document.getElementById("myripebar").style.width = "27vw";
    document.getElementById("dock").style.bottom= "0";
    document.getElementById("dock").style.transition = "all 0.3s";
    document.getElementsByClassName("searchT")[0].style.width = "22vw";
}

function enterSearchMenu() {
    document.getElementById("myripebar").style.height = "560px";
    document.getElementById("myripebar").style.width = "72.75vw";
    document.getElementById("dock").style.bottom= "-655px";
    document.getElementById("dock").style.transition = "all 1s";
    document.getElementsByClassName("searchT")[0].style.width = "67.5vw";
    document.getElementById("adrsbr").focus();
}

function opacityM() {
	document.getElementById("msg").src = "https://www.bing.com/search?q=" + document.getElementById("adrsbr").value;
}

var GreetDate = new Date();
var hrs = GreetDate.getHours();
var greet;
if (hrs < 12)
greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
greet = 'Good Evening';

document.getElementById('greetings').innerHTML ='<b>' + greet + ',  Admin' + '</b>';


document.getElementById("ripeBtn").addEventListener("click", ()=>{
    if (document.getElementById("myripebar").style.height == "500px"){
        document.getElementById("myripebar").style.height = "45px";
        document.getElementById("myripebar").style.width = "27vw";
        document.getElementById("RipenPanel").style.visibility = "hidden";
        document.getElementById("RipenPanel").style.opacity = "0";
    }
    else {
        document.getElementById("myripebar").style.height = "500px";
        document.getElementById("myripebar").style.width = "27vw";
        document.getElementById("RipenPanel").style.visibility = "visible";
        document.getElementById("RipenPanel").style.opacity = "1";
        document.getElementById("dock").style.bottom= "0";
        document.getElementById("dock").style.transition = "all 0.3s";
        document.getElementById("defaultOpen").click();
    }
})

document.getElementById("adrsbr").addEventListener("click", ()=>{
    if (document.getElementById("myripebar").style.height == "560px"){
        document.getElementById("myripebar").style.height = "45px";
        document.getElementById("myripebar").style.width = "27vw";
        document.getElementById("dock").style.bottom= "0";
        document.getElementById("dock").style.transition = "all 0.3s";
        document.getElementsByClassName("searchT")[0].style.width = "22vw";
        document.getElementById("RipenPanel").style.visibility = "hidden";
        document.getElementById("RipenPanel").style.opacity = "0";
        document.getElementById("defaultOpen").click();
    }
    else {
        document.getElementById("myripebar").style.height = "560px";
        document.getElementById("myripebar").style.width = "72.75vw";
        document.getElementById("dock").style.bottom= "-655px";
        document.getElementById("dock").style.transition = "all 1s";
        document.getElementsByClassName("searchT")[0].style.width = "67.5vw";
        document.getElementById("RipenPanel").style.visibility = "visible";
        document.getElementById("RipenPanel").style.opacity = "1";
        document.getElementById("searchmenu").click();

    }
})

window.onclick = function(event) {
    if (event.target == document.body) {
        document.getElementById("feedbar").style.height = "45px";
        document.getElementById("dock").style.height = "45px";
        document.getElementById("myripebar").style.height = "45px";
        document.getElementById("dock").style.paddingTop = "10px";
        document.getElementById("dock").style.paddingLeft = "10px";
        document.getElementById("AllApps").style.marginTop= "-2.5px";
        document.getElementsByClassName("searchT")[0].style.width = "22vw";
        document.getElementById("myripebar").style.width = "27vw";
        document.getElementById("dock").style.bottom= "0";
        document.getElementById("dock").style.transition = "all 0.3s";
        document.getElementById("defaultOpen").click();

        document.getElementById("RipenPanel").style.visibility = "hidden";
        document.getElementById("RipenPanel").style.opacity = "0";
        document.getElementById("ControlToggles").style.visibility = "hidden";
        document.getElementById("ControlToggles").style.opacity = "0";
        document.getElementById("wifiPanel").style.visibility = "hidden";
        document.getElementById("wifiPanel").style.opacity = "0";
        document.getElementById("audioPanel").style.visibility = "hidden";
        document.getElementById("audioPanel").style.opacity = "0";
        document.getElementById("batteryPanel").style.visibility = "hidden";
        document.getElementById("batteryPanel").style.opacity = "0";
        document.getElementById("SearchApps").style.visibility = "hidden";
        document.getElementById("SearchApps").style.opacity = "0";
    }
}