let btn = document.querySelector('.btn');
let input = document.querySelector('.name1');
let name = document.querySelector('.name');
let price = document.querySelector('.price');
let category = document.querySelector('.category');
let input1 = document.querySelector('.name2');
let select = document.querySelector('.select');

btn.addEventListener('click', () =>{
    let element = document.createElement('li');
    element.textContent = input.value;
    name.append(element);
});

btn.addEventListener('click', ()=>{
    let element = document.createElement('li');
    element.textContent = input1.value;
    price.append(element);
});

btn.addEventListener('click', ()=>{
    let element = document.createElement('li');
    element.textContent = select.value;
    category.append(element);
})