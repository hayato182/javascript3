'use strict';
{
  let id = -1;
  function createTr () {
    const tr = document.createElement('tr');
    // 一列目
    const td1 = document.createElement('td');
    td1.textContent = String(id + 1).padStart(3, '0');
    tr.appendChild(td1);
    id++;
    // 二列目
    const td2 = document.createElement('td');
    const text = document.getElementById('text');
    td2.textContent = text.value;
    tr.appendChild(td2);
    text.value = '';
    //三列目
    const td3 = document.createElement('td');
    const button1 = document.createElement('button');
    button1.textContent = "作業中";
    td3.appendChild(button1)
    tr.appendChild(td3);
    // 四列目
    const td4 = document.createElement('td');
    const button2 = document.createElement('button');
    button2.textContent = "削除";
    td4.appendChild(button2)
    tr.appendChild(td4);
    document.querySelector('tbody').appendChild(tr);
  }
  document.querySelector('button').addEventListener('click', () => {
    createTr();
  });
}