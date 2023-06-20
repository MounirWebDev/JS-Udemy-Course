'use strict';

const btnsShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const openModalFun = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModalFun = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsShowModal.forEach(showModel => {
    showModel.addEventListener('click', openModalFun);
});
closeModal.addEventListener('click', closeModalFun);
overlay.addEventListener('click', closeModalFun)
