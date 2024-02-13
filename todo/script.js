// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

// Function to remove a task
function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const li = button.parentNode;
    taskList.removeChild(li);
}
