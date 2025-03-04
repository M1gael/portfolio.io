function lightswitch() {
    var body = document.body;
    body.classList.toggle("darkmode-body");

    var elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, section");
    elements.forEach(function(element) {
        element.classList.toggle("darkmode-elements");
    });
}