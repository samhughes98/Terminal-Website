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
      let speed = 20;
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
    var extrasarea = document.getElementById("extras");
    var content = x.value.split("\n");

    //speed at which output is printed to user
    let speed = 15;
    let count = 0;
    let count1 = 0;
    let storage = [];

    function handleinput() {
      //debugging purposes
      console.log(content.at(-1));

      //if enter is pressed
      if (event.key === "Enter") {
        event.preventDefault();
        storage.push(content);

        //output text
        const helpcmd =
          "\n\nAvailable Commands: \n\n" +
          " who      - Allow me to introduce myself\n" +
          " what     - What do I do?\n" +
          " where    - Github and Linkedin links\n\n" +
          " showme   - See my ASCII Art skills\n" +
          " clear    - Clear current terminal\n" +
          " clearimg - clear the drawings\n" +
          "\n return - Head back to the homescreen\n\n>";

        const bio =
          "\n\nHi! My name is Samuel Hughes, I am a recent graduate of Computer Science from Cardiff Metropolitan \nUniversity where " +
          "I passed with a First Bachelors degree with honours" +
          "\n\nMy Hobbies include playing music, Football and programming!\n\n>";

        const whatido =
          "\n\nI am a graduate software engineer, specialising in:\n\n  -Python\n  -C++\n  -HTML/CSS/JavaScript\n  -MySQL\n -Cyber Security\n>";
          
        const socials =
          "\n\nHere are my social links for you to view:\n\nGithub: \nhttps://github.com/samhughes98 \n\nLinkedin: \nhttps://www.linkedin.com/in/sam-hughes-286000147 \n\nPlease enter 'github' or 'linkedin' to visit either page! :) \n\n>";

        const imgempty = "\nCanvas is already empty!\n\n>";

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
        
        

        `;

        //if most recent input is >help, continue
        if (content.at(-1) === ">help")
          if (count < helpcmd.length) {
            //print to x - helpcmd
            console.log(helpcmd.charAt(count));
            x.value += helpcmd.charAt(count);
            count++;
            setTimeout(handleinput, speed);
            x.setSelectionRange(10000, 10000);
          }

        if(content.at(-1) === ">return"){
          const ret = "\n>returning to the homepage..."
          if (count < ret.length) {
            x.value += ret.charAt(count);
            count++;
            //for stylistic purposes to appear as printing in terminal style
            setTimeout(handleinput, speed);
            x.setSelectionRange(10000, 10000);
            window.location.replace("loading.html");
          }
        }

        //if input is who, continue
        if (content.at(-1) === ">who") {
          if (count < bio.length) {
            x.value += bio.charAt(count);
            count++;
            //for stylistic purposes to appear as printing in terminal style
            setTimeout(handleinput, speed);
            x.setSelectionRange(10000, 10000);
          }
        }

        //if input is what, continue
        if (content.at(-1) === ">what") {
          if (count < whatido.length) {
            x.value += whatido.charAt(count);
            count++;
            //for stylistic purposes to appear as printing in terminal style
            setTimeout(handleinput, speed);
            x.setSelectionRange(10000, 10000);
          }
        }

        //if input is where, continue
        if (content.at(-1) === ">where") {
          if (count < socials.length) {
            x.value += socials.charAt(count);
            count++;
            //for stylistic purposes to appear as printing in terminal style
            setTimeout(handleinput, speed);
          }
      }

      if(content.at(-1) === ">github"){
        const gitmsg = "\n\nSending to my Github Page...";
        if (count < gitmsg.length) {
          x.value += gitmsg.charAt(count);
          count++;
          //for stylistic purposes to appear as printing in terminal style
          setTimeout(handleinput, speed);
          window.location.replace("https://github.com/samhughes98");
      }
    }

    if(content.at(-1) === ">linkedin"){
      const LImsg = "\n\nSending to my LinkedIn Page...";
      if (count < LImsg.length) {
        x.value += LImsg.charAt(count);
        count++;
        //for stylistic purposes to appear as printing in terminal style
        setTimeout(handleinput, speed);
        window.location.replace("https://www.linkedin.com/in/sam-hughes-286000147/");
    }
  }

        //if input is where, continue
        if (content.at(-1) === ">showme") {
          if (count < artString.length) {
            extrasarea.innerHTML += artString.charAt(count);
            count++;
            let artspeed = Math.floor(Math.random() * 150) - 800;
            //for stylistic purposes to appear as printing in terminal style
            setTimeout(handleinput, artspeed);
            x.setSelectionRange(10000, 10000);
            x.value = ">";
          }
        }

        if (content.at(-1) === ">clear") {
          x.setSelectionRange(1000, 1000);
          x.value = ">";
        }

        if (content.at(-1) === ">clearimg" && extrasarea.value === "" ) {
            if (count < imgempty.length) {
              x.setSelectionRange(100000, 100000);
              x.value += imgempty.charAt(count);
              count++;
              setTimeout(handleinput, speed);
            }
          }
        if(content.at(-1) === ">clearimg" && extrasarea.value.length > 10){
          extrasarea.innerHTML = "";
          x.value = ">";
          x.setSelectionRange(10000, 100000);
        }

        //if input is not valid, continue
        console.log("Test: " + content.at(-1));
        
      }
    }
    handleinput();
  });
});
