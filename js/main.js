'use strict';
{
  let id = 0;
  const tasks = [];

  let addTasks = () => {
    const task = document.getElementById('text');
    tasks.push(task.value);
    task.value = '';
  }

  let displayTasks = () => {
    const tr = document.createElement('tr');
    // 一列目
    const tdId = document.createElement('td');
    tdId.textContent = id;
    tr.appendChild(tdId);
    // 二列目
    const tdTask = document.createElement('td');
    tdTask.textContent = tasks[id];
    tr.appendChild(tdTask);
    // 三列目
    const tdStatus = document.createElement('td');
    const button1 = document.createElement('button');
    button1.textContent = '作業中';
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