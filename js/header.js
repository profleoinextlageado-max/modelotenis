// SISTEMA DE MENU

let cliquemenu = document.querySelector('#preto-icon-menu');
let fundomenu = document.querySelector('.box-menu-mob');
let fechar = document.querySelector('#icon-fechar')

cliquemenu.addEventListener('click', ()=>{
    fundomenu.classList.add('ativar-menumob')
})
fechar.addEventListener('click', ()=>{
    fundomenu.classList.remove('ativar-menumob')
})
