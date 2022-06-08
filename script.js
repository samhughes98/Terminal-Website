document.addEventListener("DOMContentLoaded", function () {
  let letter = 0;
  const text =
    "\n> Hello, And welcome to my portfolio - Sam Hughes" +
    "\n" +
    "> To see available commands please enter 'help'.";

  const text1 = "Copyright Samuel-Hughes&copy 2022";
  const end = 1;
  var x = document.getElementById("usrinput");

  function typeText() {
    if (letter < text.length) {
      document.getElementById("intro").innerHTML += text.charAt(letter);
      letter++;
      let speed = Math.floor(Math.random() * 150) - 200;
      setTimeout(typeText, speed);
      if (letter == text.length) {
        showinput();
      }
    }
  }

  function introtext() {
    document.getElementById("intro").innerHTML = text1 + "<br/>";
  }

  function showinput() {
    x.innerHTML = ">";
    if (x.style.display === "none") {
      x.style.display = "block";
      x.setSelectionRange(end, end);
      document.getElementById("usrinput").focus();
    }
  }

  introtext();
  typeText();

  //await enter button press
  document.addEventListener("keydown", function (event) {
    //get text area values, split by newline to get newest input
    var textarea = document.getElementById("usrinput");
    var content = textarea.value.split("\n");

    //speed at which output is printed to user
    let speed = Math.floor(Math.random() * 150) - 200;
    let count = 0;
    let storage = [];

    function handleinput() {
      //debugging purposes
      console.log(content.at(-1));

      //if enter is pressed
      if (event.key === "Enter") {
        storage.push(content);

        //output text
        const helpcmd =
          "\n\nAvailable Commands: \n\n" +
          " who  -    Allow me to introduce myself\n" +
          " what  -   What do I do?\n" +
          " where  -  Github and Linkedin links\n" +
          " showme -  See my ASCII Art skills\n\n>";

        const bio =
          "\n\nHi! My name is Samuel Hughes, I am a recent graduate of Computer Science from Cardiff Metropolitan University where\n" +
          "I passed with a First Bachelors degree with honours" +
          "\n\nMy Hobbies include playing guitar and drums, watching/playing football and of course programming!\n\n>";

        const whatido =
          "\n\nI am a graduate software engineer, specialising in:\n\n  -Python\n  -C++\n  -HTML/CSS/JavaScript\n  -MySQL\n\n>";

        const socials =
          "\n\nHere are my social links for you to view:\n\n Github: \n Linkedin: \n\n>";

        const artString =
          "\n\n\n" +
          String.raw`
            ,,                               .-.
           || |                               ) )
           || |   ,                          '-'
           || |  | |
           || '--' |
     ,,    || .----'                                    
    || |   || |
    |  '---'| |                                                                      
    '------.| |                                  _____
    ((_))  || |      (  _                       / /|\ \
    (o o)  || |      ))("),                    | | | | |
 ____\_/___||_|_____((__^_))____________________\_\|/_/___        


                                                    
        _____              _____         _           
        |   __|___ _____   |  |  |_ _ ___| |_ ___ ___ 
        |__   | .'|     |  |     | | | . |   | -_|_ -|
        |_____|__,|_|_|_|  |__|__|___|_  |_|_|___|___|
                                      |___|             
        
        

        ` +
          "\n\n>";

        //if most recent input is >help, continue
        if (content.at(-1) === ">help")
          if (count < helpcmd.length) {
            //print to textarea - helpcmd
            console.log(helpcmd.charAt(count));
            textarea.value += helpcmd.charAt(count);
            count++;
            setTimeout(handleinput, speed);
            x.setSelectionRange(1000, 1000);
          }

        //if input is who, continue
        if (content.at(-1) === ">who") {
          if (count < bio.length) {
            textarea.value += bio.charAt(count);
            count++;
            //for stylistic purposes to appear as printing in terminal style
            setTimeout(handleinput, speed);
            x.setSelectionRange(1000, 1000);
          }
        }

        //if input is what, continue
        if (content.at(-1) === ">what") {
          if (count < whatido.length) {
            textarea.value += whatido.charAt(count);
            count++;
            //for stylistic purposes to appear as printing in terminal style
            setTimeout(handleinput, speed);
            x.setSelectionRange(1000, 1000);
          }
        }

        //if input is where, continue
        if (content.at(-1) === ">where") {
          if (count < socials.length) {
            textarea.value += socials.charAt(count);
            count++;
            //for stylistic purposes to appear as printing in terminal style
            setTimeout(handleinput, speed);
            x.setSelectionRange(1000, 1000);
          }
        }

        //if input is where, continue
        if (content.at(-1) === ">showme") {
          if (count < artString.length) {
            textarea.value += artString.charAt(count);
            count++;
            let artspeed = Math.floor(Math.random() * 150) - 800;
            //for stylistic purposes to appear as printing in terminal style
            setTimeout(handleinput, artspeed);
            x.setSelectionRange(1000, 1000);
          }
        }

        //if input is not valid, continue
        console.log("Test: " + content.at(-1));
      }
    }
    handleinput();

    if (event.key == "VK_UP") {
      textarea.value += storage[0];
    }
  });
});
