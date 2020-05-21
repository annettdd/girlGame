let body = document.querySelector("body");
var insects = [];
let insect = document.createElement("img");
insect.src = "./images/moskito.jpg"
insect.setAttribute("class", "insect");
body.appendChild(insect);
//insects.push(insect);

function moveMoskito() {
    var position = 0;
    var move = setInterval(frame, 50);
    function frame() {
        if (position == 350) {
          clearInterval(move);
        } else {
          position++;
          insect.style.right = `${insect.offsetTop - 7}px`
          insect.style.left = `${insect.offsetLeft - 7}px`;
        }
      }
    }

    moveMoskito()


