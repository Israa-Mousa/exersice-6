


        while (1) {
            console.log("Welcome To Israa Task");
            console.log("1. Add Task");
            console.log("2. View Task");
            console.log("3. Toggle Task Completion");
            console.log("4. Edit Task");
            console.log("5. Delete Task");
            console.log("6. Exit");

            var choice = prompt("Enter your choice (1-6)");

            switch (choice) {
                case '1':
                    console.log("You choose to Add Task");
                    createTask();
                    break;
                case '2':
                    console.log("You choose to View Task");
                    viewTasks()
                    break;
                case '3':
                    console.log("You choose to Toggle Task Completion");
                    toggleTaskCompletion();
                    break;
                case '4':
                    console.log("You choose to Edit Task");
                    editTask()
                    break;
                case '5':
                    console.log("You choose to Delete Task");
                    deleteTask()
                    break;
                case '6':
                    console.log("Exiting From Israa Task...");
                    running = false;
                    break;
                default:
                    console.log("Invalid choice. Please enter a number between 1 and 6.");
            }
        }

        function createTask(){
            var taskDescription=prompt('Enter task description')
            var task={
                description:taskDescription,
                completed:false
            }

            var tasks=JSON.parse(localStorage.getItem("tasks"))||[];
           tasks.push(task)
           localStorage.setItem("tasks",JSON.stringify(tasks))
          console.log("Tasks Added successfully")
        }   


        function viewTasks() {
            var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

            if (tasks.length === 0) {
                console.log("No tasks found.");
                return;
            }

            console.log("Tasks:");
            tasks.forEach(function(task, index) {
                console.log((index + 1) + ". " + task.description + " [" + (task.completed ? "Completed" : "Not Completed") + "]");
            });
        }

        function deleteTask() {
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        var taskId = prompt("Enter the ID of the task you want to delete:");

        var index = parseInt(taskId) - 1; 

        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
            
            localStorage.setItem("tasks", JSON.stringify(tasks));
            
            console.log("Task deleted successfully.");
        } else {
            console.log("Invalid task ID. Please try again.");
        }
        }

        function toggleTaskCompletion() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    var taskId = prompt("Enter the ID of the task you want to toggle completion status:");

    var index = parseInt(taskId) - 1;

    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = !tasks[index].completed;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log("Task completion status toggled successfully.");
        } else {
            console.log("Invalid task ID. Please try again.");
        }
    }
    function editTask() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    var taskId = prompt("Enter the ID of the task you want to edit:");

    var index = parseInt(taskId) - 1; 

    if (index >= 0 && index < tasks.length) {
        var newDescription = prompt("Enter the new description for the task:", tasks[index].description);
        
        if (newDescription) {
            tasks[index].description = newDescription;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            console.log("Task description updated successfully.");
        } else {
            console.log("No changes made to the task.");
        }
    } else {
        console.log("Invalid task ID. Please try again.");
    }
}