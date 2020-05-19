
//let body = document.querySelector("body");
class Game {
    constructor(){
        this.girl = new Girl();       
    }
// render(){
//     this.girl.render()
// }    
// addGirl(girl){
//     this.girl=girl
//     }
}
class Girl {
    constructor(){
        this.x = 0; 
        this.controls();     
        this.render();  
    }
    width = 90;
    speed = 20;
}
//controls() {  
    document.addEventListener("keydown", function(event){
        switch (event.key.toLowerCase()) {
            case ("d"):
                $girl.style.left = `${$girl.offsetLeft + 10}px`;
                // if (!(this.x + this.speed > (window.innerWidth - this.width))) {
                //     this.x += this.speed
                //     console.log(`can go`)
                // } 
                break;
            case("a"):
                $girl.style.left = `${$girl.offsetLeft - 10}px`;
                break;
            case ("w"):
                $girl.style.top = `${$girl.offsetTop - 10}px`;
                break;
            case ("s"):
                $girl.style.top = `${$girl.offsetTop + 10}px`;
                break;
        }
    })


//render(){
    let body = document.querySelector("body");
    let $girl = document.createElement("img");
    $girl.src = "./fita.png/";
    $girl.setAttribute("class", "girl")
    body.appendChild($girl);

    //$girl.style.left=`${this.x}px`;
   // $girl.style.width=`${this.width}px`;


  



// class girl{
//     constructor(){
//         this.girl = document.querySelector("#girl");
//         this.x = this.girl.offsetLeft;
//         this.width = this.girl.offsetWidth;
//     }
// action (event) {
//     if (this.girl.x + this.girl.width < body.offsetLeft + body.offsetWidth) {
//         this.girl.style.left = `${this.girl.offsetLeft + 10}px`
//     }

// }

