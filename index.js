const root = document.querySelector('#root')
root.className = 'root'
const tasks = [
  {
    id: self.crypto.randomUUID(),
    task: 'Выучить JS',
    isCompleted: false,
    date: new Date().toLocaleDateString()
  },
  {
    id: self.crypto.randomUUID(),
    task: 'Выучить JS',
    isCompleted: false,
    date: new Date().toLocaleDateString()
  },
]

function createToDoList() {
  tasks.forEach(item => {
    const listElement = document.createElement('div')
    listElement.className = 'list_element'
    listElement.id = item.id


    const listButtonDone = document.createElement('input')
    listButtonDone.className = 'checkbox'
    listButtonDone.type = 'checkbox'
    listButtonDone.addEventListener('change', () => {
      listElement.className = 'list_element--checked'
    })


    const toDoText = document.createElement('span')
    toDoText.className = 'todo-text'
    toDoText.textContent = `${item.task}`

    const listButtonClose = document.createElement('button')
    listButtonClose.className = 'button'
    listButtonClose.type = 'button'
    listButtonClose.textContent = 'Delete'
    listButtonClose.addEventListener('click', () => {
      tasks.splice(item.id, 1)
    })

    const toDoListDate = document.createElement('span')
    toDoListDate.textContent = `${item.date}`
    toDoListDate.className = 'date'

    const wrapper = document.createElement('div')
    wrapper.className = 'wrapper'

    root.append(listElement)
    listElement.append(wrapper)
    wrapper.prepend(listButtonClose, toDoListDate)
    listElement.prepend(listButtonDone, toDoText)
  })
};

function createHeader() {
  const header = document.createElement('header')
  header.className = 'header'

  const buttonAdd = document.createElement('button')
  buttonAdd.className = 'button'
  buttonAdd.classList = 'button-add button'
  buttonAdd.type = 'submit'
  buttonAdd.textContent = 'Add'
  buttonAdd.addEventListener('click', () => {
    tasks.push({
      id: self.crypto.randomUUID(),
      task: input.value,
      isCompleted: false,
      date: new Date().toLocaleDateString()
    })
    console.log(tasks)
    input.value = ''
  },)

  const buttonRemove = document.createElement('button')
  buttonRemove.className = 'button'
  buttonRemove.type = 'button'
  buttonRemove.textContent = 'Delete All'
  buttonRemove.addEventListener('click', () => {
    if (tasks.length > 0) {
      tasks.splice(0, 9999)
      console.log(tasks)
    }
  })

  const form = document.createElement('form')
  form.className = 'form'
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    input.value = ''
  })

  const input = document.createElement('input')
  input.placeholder = 'text here'
  input.className = 'input'

  root.prepend(header)
  header.prepend(form)
  form.prepend(buttonAdd, input, buttonRemove)

  return header
}
const addHeader = createHeader()
root.prepend(addHeader)
const toDoList = createToDoList()
root.append(toDoList)
