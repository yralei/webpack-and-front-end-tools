import { onCreateTask } from './createTask';
import { onListClick } from './updateTask';
import { listElem } from './storage';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
  listElem.addEventListener('click', onListClick);
};
