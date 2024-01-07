var acc = document.getElementsByClassName("accordion");
var i;
var accL = document.getElementsByClassName("accordionLeft");
var j;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling.classList.toggle("open");
  });
}

for (j = 0; j < accL.length; j++) {
  accL[j].addEventListener("click", function() {
    this.classList.toggle("activeLeft");
    var panelLeft = this.nextElementSibling.classList.toggle("open");
  });
}
