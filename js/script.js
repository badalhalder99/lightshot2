let openbtn = document.querySelector('#openModal');
let modalContainer = document.querySelector('#modal-container');
let closebtn = document.querySelector('.closeModalBtn');

openbtn.addEventListener('click', function() {
    modalContainer.style.display = 'block';
    
})
closebtn.addEventListener('click', function() {
    modalContainer.style.display = 'none'; 
})
// window er sathe addEventLister add na korelo kag korbe...
// window.addEventListener('click', function(e) {
//     if(e.target === modalContainer){
//         modalContainer.style.display = 'none';
//     }
// })