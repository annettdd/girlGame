var girlLeft = 0;
// width = 90;
// speed = 20;
document.addEventListener("keydown", function(event){
    switch (event.key.toLowerCase()) {
        case "d":
             if ((girl.offsetLeft + girl.width +10) < window.innerWidth ) {
               girl.style.left = `${girl.offsetLeft + 10}px`; 
            } 
            break;
        case "a":
            // if ((girl.offsetLeft + girl.width + 10) < window.innerWidth ) {
            //     girl.style.left = `${girl.offsetLeft - 10}px`; 
            //  } 
           if ((girl.offsetLeft < window.innerWidth))
            girl.style.left = `${girl.offsetLeft - 10}px`;
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
})
//making the girl
let body = document.querySelector("body");
    let girl = document.createElement("img");
    girl.src = "./images/fita.png";
    girl.setAttribute("class", "girl");
    body.appendChild(girl);
  
    
//making flowers after push to button
let $body = document.querySelector("body");
    let flowers = [];
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










        // flower.style.left = `${Math.random() * 100}%`;
        // flowers.push(flower);              
        // for (let i = 0; i < flower.length; i ++) {
        //     if (flowers[i] > 10 ) {
        //         alert("stop")  
  
//},300)


    
    

     



 




//     setInterval(()=> {   
//     let flower = document.createElement("img");
//     flower.src = "./images/flower8.png";
//     flower.setAttribute("class", "flower");
//     body.appendChild(flower);
//     flower.style.left = `${Math.random() * 100}%`;
//     flowers.push(flower);
// },3000)

 
 
 
 
    // if ($girl.window.innerWidth < 1250 && window.innerWidth > 750){
    //     //if ($girl.style.left > window.innerWidth) {
    //         console.log("stop")
  
// var girlLeft = 0
// function border(e) {
//  if (e.keyCode == 39){
//      girlLeft +=2
//      girl.style.left = girlLeft + "px";
//      if (girlLeft >= window.innerWidth) {
//          girlLeft -= 2
//      }
// }
// if (e.keyCode == 37) {
//     girlLeft -=2
//     girl.style.left = girlLeft + "px";
//     if (girlLeft <= 0){
//         girlLeft += 2
//     }

// }
// //border();
  
// }
