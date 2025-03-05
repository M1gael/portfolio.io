function lightswitch() {
    var body = document.body;
    body.classList.toggle("darkmode-body");

    var elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, section , button , img");
    elements.forEach(function(element) {
        element.classList.toggle("darkmode-elements");
    });

    var img = document.getElementById("lightswitchimg");
    if (body.classList.contains("darkmode-body")) {
        img.src = "img/epic.png";
    } else {
        img.src = "img/boring.png";
    }
}