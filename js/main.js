'use strict';
{
  let id = 0;
  const tasks = [];
  let addTasks = () => {
    const taskTextBox = document.getElementById('text');
    let task = {
      'id': id,
      'comment': taskTextBox.value,
      'status': '作業中'
    };
    tasks.push(task);
    taskTextBox.value = '';
  }
  let displayTasks = () => {
    const tr = document.createElement('tr');  
    // 一列目
    const tdId = document.createElement('td');
    tdId.textContent = tasks[id]['id'];
    tr.appendChild(tdId);
    // 二列目
    const tdTask = document.createElement('td');
    tdTask.textContent = tasks[id]['comment'];
    tr.appendChild(tdTask);
    // 三列目
    const tdStatus = document.createElement('td');
    const button1 = document.createElement('button');
    // tasks[id]['status'] = '作業中';
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
    console.log(tasks);
  });
}