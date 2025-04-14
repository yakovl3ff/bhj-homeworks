const list = document.querySelector('.dropdown__list');
const dropdown = document.querySelector('.dropdown__value');
const links = document.querySelectorAll('.dropdown__link');

function toggleList(event) {
    event.stopPropagation();
    list.classList.toggle('dropdown__list_active');
}

function updateName(event) {
    event.preventDefault();
    event.stopPropagation();
    dropdown.textContent = event.target.textContent;
    list.classList.remove('dropdown__list_active');
}

links.forEach(link => {
    link.addEventListener('click', updateName);
});

dropdown.addEventListener('click', toggleList);
