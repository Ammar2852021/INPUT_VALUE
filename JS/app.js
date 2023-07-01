

let VALUE = document.getElementById('VALUE');
let input = document.getElementById('input');

input.addEventListener('input',function()
{
    VALUE.style.background=input.value;
})