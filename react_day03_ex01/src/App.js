

import Input from './com/Input';
import TodoList from './com/TodoList';
import { useEffect, useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([
    { no: 1, title: 'aaaaaaa', done: false },
    { no: 2, title: 'asd', done: true },
    { no: 3, title: 'zxc', done: false },
    { no: 4, title: 'qaz', done: true },
    { no: 5, title: 'wsx', done: false }
  ]);
  const [noCnt, setNoCnt] = useState(6);


  useEffect(function () {
    const localStorageData = localStorage.getItem('todoListData');
    if (localStorageData) {
      let localStorageObj = JSON.parse(localStorageData);
      setTodoList(localStorageObj.todoList);
      setNoCnt(localStorageObj.noCnt);
    }
  }, []);

  function saveLocalStorage(newList, newNo) {
    if (newList) {
      let localStorageObj = { noCnt: newNo, todoList: newList }
      localStorage.setItem("todoListData", JSON.stringify(localStorageObj));
    }
  }



  function appendItem(title) {
    var item = {
      no: noCnt,
      title: title,
      done: false
    };

    var newList = [...todoList, item];
    setTodoList(newList);
    var newCnt = noCnt + 1
    setNoCnt(newCnt);

    saveLocalStorage(newList, newCnt);

  }


  function updateItem(newItem) {
    var newList = [...todoList];
    var idx = newList.findIndex(function (item) {
      return item.no === newItem.no;
    });
    if (idx >= 0) {
      newList[idx] = newItem;
      setTodoList(newList);
      console.log(newList, newItem, idx);      saveLocalStorage(newList, noCnt);
    }
  }


  function deleteItem(no) {
    console.log("del:" + no);
    var newList = [...todoList];

    var idx = newList.findIndex(function (item) {
      return item.no === no;
    });

    if (idx >= 0) {
      newList.splice(idx, 1);
    }
    setTodoList(newList);
    saveLocalStorage(newList, noCnt);


  }



  return (
    <>
      <h1>won's</h1>
      <hr />
      <Input appendItem={appendItem} />
      <hr />
      <TodoList todoList={todoList} deleteItem={deleteItem} updateItem={updateItem} />

    </>
  );
}

export default App;
