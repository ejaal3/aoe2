/* Effet du logo */ 
const bouncy = document.querySelector(".logo");

bouncy.addEventListener("mouseenter", toggleRubberBand);

function toggleRubberBand(e){
  bouncy.classList.add("bouncing");
  bouncy.addEventListener("animationend", ()=>{
    bouncy.classList.remove("bouncing");
  });
}
