  var myBox = $(".section_7days_forcast--box");
  var myIcone = $(".sunny-icone");

  for(let i=0; i <= myBox.length; i++){
    myBox[i].addEventListener("click", animateBox);
  }

  function animateBox(){
    var icone = this.querySelector("img");
    icone.className = "click-animation";
    setTimeout(function(){
      myIcone.removeClass("click-animation");
    },500);
  }
