
document.addEventListener('DOMContentLoaded', () => {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');


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

            taskInput.value = "";
        };
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