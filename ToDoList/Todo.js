let todoList = [
    {
        item: 'First',
        dueDate: '4/10/2024'
    },
    {
        item: 'Second',
        dueDate: '4/10/2024'
    }
];
showTodo();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    if (todoItem == '') {
        alert('Do not give blank Input');
        return;
    }
    todoList.push({ item: todoItem, dueDate: todoDate });

    inputElement.value = '';
    dateElement.value = '';

    showTodo();
}

function showTodo() {
    let containerItem = document.querySelector('.todo-container');
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        // let item = todoList[i].item;
        // let date = todoList[i].dueDate;

        let { item, dueDate } = todoList[i];

        newHtml += `
              <span>${item}</span>
              <span>${dueDate}</span>
              <button onclick = "todoList.splice(${i},1);showTodo();" >Delete</button>
       
        `;
    }
    containerItem.innerHTML = newHtml;
}