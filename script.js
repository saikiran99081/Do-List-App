// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskName = taskInput.value.trim();

    if (taskName !== "") {
        var taskList = document.getElementById("task-list");

        // Create task item
        var taskItem = document.createElement("li");
        taskItem.className = "task-item";

        // Create task name span
        var taskNameSpan = document.createElement("span");
        taskNameSpan.className = "task-name";
        taskNameSpan.textContent = taskName;

        // Create delete button
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            taskItem.remove();
        });

        // Append elements
        taskItem.appendChild(taskNameSpan);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        // Clear input
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
