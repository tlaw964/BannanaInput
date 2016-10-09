var x;
var url;
function changeUI() {
    document.getElementById("thank-you").style.display = "block";
}
function sendResult() {
    var xhttp = new XMLHttpRequest();
    x = document.getElementsByTagName("input")[0].value;
    url = "https://script.google.com/macros/s/AKfycbwD3lp3-96GlSbuHj4c5ICSn8ij9UIgU2sKZ1b9XXpJU8V0w23z/exec?theArg=";
    changeUI();
    xhttp.open("GET", url.concat(x), true);
    xhttp.send();
}
