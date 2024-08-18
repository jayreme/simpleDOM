const ul  = document.querySelector('.list')
const input = document.querySelector('#item')
const btn = document.querySelector('#btn')

const addList = () => {
    let userInput = input.value;
    input.value = ''
    const li = document.createElement('li')
    const span = document.createElement('span')
    const button = document.createElement('button')

    li.appendChild(span)
    li.appendChild(button)
    span.textContent = userInput;
    button.textContent = 'Delete'
    ul.appendChild(li)
    button.addEventListener('click', () => {
        ul.removeChild(li)
    })
    input.focus()
}

btn.addEventListener('click',addList)