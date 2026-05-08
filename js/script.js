function lightswitch() {
   document.body.classList.toggle("darkmode");

    var img = document.getElementById("lightswitchimg");
    if (document.body.classList.contains("darkmode")) {
        img.src = "img/epic.png";
    } else {
        img.src = "img/boring.png";
    }
}
