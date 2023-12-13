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
function openPopUp() {
    document.getElementById('popup').classList.remove('hidden');
}

function closePopUp() {
    document.getElementById('popup').classList.add('hidden');
}