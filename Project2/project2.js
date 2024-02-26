document.addEventListener('DOMContentLoaded', function(){
    const taskForm = document.getElementById('taskForm');
        const taskList = document.getElementById('taskList');
        const tasks = [];

        taskForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const taskTitle = document.getElementById('taskTitle').value;
            const taskPriority = document.getElementById('taskPriority').value;
            const taskStatus = document.querySelector('input[name="taskStatus"]:checked').value;
            
            const task = { title: taskTitle, priority: taskPriority, status: taskStatus };
            tasks.push(task);
            addTaskToList(task);
            taskForm.reset();
        });

        function addTaskToList(task) {
            const li = document.createElement('li');
            li.textContent = `${task.title} - Priority: ${task.priority} - Status: ${task.status}`;
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function() {
                const index = tasks.indexOf(task);
                if (index !== -1) {
                    tasks.splice(index, 1);
                    li.remove();
                }
            });
            
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Mark as Complete';
            completeButton.addEventListener('click', function() {
                li.classList.add('completed');
            });

            li.appendChild(removeButton);
            li.appendChild(completeButton);
            taskList.appendChild(li);
        }
})