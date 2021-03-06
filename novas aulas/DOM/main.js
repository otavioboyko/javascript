//selecionar apenas um elemento
//const addUsertext = document.getElementById('add-user')
//const myform = document.querySelector(".item")

//selecionar multiplos elementos
//const todos = document.querySelectorAll(".item")
//const todos = document.getElementsByClassName('item')
//const todos = document.getElementsByTagName('li')

const item = document.querySelector(".items")
const botao = document.querySelectorAll('.btn')

//item.remove() remove todos os itens
//item.firstElementChild.remove() //firstElementChild pega o primeiro filho da coisa que voce quer. E o remove remove o primeiro filho
//item.lastElementChild.remove()//lastElementChild e a mesma coisa que o anterior so que ele pega o ultimo
//item.children[1].textContent = "item dois" //o children e uma lista
//item.lastElementChild.innerHTML = "<h1>oi</h1>" //podemos modificar o html com o inner html

botao.style.background = "red"; //muda a cor do botao
botao.style.color = "blue" //muda coisas que esta no botao

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const submiButton = document.querySelector('#submit-button')

const errorMessae = document.querySelector('.msg')

const items = document.querySelector('.items')

submiButton.addEventListener('click', (e) => {
    e.preventDefault()

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === '' || emailValue === '') {
        errorMessae.textContent = "por favor preencha os campos necessarios";
        errorMessae.classList = "error";

        setTimeout(() => {
            errorMessae.textContent = "";
            errorMessae.classList = "";
        }, 5000);
        return;
    }

    const li = document.createElement("li");
    li.classList = 'item'
    li.innerHTML = `nome: ${nameValue} <br /> Email: ${emailValue}`

    items.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
})