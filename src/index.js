// const average = require('./average');
// const numbers = [1, 2, 3, 4, 5];
// const avg = average(numbers);
// console.log(`Average: ${avg}`);
import { datas } from "./average.js";
const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name');
    const mail = document.querySelector('#mail');
    const message = document.querySelector('#message');
    if(message.value.trim().length === 0 || name.value.trim().length === 0 || mail.value.trim().length === 0){
        alert('Fill all labels');
        return;
    }
datas.name = name.value;
datas.mail = mail.value;
datas.message = message.value;
alert('Datas received');
})