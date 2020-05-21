window.onload = () => { 
    //let game = new Game(); 
document.getElementById('myBtn').onclick = () => {

            //making the girl
            let body = document.querySelector("body");
            let girl = document.createElement("img");
            girl.src = "./images/fita.png";
            girl.setAttribute("class", "girl");
            body.appendChild(girl);

            //making the flowers 
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
   
                //making moskito
            let insect = document.createElement("img");
            insect.src = "./images/moskito.jpg"
            insect.setAttribute("class", "insect");
            body.appendChild(insect);     
    
    }
   
    class Car { 
   constructor(){ 
    
    
    
          this.initControls(); 
    
    
    
        } 
    
    
    
        moving = false; 
    
    
    
        startMove = null; 
    
    
    
        x = 400; 
    
    
    
        y = 400; 
    
    
    
        speed = 100; 
    
    
    
    
    
    
    
        initControls(){ 
    
    
    
          document.addEventListener("keydown", (event)=>{ 
    
    
    
            this.x = this.position.x; 
    
    
    
            this.y = this.position.y; 
    
    
    
            switch(event.key){ 
    
    
    
              case "ArrowLeft": 
    
    
    
                this.moving = "left"; 
    
    
    
                this.startMove = new Date(); 
    
    
    
                break; 
    
    
    
              case "ArrowRight": 
    
    
    
                this.moving = "right"; 
    
    
    
                this.startMove = new Date(); 
    
    
    
                break; 
    
    
    
                case "ArrowUp": 
    
    
    
                  this.moving = "up"; 
    
    
    
                  this.startMove = new Date(); 
    
    
    
                  break; 
    
    
    
                case "ArrowDown": 
    
    
    
                  this.moving = "down"; 
    
    
    
                  this.startMove = new Date(); 
    
    
    
                break;     
    
    
    
            } 
    
    
    
          }) 
    
    
    
        } 
    
    
    
        get position(){ 
    
    
    
    
    
    
    
          switch (this.moving) { 
    
    
    
            case "left": 
    
    
    
              return { 
    
    
    
                x: this.x - ((new Date() - this.startMove)/1000)* this.speed,  
    
    
    
                y: this.y 
    
    
    
              } 
    
    
    
            case "right": 
    
    
    
              return { 
    
    
    
                x: this.x + ((new Date() - this.startMove)/1000)* this.speed,  
    
    
    
                y: this.y 
    
    
    
              } 
    
    
    
            case "up": 
    
    
    
              return { 
    
    
    
                x: this.x,  
    
    
    
                y: this.y - ((new Date() - this.startMove)/1000)* this.speed 
    
    
    
              }  
    
    
    
            case "down": 
    
    
    
              return { 
    
    
    
                x: this.x,  
    
    
    
                y: this.y + ((new Date() - this.startMove)/1000)* this.speed 
    
    
    
              }         
    
    
    
            case false: 
    
    
    
              return { 
    
    
    
                x: this.x, 
    
    
    
                y: this.y 
    
    
    
              } 
    
    
    
          } 
    
    
    
    
    
    
    
        } 
    
    
    
    
    
    
    
        render(){ 
          // car dom manipulation here
          let $gameBoard = document.querySelector("#game-board"); 
          let $car = document.createElement("img") 
          $car.setAttribute("src", "./images/car.png"); 
          $car.setAttribute("id", "car"); 
          $car.style.left = `${this.position.x}px`; 
          $car.style.top = `${this.position.y}px`; 
          $gameBoard.appendChild($car); 
       } 
    } 
    
  
    };