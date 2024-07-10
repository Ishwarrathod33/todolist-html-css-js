document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('new-task');
  const todoList = document.getElementById('todo-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(input.value);
    input.value = '';
  });

  function addTask(task) {
    if (task) {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = task;
      span.addEventListener('click', toggleTask);

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', deleteTask);

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.classList.add('edit');
      editBtn.addEventListener('click', editTask);

      li.appendChild(span);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    }
  }

  function toggleTask(e) {
    const li = e.target.parentElement;
    li.classList.toggle('completed');
  }

  function deleteTask(e) {
    const li = e.target.parentElement;
    todoList.removeChild(li);
  }

  function editTask(e) {
    const li = e.target.parentElement;
    const span = li.querySelector('span');
    const newTask = prompt('Edit your task:', span.textContent);
    if (newTask) {
      span.textContent = newTask;
    }
  }
});
