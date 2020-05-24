

    //window.onload = function() {
    //startgame()
        //var context = new AudioContext();
        // is making the start div
        function startdiv() {
            let startdiv = document.createElement("div");
            startdiv.setAttribute("class", "startdiv");
            startdiv.innerHTML = `        
             <div>   
            <h2>Welkome</h2>   
            <p>Lucy need to get to Alfred, but there might be moskitos on the way, be careful not be biten</p>
            <p>and you need to colect as much flowers as posible</p>
            <p>Good Luck</p>
             </div>`
            document.body.appendChild(startdiv);
        }
        startdiv()

        function meetAlfred() {
            let meetAlfreddiv = document.createElement("div");
            meetAlfreddiv.setAttribute("class", "meetAlfreddiv");
            meetAlfreddiv.innerHTML = `        
             <div >   
            <h2>Great you made Lucy happy</h2>   
            <p>Now Lucy and Alfred will live happy toghether</p>  
             <p> Lucy colected: ${Score} flowers</p>  
             <img src="./images/heart.png" class="heart">    
             </div>`
            document.body.appendChild(meetAlfreddiv);
        }
      
        function gameOverdiv(){
            let girlstop = document.createElement("div");
                girlstop.setAttribute("class", "girlstop");
                //score.innerHTML = Score
                girlstop.innerHTML = `        
                 <div>   
                <h2>You Lost</h2>   
                <p>Now Lucy cant go to Alfred</p>
                <p>Try again</p>
                 </div>`
                document.body.appendChild(girlstop);
        }
 
var Score=0;
let body = document.querySelector("body");
var insects = []
function moveMoskito(insect) {
    var position = 0;
    var move = setInterval(frame, 60);
    function frame() {
        if (position == 370) {
          clearInterval(move);
        } else {
          position++;
          insect.style.right = `${insect.offsetTop - 10}px`
          insect.style.left = `${insect.offsetLeft - 10}px`;
        } 
    }
   var myVar =  setInterval(()=> { 
    if(collisionDetectIon(girl, insect)) {
        gameOverdiv()   
       return gameOverSound() 
        clearInterval(myVar)
    }
    }, 500)
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
function startgamesound() {
    var m = new Audio('./sounds/startmusic.m4a');
    m.play();  
}
function soundFlowers() {
    var s = new Audio('./sounds/pickflower.m4a');
    s.play();
}
function gameOverSound() {
    var s = new Audio('./sounds/gameoversound.m4a');
    s.play();
}

//making the girl
///let body = document.querySelector("body");
    let girl = document.createElement('img');
    girl.src = "./images/fita.png";
    girl.setAttribute("class", "girl");
    body.appendChild(girl);
   

   let boy = document.createElement('img')
   boy.src = "./images/alfred1.gif";
   boy.setAttribute("class", "boy")
   body.appendChild(boy)

//    let badMoskito = document.createElement('img')
//    badMoskito.src = "./images/badmoskito.png";
//    badMoskito.setAttribute("class", "badM")
//    body.appendChild(badMoskito)

 
   
document.getElementById("myBtn").addEventListener("click", function() {
    startgamesound()
    //moveMoskito(badMoskito)
//making the flowers 
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
        flower4.src = "./images/transparent3.png";
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

        
        let flower7 = document.createElement("img");
        flower7.src = "./images/transparent6.png";
        flower7.setAttribute("class", "flower7");
        body.appendChild(flower6); 
        flower7.classList.add('flower'); 

        let flower8 = document.createElement("img");
        flower8.src = "./images/transparent7.png";
        flower8.setAttribute("class", "flower8");
        body.appendChild(flower8); 
        flower8.classList.add('flower'); 

        let flower9 = document.createElement("img");
        flower9.src = "./images/transparent8.png";
        flower9.setAttribute("class", "flower9");
        body.appendChild(flower9); 
        flower9.classList.add('flower'); 

        let flower10 = document.createElement("img");
        flower10.src = "./images/transparent9.png";
        flower10.setAttribute("class", "flower10");
        body.appendChild(flower10); 
        flower10.classList.add('flower'); 

        let flower11 = document.createElement("img");
        flower11.src = "./images/transparent10.png";
        flower11.setAttribute("class", "flower11");
        body.appendChild(flower11); 
        flower11.classList.add('flower'); 

        let flower12 = document.createElement("img");
        flower12.src = "./images/transparent11.png";
        flower12.setAttribute("class", "flower12");
        body.appendChild(flower11); 
        flower12.classList.add('flower'); 

        let flower13 = document.createElement("img");
        flower13.src = "./images/transparent12.png";
        flower13.setAttribute("class", "flower13");
        body.appendChild(flower13); 
        flower13.classList.add('flower'); 

        let flower14 = document.createElement("img");
        flower14.src = "./images/transparent13.png";
        flower14.setAttribute("class", "flower14");
        body.appendChild(flower13); 
        flower14.classList.add('flower'); 

        //delete first start div
        var elem = document.querySelector('.startdiv');
        elem.parentNode.removeChild(elem);       

            //making insect         
 setInterval(() => { 
    let insect = document.createElement("img");
        insect.src = "./images/moak1.png"
        insect.setAttribute("class", "insect");
        body.appendChild(insect); 
        insect.style.top = `${Math.random() * 100}%`;       
        insects.push(insect);   
        moveMoskito(insect)        
}, 3000);
})

   
//moving the girl
document.addEventListener("keydown", function(event){
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
  //colecting flowers
    var score = document.querySelector('#score')
    score.innerHTML = Score
     let flower = document.querySelectorAll(".flower");
        for (let i = 0; i < flower.length; i++) {
            if (collisionDetectIon(girl, flower[i]))   {
            body.removeChild(flower[i])
            Score = Score + 1; 
            soundFlowers()
        }
       }      
       let boy = document.querySelector('.boy') 
       if (collisionDetectIon(girl, boy))
       meetAlfred()     

    //let insect = document.querySelector('.insect')
      // setInterval(()=> {            
      //  insects.forEach((insect)=> {
            // if(collisionDetectIon(girl, insect)) {
            //     gameOverdiv()   
            //     gameOverSound() 
            // }                                 
             // clearInterval(myVar)                                        
//},500) 
})      
           