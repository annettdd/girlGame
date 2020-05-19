var girlLeft = 0;
width = 90;
speed = 20;
document.addEventListener("keydown", function(event){
    switch (event.key.toLowerCase()) {
        case "d":
            girl.style.left = `${girl.offsetLeft + 10}px`;
            //  if (!(girl.style.left + speed > window.innerWidth - width)) {
            //      girl.style.left += speed
            //    alert("stop")             
            // } 
            break;
        case "a":
            girl.style.left = `${girl.offsetLeft - 10}px`;
            break;
        case "w":
            girl.style.top = `${girl.offsetTop - 10}px`;
            break;
        case "s":
            girl.style.top = `${girl.offsetTop + 10}px`;
            break;
        default:
            break;
    }
})
let body = document.querySelector("body");
    let girl = document.createElement("img");
    girl.src = "./images/fita.png";
    girl.setAttribute("class", "girl");
    body.appendChild(girl);
   
    
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
