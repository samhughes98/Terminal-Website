const welcomemsg = document.getElementById("Welcome");

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  

function welcome_message(){
 for(let i = 0; i < 4; i++){
   welcomemsg.innerHTML = "Welcome";
   sleep(2000);
   welcomemsg.innerHTML = "Welcome.";
   sleep(2000);
   welcomemsg.innerHTML = "Welcome..";
   sleep(2000);
   welcomemsg.innerHTML = "Welcome...";
   sleep(2000);
 }
}

welcome_message();
