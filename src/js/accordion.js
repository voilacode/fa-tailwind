
/** 
 * Accordion script to handle multiple accordions 
 * that have class name accordion 
*/
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        // Close all other panels
        let allPanels = document.getElementsByClassName("panel");
        for (let j = 0; j < allPanels.length; j++) {
            if (allPanels[j] !== panel) {
                allPanels[j].style.display = "none";
                // Remove "active" class from other buttons
                acc[j].classList.remove("active");
            }
        }
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}