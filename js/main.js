'use strict';
{
  const tasks = [];
  const tbody = document.querySelector('tbody')
  let addTasks = () => {
    const taskTextBox = document.getElementById('text');
    let task = {
      'id':'',
      'comment': taskTextBox.value,
      'status': '作業中',
      'delete': '削除',
    };
    tasks.push(task);
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].id = i;
    };
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
      button2.textContent = tasks[i]['delete'];
      button2.classList.add('delete');
      tdDelete.appendChild(button2);
      tr.appendChild(tdDelete);
      tbody.appendChild(tr);
    }
    const deletLists = Array.from(document.querySelectorAll('button.delete'));
    deletLists.forEach(deletList => {
      deletList.addEventListener('click', e => {
        const targetTr = e.target.parentNode.parentNode;
        const targetId = Number(targetTr.firstChild.textContent);
          tasks.splice(targetId,1);
          for (let i = 0; i < tasks.length; i++) {
            tasks[i].id = i;
          };
        displayTasks();
      });
    });
  }
  document.querySelector('button').addEventListener('click', () => {
    addTasks();
    displayTasks();
  });
}