let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchItem.classList.remove('active');
}

let searchItem = document.querySelector('.seach-form');

document.querySelector('#search-btn').onclick = () =>{
    searchItem.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let userItem = document.querySelector('.user-items-container');

document.querySelector('#user-btn').onclick = () =>{
    userItem.classList.toggle('active');

}



window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchItem.classList.remove('active');
}