  var x = document.getElementById("reconition");
var message = document.querySelector('#message');
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = '#JSGF V1.0;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.onresult = function(event) {
var last = event.results.length - 1;
var command = event.results[last][0].transcript;
message.textContent = 'Voice Input: ' + command + '.';



if (command.toLowerCase() === 'google'){
    window.location.href = "https://www.google.com/";

}



else if (command.toLowerCase() === 'music'){
    window.location.href = "https://www.spotify.com/";

}


else if (command.toLowerCase() === 'email'){
  window.location.href = "mailto: ? &body=Email sent from S.A.M.";
  var msg = new SpeechSynthesisUtterance('Opening email now');
  window.speechSynthesis.speak(msg);
 }





     else if (command.toLowerCase() === 'what is the weather'){
          window.open('https://www.google.com/search?rlz=1C1SQJL_enUS835US835&ei=RlSNXNfYMomu0gLn8bmIDA&q=weather&oq=weather&gs_l=psy-ab.3..35i39l2j0l6j0i131l2.3779.5055..5475...0.0..0.168.1101.0j7......0....1..gws-wiz.......0i71j0i131i67j0i131i20i263.GDlPThdNt_w', '_blank');
      }

      else if (command.toLowerCase() === 'sam'){
             var msg = new SpeechSynthesisUtterance("yes sir");
             window.speechSynthesis.speak(msg);
          }

          else if (command.toLowerCase() === 'full screen'){
                 var msg = new SpeechSynthesisUtterance("adjusting perimeters now");
                 window.speechSynthesis.speak(msg);
                 function requestFullScreen(element) {
// Supports most browsers and their versions.
var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

if (requestMethod) { // Native full screen.
requestMethod.call(element);
} else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
var wscript = new ActiveXObject("WScript.Shell");
if (wscript !== null) {
wscript.SendKeys("{F11}");
}
}
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);
var msg = new SpeechSynthesisUtterance("press escape or f11 to close out");
window.speechSynthesis.speak(msg);
              }


              else if (command.toLowerCase() === 'new tab'){
                   window.open('https://www.google.com/', '_blank');
               }

               else if (command.toLowerCase() === 'what time is it'){
              var msg = new SpeechSynthesisUtterance(new Date().getHours());
                 window.speechSynthesis.speak(msg);
                 }


               else if (command.toLowerCase() === 'calendar'){
                   window.open('https://calendar.google.com/calendar/r?pli=1&t=AKUaPmZzhGJULD2P7UgTY9ucAHFt0oOuneC2ndrhDzAmW1JIseu5Ogd4t2HewMJY4Rdz-MUQj605cJxB-0s0vKfQXj8lYz6cuA%3D%3D', '_blank');
                }


                 else if (command.toLowerCase() === 'order pizza hut'){
                       var msg = new SpeechSynthesisUtterance("ordering some nice yummy pizza");
                       window.speechSynthesis.speak(msg);
                     window.open('https://www.pizzahut.com/', '_blank');
                  }



                  else if (command.toLowerCase() === 'order an uber'){
                        var msg = new SpeechSynthesisUtterance("so you want me to summon a stranger from the internet so that you can get in their car");
                        window.speechSynthesis.speak(msg);
                      window.open('https://www.uber.com/', '_blank');
                   }



                   else if (command.toLowerCase() === 'play netflix'){
                       var msg = new SpeechSynthesisUtterance("playing flash");
                       window.speechSynthesis.speak(msg);
                       window.open('https://www.netflix.com/watch/80057443?trackId=14277283&tctx=0%2C0%2C33567407-b04b-4e18-b38e-27ced02a7b0f-1596043%2C%2C', '_blank');

                  }


                  else if (command.toLowerCase() === 'play coding music'){
                      var msg = new SpeechSynthesisUtterance("playing quote unquote coding music");
                      window.speechSynthesis.speak(msg);
                      window.open('https://www.youtube.com/watch?v=f02mOEt11OQ', '_blank');

                  }


                  else if (command.toLowerCase() === 'ask me a riddle'){
                      var msg = new SpeechSynthesisUtterance("what can travel around the world, but while staying in a corner.");
                      window.speechSynthesis.speak(msg);
                      window.open('https://www.riddles.com/best-riddles', '_blank');
                      var msg = new SpeechSynthesisUtterance(",,,,...,, A stamp, ha ha ha");
                      window.speechSynthesis.speak(msg);
                  }



                  else if (command.toLowerCase() === 'play classical music'){
                      var msg = new SpeechSynthesisUtterance("playing beethoven");
                      window.speechSynthesis.speak(msg);
                      var x = document.getElementById("piano");
                      x.play();

                      var x = document.getElementById("piano2");
                      x.pause();
                      var x = document.getElementById("mozart");
                      x.pause();
                  }


                  else if (command.toLowerCase() === 'next song'){
                      var x = document.getElementById("piano2");
                      x.play();

                      var x = document.getElementById("piano");
                      x.pause();
                      var x = document.getElementById("mozart");
                      x.pause();
                  }


                  else if (command.toLowerCase() === 'play mozart'){
                      var x = document.getElementById("mozart");
                      x.play();

                      var x = document.getElementById("piano");
                      x.pause();
                      var x = document.getElementById("piano2");
                      x.pause();
                  }


                  else if (command.toLowerCase() === 'pause music'){
                      var x = document.getElementById("piano");
                      x.pause();
                      var x = document.getElementById("piano2");
                      x.pause();
                      var x = document.getElementById("mozart");
                      x.pause();
                  }


                  else if (command.toLowerCase() === 'play more classical music'){
                    var msg = new SpeechSynthesisUtterance("directing you to a composition of great songs");
                    window.speechSynthesis.speak(msg);
                      window.open('https://www.youtube.com/watch?v=jgpJVI3tDbY', '_blank');

                  }



                  else if (command.toLowerCase() === 'shut down'){
                      var msg = new SpeechSynthesisUtterance("shut ing down");
                      window.speechSynthesis.speak(msg);
                     self.close()
                  }


                  else if (command.toLowerCase() === 'wi-fi status'){
                    if (navigator.online = true) {
                      var msg = new SpeechSynthesisUtterance("online and ready");
                      window.speechSynthesis.speak(msg);
                    }
                  }




                  else if (command.toLowerCase() === 'open google docs'){
                    var msg = new SpeechSynthesisUtterance("directing you to google docs");
                    window.speechSynthesis.speak(msg);
                      window.open('https://docs.google.com/document/u/0/', '_blank');

                  }



                  else if (command.toLowerCase() === 'open google drive'){
                    var msg = new SpeechSynthesisUtterance("directing you to google drive");
                    window.speechSynthesis.speak(msg);
                      window.open('https://drive.google.com/drive/my-drive', '_blank');

                  }


                  else if (command.toLowerCase() === 'home screen'){
                    var msg = new SpeechSynthesisUtterance("directing you to your home screen");
                    window.speechSynthesis.speak(msg);
                      window.open('homescreen1.html');

                  }



};
recognition.onspeechend = function() {
  recognition.stop();
};
recognition.onerror = function(event) {
  message.textContent = 'Error occurred in recognition: ' + event.error;
}
document.querySelector('#btnGiveCommand').addEventListener('click', function(){
  recognition.start();
});

