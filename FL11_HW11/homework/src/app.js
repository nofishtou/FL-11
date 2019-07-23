let rootNode = document.getElementById('root');
let input = document.getElementById('input')
let plus = document.getElementById('plus')
let list = document.getElementById('list')
let editBtns = document.querySelectorAll('.edit')
let deleteBtns = document.querySelectorAll('.delete')
let checkBtns = document.querySelectorAll('.checkbox')
let items = document.querySelectorAll('#list .item');

function createItem(inputValue){
  let li = document.createElement('li')
  let checkBox =document.createElement('input')
  let saveBtn = document.createElement('i')  
  let span = document.createElement('span')
  let editBtn = document.createElement('i')
  let deleteBtn = document.createElement('i')
  let editInput = document.createElement('input')
  
  li.className = 'item'
  li.draggable = true
  checkBox.type = 'checkbox'
  checkBox.className = 'checkbox'
  editInput.type = 'text'
  editInput.className = 'notdisplay'
  saveBtn.className = 'material-icons btn-i save notdisplay'
  saveBtn.innerText = 'save'
  editBtn.className = 'material-icons btn-i edit'
  editBtn.innerText = 'edit'
  deleteBtn.className = 'material-icons btn-i delete'
  deleteBtn.innerText = 'delete'
  span.innerText = inputValue

  li.addEventListener('dragstart', dragStart);
  li.addEventListener('dragover', dragOver);
  li.addEventListener('drop', drop);
  checkBox.addEventListener('click', checkRadioBtn)
  deleteBtn.addEventListener('click', deleteItem)
  editBtn.addEventListener('click', editItem)
 
  li.appendChild(checkBox)
  li.appendChild(editInput)
  li.appendChild(saveBtn)
  li.appendChild(span)
  li.appendChild(editBtn)
  li.appendChild(deleteBtn)

  return li
}

function addItem() {  
  checkAmounthAdd()
  let text = input.value
  let newLi = createItem(text)
  list.appendChild(newLi)
  input.value = ''
  verify()
}

function editItem(){
  let item = this.parentNode;
  let editInput = item.querySelector('input[type=text]')
  let savBtn = item.querySelector('.save')
  let span = item.querySelector('span')
  let editBtn = item.querySelector('.edit')
  
  editInput.classList.remove('notdisplay')
  span.classList.add('notdisplay')
  savBtn.classList.remove('notdisplay')
  editBtn.classList.add('notdisplay')

  savBtn.addEventListener('click', saveTask)
  editInput.value = span.innerText

  function saveTask () {
    span.innerText = editInput.value
    editInput.classList.add('notdisplay')
    span.classList.remove('notdisplay')
    savBtn.classList.add('notdisplay')
    editBtn.classList.remove('notdisplay')
  }
}

function deleteItem () {
  list.removeChild(this.parentNode)
  checkAmounthDel()
}

function checkRadioBtn () {
  if(this.checked){
    this.disabled = true
  }
}

function verify() {
  if(input.value === '') {
    plus.disabled = true
  } else { 
    plus.disabled = false;
  }
}

function checkAmounthAdd() {
  const ascessLength = 9
  let li = document.querySelectorAll('li')
  let str = document.createElement(`p`)
  let parent = document.querySelector('h2').nextElementSibling
  
  str.className = `temp`
  str.innerText = `Maximum item per list are created`
    
  if(li.length === ascessLength ) {
    input.disabled = true
    plus.disabled = true
    parent.parentNode.insertBefore(str, parent )
  } 
}

function checkAmounthDel() {
  const controlLength = 9
  let li = document.querySelectorAll('li')

  if(li.length === controlLength ) {
    document.querySelector('.header').removeChild(document.querySelector('.temp'))
    input.disabled = false
    plus.disabled = false
  } 
}

// !drag n drop

let dragItem = null;

function dragStart(e) {
    dragItem = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
}

function dragEnter(e) {
  e.preventDefault();
  return false
}

function dragOver(e) {
    e.preventDefault();
    this.classList.add('over');
}

function drop(e) {
    if (dragItem !== this) {
        this.parentNode.removeChild(dragItem);
        let dropHTML = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforebegin', dropHTML);
        let dropItem = this.previousSibling;
        dropItem.addEventListener('dragstart', dragStart);
        dropItem.addEventListener('dragover', dragOver);
        dropItem.addEventListener('drop', drop);
    }
    this.classList.remove('over');
    return false;
}

input.addEventListener('input', verify)
plus.addEventListener('click', addItem)
editBtns.forEach( function(item) {
    item.addEventListener('click', editItem)
  }
)

checkBtns.forEach( function(item) {
  item.addEventListener('click', checkRadioBtn)
  }
)

deleteBtns.forEach( function(item) {
  item.addEventListener('click', deleteItem)
 }
)

items.forEach(function(item){
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragover', dragOver);
  item.addEventListener('drop', drop);
  }
);
