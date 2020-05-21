
var Score=0;
let body = document.querySelector("body");
function moveMoskito(insect) {
    var position = 0;
    var move = setInterval(frame, 70);
    function frame() {
        if (position == 670) {
          clearInterval(move);
        } else {
          position++;
          insect.style.right = `${insect.offsetTop - 10}px`
          insect.style.left = `${insect.offsetLeft - 10}px`;
        }
      }
    } 
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


    
//making the girl
///let body = document.querySelector("body");
    let girl = document.createElement('img');
    girl.src = "./images/fita.png";
    girl.setAttribute("class", "girl");
    body.appendChild(girl);
   //making the flowers 



document.getElementById("myBtn").addEventListener("click", function() {

        let flower1 = document.createElement("img");    
        flower1.src = "./images/flower8.png";
        flower1.setAttribute("class", "flower1");
        body.appendChild(flower1);
        flower1.classList.add('flower');

        let flower2 = document.createElement("img");
        flower2.src = "./images/transparent1.png";
        flower2.setAttribute("class", "flower2");
        body.appendChild(flower2);
        flower2.classList.add('flower');

        let flower3 = document.createElement("img");
        flower3.src = "./images/transparent2.png";
        flower3.setAttribute("class", "flower3");
        body.appendChild(flower3);
        flower3.classList.add('flower');


        let flower4 = document.createElement("img");
        flower4.src = "./images/transparent4.png";
        flower4.setAttribute("class", "flower4");
        body.appendChild(flower4);
        flower4.classList.add('flower');

        let flower5 = document.createElement("img");
        flower5.src = "./images/transparent4.png";
        flower5.setAttribute("class", "flower5");
        body.appendChild(flower5);
        flower5.classList.add('flower');

        let flower6 = document.createElement("img");
        flower6.src = "./images/transparent5.png";
        flower6.setAttribute("class", "flower6");
        body.appendChild(flower6); 
        flower6.classList.add('flower'); 


            //making insect
setInterval(() => {
    let insect = document.createElement("img");
        insect.src = "./images/moskito.jpg"
        insect.setAttribute("class", "insect");
        body.appendChild(insect); 
        insect.style.top = `${Math.random() * 100}%`;       
        moveMoskito(insect);      
}, 4000);
});


//moving the girl
document.addEventListener("keydown", function(event){
    //let flower  = document.querySelector(".flower");// this is important for the collision to happen
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
            // if ((girl.offsetTop + girl.width +10) < (window.innerHeight / 2)) {
            //     girl.style.top = `${girl.offsetTop - 10}px`; 
            //  } 
            girl.style.top = `${girl.offsetTop - 10}px`;
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

    // var score = document.querySelector('#score');
    //    score.innerHTML = Score;  


      //let flowerss = document.querySelectorAll('.flower')
       //let body = document.querySelector("body");
       //var elem = body.querySelectorAll('.flower'); 
     
   
    // var list = document.querySelectorAll('img.lastChild')
    // let flowers = Array.from(list)
    //   for (let i = 0; i < flowers.length; i++) {
    //       if (collisionDetectIon(girl, flowers[i])) {
    //           //flowers.remove(list)
    //         //list.parentNode.removeChild(list)
    //         //flowers.splice(i, 1)
    //       }
    //   }
  
    var score = document.querySelector('#score');
    score.innerHTML = Score
    let flower = document.querySelectorAll(".flower");
    var elem = document.querySelector(".flower");
    for (let i = 0; i < flower.length; i++) {
        if(collisionDetectIon(girl, flower[i])) {
            elem.parentNode.removeChild(elem);     
            Score = Score+1;          
        }       
    }
  

    var insects = [];
setInterval(()=> {
    insects.forEach((insect)=> {
        if(collisionDetectIon(girl, insect)) alert("over");
        insects.style.top = `${insect.offsetTop + 10}px`;
    })
},500)
})

    //})
    //     for (let i = 0; i < flowers.length; i++){
    //         if (collisionDetectIon(girl, flower[i]))   {
    //         body.removeChild(flowers[i])
    //         Score = Score + 1; 
    //     }

    //    }  
     
     
       
             
             

                       
             
    
 



    
    