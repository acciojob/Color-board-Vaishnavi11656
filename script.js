//your JS code here. If required.
const container = document.querySelector(".container")

            // Create 800 squares
            for(let i = 1; i<=800; i++){
                console.log("loop",i)
                createSquare()
            }


            function createSquare(){
                const square = document.createElement("div")
                square.classList.add("square")
                square.addEventListener("mouseover",addRandomColor)
                square.addEventListener("mouseout",removecolor);
                container.appendChild(square)
            }  
            function addRandomColor(e){
                const square=e.target
                const randomColor= "#"+ Math.floor(Math.random()*255*255*255).toString(16).padStart(6,"0")
                console.log(randomColor,randomColor.length,'random color')
                square.style.backgroundColor=randomColor
            }
            function removecolor(e){
                setTimeout(()=>{
                    e.target.style.backgroundColor = "";
                   // e.target.style.transition
                },1000)
            }
