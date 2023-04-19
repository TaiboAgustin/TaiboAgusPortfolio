const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector ('#close-btn');
const menu = document.querySelector('nav .container ul');

menuBtn.addEventListener('click', () =>{
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

closeBtn.addEventListener('click',() =>{
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0)
})



const body = document.querySelector('body');
const toggleBtn = document.querySelector('#toggle-btn');
const darkMode = localStorage.getItem('darkMode'); // obtiene el estado actual del modo oscuro desde localStorage

// establece el modo oscuro según el estado almacenado en localStorage, o establece el modo por defecto si no hay estado almacenado
if (darkMode === 'true') {
  body.classList.add('dark-mode');
} else {
  body.classList.remove('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode')); // guarda el estado actual del modo oscuro en localStorage
});
