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
    const td1 = document.createElement('td');
    td1.textContent = id;
    tr.appendChild(td1);
    // 二列目
    const td2 = document.createElement('td');
    td2.textContent = tasks[id];
    tr.appendChild(td2);
    // 三列目
    const td3 = document.createElement('td');
    const button1 = document.createElement('button');
    button1.textContent = '作業中';
    td3.appendChild(button1);
    tr.appendChild(td3);
    // 四列目
    const td4 = document.createElement('td');
    const button2 = document.createElement('button');
    button2.textContent = '削除';
    td4.appendChild(button2)
    tr.appendChild(td4);
    document.querySelector('tbody').appendChild(tr);
    id++;
  }


  document.querySelector('button').addEventListener('click', () => {
    addTasks();
    displayTasks();
  });
}