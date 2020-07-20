'use strict';
{
  let id = 0;
  const tasks = [];
  const tbody = document.querySelector('tbody')
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
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    for (let i = 0; i < tasks.length; i++) {
      const tr = document.createElement('tr');  
      // 一列目
      const tdId = document.createElement('td');
      tdId.textContent = tasks[i]['id'];
      tr.appendChild(tdId);
      // 二列目
      const tdTask = document.createElement('td');
      tdTask.textContent = tasks[i]['comment'];
      tr.appendChild(tdTask);
      // 三列目
      const tdStatus = document.createElement('td');
      const button1 = document.createElement('button');
      button1.textContent = tasks[i]['status'];
      tdStatus.appendChild(button1);
      tr.appendChild(tdStatus);
      // 四列目
      const tdDelete = document.createElement('td');
      const button2 = document.createElement('button');
      button2.textContent = '削除';
      tdDelete.appendChild(button2)
      tr.appendChild(tdDelete);
      tbody.appendChild(tr);
    }
  }
  document.querySelector('button').addEventListener('click', () => {
    addTasks();
    displayTasks();
    id++;
  });
}