var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");

                var panel = this.nextElementSibling;

                // Close all other panels
                var allPanels = document.getElementsByClassName("panel");
                for (var j = 0; j < allPanels.length; j++) {
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