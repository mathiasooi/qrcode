var qrcode = new QRCode("qrcode");

function makeCode () {    
  var elText = document.getElementById("text");
  
  if (!elText.value) {
    alert("Input a text");
    elText.focus();
    return;
  }
  
  qrcode.makeCode(elText.value);
}

makeCode();

document.addEventListener("keyup", function(event) {
    if (event.key == "Enter" && document.activeElement.nodeName == "INPUT") {
        makeCode();
    }
});
