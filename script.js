let cont = document.querySelector('#container');
let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let para = document.createElement('p');
    para.textContent = "Thanks for adding me!";
    cont.appendChild(para);
});