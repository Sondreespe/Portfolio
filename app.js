const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransition(){
    //button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener("click", function(){
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            this.className += " active-btn";
        })
    }

    //section active 
    allSections.addEventListener("click", (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other button
            secBtns.forEach((btn) =>{
                btn.classList.remove("active")
            })
            e.target.classList.add("active")

            // hide other sections
            sections.forEach((section)=>{
                section.classList.remove("active")
            })
            
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    })

    //toggle theme button
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click",() =>{
        let element =document.body;
        element.classList.toggle("light-mode")
    })
}

pageTransition();