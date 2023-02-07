const list_img = document.querySelector('.lists');
console.log(list_img);
var length = list_img.querySelectorAll('img').length;
console.log(length);

const next_btn = document.getElementById('btn-next');
const prev_btn = document.getElementById('btn-prev');
next_btn.addEventListener('click', next);
prev_btn.addEventListener('click',prev);

function next(){
    list_img.appendChild(list_img.querySelectorAll('li')[0]) 
}
function prev(){
        list_img.prepend(list_img.querySelectorAll('li')[length-1]) 
}
