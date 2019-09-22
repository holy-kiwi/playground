const CLASS_CHECKED = 'checked';
const KEY_TODOLIST = 'key:todolist';


let todoList;

let todoListString = localStorage.getItem(KEY_TODOLIST);
if (todoListString !== null) {
    todoList = JSON.parse(todoListString);
    renderTodoList();
} else {
    resetTodoList();
}

document.querySelectorAll('.todolist-checkbox').forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        if (this.classList.contains(CLASS_CHECKED)) {
            this.classList.remove(CLASS_CHECKED);
        todoList[Number(this.getAttribute('key'))].checked = false;
            saveTodoList();
        } else {
            this.classList.add(CLASS_CHECKED);
            todoList[Number(this.getAttribute('key'))].checked = true;
            saveTodoList();
        }
    });
});

document.querySelectorAll('.todolist-input').forEach(function(input) {
    input.onkeyup = function(e) {
        todoList[Number(this.getAttribute('key'))].contents = e.target.value;
        saveTodoList();
    };
});

function saveTodoList() {
    localStorage.setItem(KEY_TODOLIST, JSON.stringify(todoList));
}

function renderTodoList() {
    if (todoList[0].checked) document.querySelector(".todolist-checkbox[key='0']").classList.add(CLASS_CHECKED);
    else document.querySelector(".todolist-checkbox[key='0']").classList.remove(CLASS_CHECKED);
    if (todoList[1].checked) document.querySelector(".todolist-checkbox[key='1']").classList.add(CLASS_CHECKED);
    else document.querySelector(".todolist-checkbox[key='1']").classList.remove(CLASS_CHECKED);
    if (todoList[2].checked) document.querySelector(".todolist-checkbox[key='2']").classList.add(CLASS_CHECKED);
    else document.querySelector(".todolist-checkbox[key='2']").classList.remove(CLASS_CHECKED);
    if (todoList[3].checked) document.querySelector(".todolist-checkbox[key='3']").classList.add(CLASS_CHECKED);
    else document.querySelector(".todolist-checkbox[key='3']").classList.remove(CLASS_CHECKED);

    document.querySelector(".todolist-input[key='0']").value = todoList[0].contents;
    document.querySelector(".todolist-input[key='1']").value = todoList[1].contents;
    document.querySelector(".todolist-input[key='2']").value = todoList[2].contents;
    document.querySelector(".todolist-input[key='3']").value = todoList[3].contents;
}

function resetTodoList() {
    todoList = [
        {
            checked: false,
            contents: '',
        },
        {
            checked: false,
            contents: '',
        },
        {
            checked: false,
            contents: '',
        },
        {
            checked: false,
            contents: '',
        },
    ];
    renderTodoList();
    saveTodoList();
}

document.getElementById('todolist-reset').onclick =  function() {
    resetTodoList();
};
