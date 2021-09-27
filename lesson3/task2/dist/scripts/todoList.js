import { onCreateTask } from './createTask.js';
import { onListClick } from './updateTask.js';
import { listElem } from './storage.js';
export var initTodoListHandlers = function initTodoListHandlers() {
  var createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
  listElem.addEventListener('click', onListClick);
};