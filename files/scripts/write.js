var i = 0;
var txt = '.....';
var speed = 600;

function typeWriter() {
    document.getElementById("writed2").innerHTML = "Loading";
    if (i < txt.length) {
        document.getElementById("writed").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {
        document.getElementById("writed").innerHTML = "";
        i = 0;
        typeWriter()
    }
}