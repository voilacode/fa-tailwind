const navLinks = document.querySelector('.nav-links');

      function onToggleMenu(icon){
        icon.name = icon.name === 'menu' ? 'close' : 'menu'
        navLinks.classList.toggle('top-[10.5%]')
    }

// modal
function openModal() {
    document.getElementById('modal').classList.remove('hidden');
    document.querySelector('.modal-content').classList.add('scale-100');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.querySelector('.modal-content').classList.remove('scale-100');
}

//pop up
const openModalButtons = document.querySelectorAll('[id^="openPopUp"]');
    const closeModalButtons = document.querySelectorAll('[id^="closePopUp"]');
    const modals = document.querySelectorAll('[id^="popup"]');
    let scrollTop = 0;

    // Function to open the modal
    const openPopUp = (modalIndex) => {
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        modals[modalIndex].classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the background
    };

    // Function to close the modal
    const closePopUp = (modalIndex) => {
        modals[modalIndex].classList.add('hidden');
        document.body.style.overflow = ''; // Allow scrolling on the background
        window.scrollTo(0, scrollTop);
    };

    // Event listeners for opening modals
    openModalButtons.forEach((button, index) => {
        button.addEventListener('click', () => openPopUp(index + 1));
    });

    // Event listeners for closing modals
    closeModalButtons.forEach((button, index) => {
        button.addEventListener('click', () => closePopUp(index + 1));
    });