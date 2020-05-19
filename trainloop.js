//var girlLeft = 0;
//making the girl
//var thepoints = 0;
var Score=0;
//var mult = 0;
let body = document.querySelector("body");
    let girl = document.createElement("img");
    girl.src = "./images/fita.png";
    girl.setAttribute("class", "girl");
    body.appendChild(girl);

//on a click button we can see the flowers wich are made here
let $body = document.querySelector("body");
    //let flowers = [];
document.getElementById("myBtn").addEventListener("click", function() {   
    //setInterval(()=> { 
  
        let flower = document.createElement("img");
        flower.src = "./images/flower8.png";
        flower.setAttribute("class", "flower");
        body.appendChild(flower);

        let flower1 = document.createElement("img");
        flower1.src = "./images/transparent1.png";
        flower1.setAttribute("class", "flower1");
        body.appendChild(flower1);

        let flower2 = document.createElement("img");
        flower2.src = "./images/transparent2.png";
        flower2.setAttribute("class", "flower2");
        body.appendChild(flower2);


        let flower3 = document.createElement("img");
        flower3.src = "./images/transparent4.png";
        flower3.setAttribute("class", "flower3");
        body.appendChild(flower3);

        let flower4 = document.createElement("img");
        flower4.src = "./images/transparent4.png";
        flower4.setAttribute("class", "flower4");
        body.appendChild(flower3);

        let flower5 = document.createElement("img");
        flower5.src = "./images/transparent5.png";
        flower5.setAttribute("class", "flower5");
        body.appendChild(flower5);       
})


 //let flower  = document.querySelector(".flower");
// let flower5  = document.querySelector(".flower5")

function collisionDetectIon($dom1,$dom2){
    let sq1 = {
        x: $dom1.offsetLeft,
        y: $dom1.offsetTop,
        width: $dom1.offsetWidth,
        height: $dom1.offsetHeight
    }
    
    let sq2 = {
        x:$dom2.offsetLeft,
        y:$dom2.offsetTop,
        width:$dom2.offsetWidth,
        height:$dom2.offsetHeight
    }
    // Method 1. Works with all rectangles and is cleaner.
    if(!(sq2.y + sq2.height < sq1.y || 
          sq2.y > sq1.y + sq1.height ||
          sq2.x + sq2.width < sq1.x ||
          sq2.x > sq1.x + sq1.width   
    )) {
        console.log("Collision!");
        return true;
    } else {
        console.log("No collision!");
        return false
    }

}

document.addEventListener("keydown", function(event){
    let flower  = document.querySelector(".flower");// this is important for the collision to happen
    switch (event.key.toLowerCase()) {
        case "d":
             if ((girl.offsetLeft + girl.width +10) < window.innerWidth ) {
               girl.style.left = `${girl.offsetLeft + 10}px`; 
            }           
            break;
        case "a":
            //if ((girl.offsetLeft + girl.width + 10) < window.innerWidth ) {
                girl.style.left = `${girl.offsetLeft - 10}px`; 
            // }           
            break;
        case "w":
            if ((girl.offsetTop + girl.width +10) < (window.innerHeight / 2)) {
                girl.style.top = `${girl.offsetTop - 10}px`; 
             } 
            //girl.style.top = `${girl.offsetTop - 10}px`;
            break;
        case "s":
            if ((girl.offsetTop + girl.width +10) < window.innerHeight ) {
                girl.style.top = `${girl.offsetTop + 10}px`; 
             } 
            //girl.style.top = `${girl.offsetTop + 10}px`;
            break;
        default:
            break;
    }
    // if(collisionDetectIon(girl, flower)) {
    //     var elem = document.querySelector('.flower');
    //       elem.parentNode.removeChild(elem);                  
    // }
    var score = document.querySelector('#score');
       score.innerHTML = Score;
    
    if(collisionDetectIon(girl, flower)) {
        var elem = document.querySelector('.flower');
          elem.parentNode.removeChild(elem);                  
                Score = Score+1;
        }   
 })
    
    