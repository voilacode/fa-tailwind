    document.addEventListener('click', function (event) {
        const target = event.target;

        // Open popup when trigger button is clicked
        if (target.hasAttribute('data-popup')) {
            const popupId = target.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            if (popup) {
                popup.classList.remove('hidden');
            }
        }

        // Close popup when close button is clicked
        if (target.hasAttribute('data-popup-close')) {
            const popupId = target.getAttribute('data-popup-close');
            const popup = document.getElementById(popupId);
            if (popup) {
                popup.classList.add('hidden');
            }
        }

    });
