import "core-js/modules/es.array.find.js";
import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';
export var onToggleTask = function onToggleTask(e) {
  var taskId = e.target.dataset.id;
  var tasksList = getItem('tasksList');

  var _tasksList$find = tasksList.find(function (task) {
    return task.id === taskId;
  }),
      text = _tasksList$find.text,
      createDate = _tasksList$find.createDate;

  var done = e.target.checked;
  var updatedTask = {
    text: text,
    createDate: createDate,
    done: done,
    finishdate: done ? new Date().toISOString() : null
  };
  updateTask(taskId, updatedTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
};

var onDeleteTask = function onDeleteTask(e) {
  var taskId = e.target.dataset.id;
  deleteTask(taskId).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
};

export var onListClick = function onListClick(e) {
  var isCheckbox = e.target.classList.contains('list-item__checkbox');
  var isDeleteBtn = e.target.classList.contains('list-item__delete-btn');

  if (isCheckbox) {
    onToggleTask(e);
  }

  if (isDeleteBtn) {
    onDeleteTask(e);
  }
}; // 1. prepare data
// 2. write data in data base
// 3. read new data from server
// 4. save new data to front-end srorage
// 5. update UI based on new data