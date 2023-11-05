"use strict";

const todoList = [
    { task: 'Task 1', completed: false },
    { task: 'Task 2', completed: false },
    { task: 'Task 3', completed: false },
    { task: 'Task 4', completed: false },
    { task: 'Task 5', completed: false },
];

function createTaskItem(task, index)
{
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.innerHTML = `
    <span>${task.task}</span>
    <button class="btn btn-danger" onclick="removeTask(${index})"></button>
    `;
    return listItem;
}


function updateTaskList()
{
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    todoList.forEach((task, index) => 
    {
        const listItem = createTaskItem(task, index);
        taskList.appendChild(listItem);
    });
}

document.getElementById('add-button').addEventListener('click', addTask);
function addTask()
{
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText.trim() !== "")
    {
        todoList.push({ task: taskText, completed: false });
        taskInput.value = "";
        updateTaskList();
    }
}

function completeTask(index) 
{
    if (index >= 0 && index < todoList.length)
    {
        todoList[index].completed = true;
        updateTaskList();
    }
}

function removeTask(index)
{
    if (index >= 0 && index < todoList.length)
    {
        todoList.splice(index, 1);
        updateTaskList();
    }
}

updateTaskList();

