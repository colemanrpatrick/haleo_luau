
var checkpointFirst = document.getElementById("checkpoint-first");

var checkpoint = document.getElementsByClassName("checkpoint");

window.onload = function () {

  checkpointFirst.classList = "checkpoint-first active";

}

window.onscroll = function(){
  /*=== use first checkpoint if at the very top of the page ===*/

  var checkpointFirstBottom = checkpointFirst.clientHeight;

  if (document.documentElement.scrollTop < checkpointFirstBottom) {

    checkpointFirst.classList = "checkpoint-first active";

  }else{

    checkpointFirst.classList = "checkpoint-first";

  }
  /*=== ===*/
  for (var i = 0; i < checkpoint.length; i++) {

    var checkpointHeight = checkpoint[i].offsetTop - (checkpoint[i].clientHeight + 50);

    var checkpointBottom = checkpoint[i].offsetTop + (checkpoint[i].clientHeight / 2);

    if (document.documentElement.scrollTop > checkpointHeight && document.documentElement.scrollTop < checkpointBottom) {

      checkpoint[i].classList = "checkpoint active";

    }else{

      checkpoint[i].classList = "checkpoint";

    }

  }
}
