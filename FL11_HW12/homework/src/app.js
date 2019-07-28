const addBtn = document.getElementById(`add-task`)
const addInput = document.getElementById('add-input')
const saveAddTask = document.getElementById('save-add-task')
const cancelAddTask = document.getElementById('cancel-add-task')
const editInput = document.getElementById('edit-input')
const saveEditTask = document.getElementById('save-edit-task')
const cancelEditTask = document.getElementById('cancel-edit-task')
const todolist = document.getElementById('todolist')
const modal = document.getElementById('modal')
const time = 2000
let todoData = []
let id = 1
let spanItem

// add todo items from local storage 

window.onload = function () {
    if(localStorage.length >= 1) {
        let temp = JSON.parse(localStorage.getItem(`todoData`))
        id = localStorage.getItem('id') + 1

        if(todolist.firstElementChild.classList.contains('no-items')){
            todolist.removeChild(document.querySelector('.no-items'))
        } 

        temp.forEach((item) => {
            
            if (id < item.tdId){
                id = item.tdId
            }

            let li = document.createElement(`li`)
            let checkBox = document.createElement(`input`)
            let span = document.createElement(`span`)
            let deleteBtn = document.createElement(`button`)
            
            li.dataset.id = `${item.tdId}`
            checkBox.type = 'checkbox'
            span.innerText = `${item.description}`
            checkBox.checked = item.isDone
            deleteBtn.innerHTML = '<img src="./assets/img/remove-s.jpg">'

            todolist.appendChild(li)
            li.appendChild(checkBox)
            li.appendChild(span)
            li.appendChild(deleteBtn)
            
            deleteBtn.addEventListener('click', deleteItem)
            span.addEventListener('click', toEditItem)
            checkBox.addEventListener('click', checkRadioBtn)

            if(checkBox.checked) {
                checkBox.disabled = true
                checkBox.addEventListener('click', checkRadioBtn)
                span.removeEventListener('click', toEditItem)
                span.classList.add('done')
                span.addEventListener('click', noEdit)
            } 
        })
    }
}

// move to add anchor

function toAddItem() {
   document.location.href = `#add-cont` 
   document.querySelector(`#todo-cont`).className = 'nodisplay'
   document.querySelector(`#add-cont`).className = 'display'
}

// create li item

function createItem(value, num) {
    let li = document.createElement(`li`)
    let checkBox = document.createElement(`input`)
    let span = document.createElement(`span`)
    let deleteBtn = document.createElement(`button`)

    li.dataset.id = `${num}`
    checkBox.type = 'checkbox'
    span.innerText = value
    deleteBtn.innerHTML = '<img src="./assets/img/remove-s.jpg">'

    todolist.appendChild(li)
    li.appendChild(checkBox)
    li.appendChild(span)
    li.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', deleteItem)
    span.addEventListener('click', toEditItem)
    checkBox.addEventListener('click', checkRadioBtn)
}

// add item

function addItem() {

    let text = addInput.value
    id++
    let dataValue = {tdId: id, description: text, isDone: false}
    
    if(todolist.firstElementChild.classList.contains('no-items')){
        todolist.removeChild(document.querySelector('.no-items'))
    } 

    createItem(text, id)
    todoData.push(dataValue)
    if(localStorage.length < 1){
        localStorage.setItem(`todoData`, JSON.stringify(todoData))
    } else {
        let temp = JSON.parse(localStorage.getItem(`todoData`))
        temp.push(dataValue)
        localStorage.removeItem(`todoData`)
        localStorage.setItem(`todoData`, JSON.stringify(temp))
    }
    
    addInput.value = ''

    backFromAdd()
}

// move to edit anchor and edit 

function toEditItem() {
    spanItem = this
    
    document.location.href = `#add-cont` 
    document.querySelector(`#todo-cont`).className = 'nodisplay'
    document.querySelector(`#edit-cont`).className = 'display'
    
    editInput.value = spanItem.innerText
    saveEditTask.addEventListener('click', editItem)
 }

 function editItem() {
    let tempinp = document.querySelector('#edit-input')
    let exit = false
    let temp = JSON.parse(localStorage.getItem(`todoData`))      
    temp.forEach((item) => {            
        if(tempinp.value === item.description){
            if(window.navigator.vendor === 'Google Inc.'){
                modal.classList.remove('nodisplay')
                modal.style.cssText = 'left: 25px'
                modal.innerHTML = '<h3>Alert</h3><p>You cant add already existing item</p>'
                timer()
                exit = true
            } else {
                modal.classList.remove('nodisplay')
                modal.style.cssText = 'right: 25px;'
                modal.innerHTML = '<h3>Alert</h3><p>You cant add already existing item</p>'
                timer()
                exit = true
            }
        } 
    })
    if(!exit){
        spanItem.innerText = tempinp.value     
        temp.forEach((item) => {
        if(item.tdId === +spanItem.parentNode.getAttribute('data-id')){
            item.description = spanItem.innerText
            }
        })
        localStorage.removeItem(`todoData`)
        localStorage.setItem(`todoData`, JSON.stringify(temp))
        backFromEdit()
    }
}

 // modal alert if done task
 
function noEdit() {
    if(window.navigator.vendor === 'Google Inc.'){
        document.querySelector('.modal').classList.remove('nodisplay')
        document.querySelector('.modal').style.cssText = 'left: 25px'
        document.querySelector('.modal').innerHTML = '<h3>Alert</h3><p>You cant edit a done item</p>'
        timer()
    } else {
        document.querySelector('.modal').classList.remove('nodisplay')
        document.querySelector('.modal').style.cssText = 'right: 25px;'
        document.querySelector('.modal').innerHTML = '<h3>Alert</h3><p>You cant edit a done item</p>'
        timer()
    }  
}

// back to todolist from add

function backFromAdd() {
    document.location.href = `#` 
    document.querySelector(`#todo-cont`).className = 'display'
    document.querySelector(`#add-cont`).className = 'nodisplay'
}

// back to todolist from edit

function backFromEdit() {
    document.location.href = `#` 
    document.querySelector(`#todo-cont`).className = 'display'
    document.querySelector(`#edit-cont`).className = 'nodisplay'
}

// check

function checkRadioBtn() {
    if(this.checked){
        this.disabled = true
        this.parentNode.childNodes[1].removeEventListener('click', toEditItem)
        this.parentNode.childNodes[1].classList.add('done')
        this.parentNode.childNodes[1].addEventListener('click', noEdit)
           
        let temp = JSON.parse(localStorage.getItem(`todoData`))      
        temp.forEach((item) => {
            console.log(item.isDone)
            if(item.tdId === +this.parentNode.getAttribute('data-id')){
                item.isDone = true
            }
        })
        console.log(temp)
        localStorage.removeItem(`todoData`)
        localStorage.setItem(`todoData`, JSON.stringify(temp))
    }
}

// delete item

function deleteItem() {
    todolist.removeChild(this.parentNode)
    let temp = JSON.parse(localStorage.getItem(`todoData`))

    temp.forEach((item) => {
        for (let key in item){
            if (item[key] === +this.parentNode.getAttribute('data-id')){
                temp.splice(temp.indexOf(item), 1)
            }
        }
    })
    
    localStorage.removeItem(`todoData`)
    localStorage.setItem(`todoData`, JSON.stringify(temp))


    if(todolist.childElementCount === 0){
        let li = document.createElement(`li`)
      
        localStorage.removeItem(`todoData`)

        li.innerHTML ='TODO is empty'
        li.className = 'no-items'
        todolist.appendChild(li)
    }
    

}

function timer() {
    setTimeout(function(){
       modal.classList.add('nodisplay')
    }, time)
}

addBtn.addEventListener(`click`, toAddItem)
saveAddTask.addEventListener('click', addItem)
cancelAddTask.addEventListener('click', backFromAdd)
cancelEditTask.addEventListener('click', backFromEdit)