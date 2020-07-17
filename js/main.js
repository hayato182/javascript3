'use strict';
{
  let id = 0;
  const tasks = [];
  let addTasks = () => {
    tasks.push({});
    tasks[id]['id'] = id;
    const task = document.getElementById('text');
    tasks[id]['coment'] = task.value;
    task.value = '';
  }
  let displayTasks = () => {
    const tr = document.createElement('tr');
    // 一列目
    const tdId = document.createElement('td');
    tdId.textContent = tasks[id]['id'];
    tr.appendChild(tdId);
    // 二列目
    const tdTask = document.createElement('td');
    tdTask.textContent = tasks[id]['coment'];
    tr.appendChild(tdTask);
    // 三列目
    const tdStatus = document.createElement('td');
    const button1 = document.createElement('button');
    tasks[id]['status'] = '作業用';
    button1.textContent = tasks[id]['status'];
    tdStatus.appendChild(button1);
    tr.appendChild(tdStatus);
    // 四列目
    const tdDelete = document.createElement('td');
    const button2 = document.createElement('button');
    button2.textContent = '削除';
    tdDelete.appendChild(button2)
    tr.appendChild(tdDelete);
    document.querySelector('tbody').appendChild(tr);
    id++;
  }
  document.querySelector('button').addEventListener('click', () => {
    addTasks();
    displayTasks();
  });
}