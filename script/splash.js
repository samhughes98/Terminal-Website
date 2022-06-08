const welcomemsg = document.getElementById("heading");
const arr = [ "",".","..","...","",".","..","...","",".","..","...","",".","..","...","",".","..","...","",".","..","...","",];

let i = 0;
let num = 0;

function timer() {
    for (i; i < arr.length; i++) {
      welcome_message(i);
  }
}

function welcome_message(i) {
  setTimeout(function () {
    welcomemsg.innerHTML = "WELCOME" + arr[i];
  }, 1000 * i);
}

var j = 0;
var width = 1;
function moving() {
  if (j == 0) {
    j = 1;
    var element = document.getElementById("prog");

    var id = setInterval(frame, 80);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        j = 0;
        /*for (let i = 0; i < arr.length; i++) {
          loginmsg(i);
        }*/
      } else {
        width++;
        element.style.width = width + "%";
      }
    }
  }
}

/*function loginmsg(i) {
  setTimeout(function () {
    welcomemsg.innerHTML = "LOGGING IN" + arr[i];
    if( i === 6){
        window.location.replace("index.html");
    }
  }, 1000 * i);
}*/

timer();
moving();
