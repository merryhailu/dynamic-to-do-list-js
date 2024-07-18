
document.addEventListener('DOMContentLoaded', () => {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    let tasks = [];

    //load tasks from local storage

    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Enter a task');
            return;
        } else {

            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

            removeButton.onclick = function () {
                taskList.removeChild(listItem);
            };

            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);


            tasks.push(taskText);
            saveTasks();

            taskInput.value = "";
        };
    };


    function removeTask(taskText) {
        tasks = tasks.filter(t => t !== taskText);
        saveTasks();
    };

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.textContent = task;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');
            removeButton.onclick = function () {
                taskList.removeChild(listItem);
                removeTask(task);
            };

            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
        });
    };





    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

});
document.addEventListener('DOMContentLoaded', () => {
    addTask();
});