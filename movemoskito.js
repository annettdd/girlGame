let body = document.querySelector("body");

let insect = document.createElement("img");
insect.src = "./images/moskito.jpg"
insect.setAttribute("class", "insect");
body.appendChild(insect);

// let insect1 = document.createElement("img");
// insect.src = "./images/moskito1.jpg"
// insect.setAttribute("class", "insect1");
// body.appendChild(insect1);




function moveMoskito() {
    var position = 0;
    var move = setInterval(frame, 70);
    function frame() {
        if (position == 100) {
          clearInterval(move);
        } else {
          position++;
          insect.style.right = `${insect.offsetTop - 10}px`
          insect.style.left = `${insect.offsetLeft - 10}px`;
        }
      }
    }
//moveMoskito()
// insect.style.left = `${insect.offsetLeft - 10}px`;
// insect.style.top  = `${insect.offsetTop - 10}px`