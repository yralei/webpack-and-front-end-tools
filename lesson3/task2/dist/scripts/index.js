import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';
document.addEventListener('DOMContentLoaded', function () {
  getTasksList().then(function (tasksList) {
    setItem('tasksList', tasksList);
    renderTasks();
  });
  initTodoListHandlers();
});

var onSrorageChange = function onSrorageChange(e) {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onSrorageChange); // 1. Get data from server
// 2. Save data to front-end storage