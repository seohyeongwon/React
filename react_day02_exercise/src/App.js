import { useState } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';


function App() {
  const [todoList, setTodoList] = useState([
    {seq:1, title:'리액트 주말 스터디 하기', done: false},
    {seq:2, title:'자바 복습하기', done: false},
    {seq:3, title:'Servlet/JSP 공부', done: true},
    {seq:4, title:'자바스크립트 복습하기', done: false},
    {seq:5, title:'파이널 프로젝트 구상', done: true}
  ]);
  const [seqCnt, setSeqCnt] = useState(6);

  function appendItem(title) {
    // todoList를 복제해서 수정하고 다시 setTodoList 한다.
    var item = {
      seq: seqCnt,
      title: title,
      done: false
    };
    var newList = [...todoList, item];
    setTodoList(newList);
    setSeqCnt(seqCnt+1);
  }

  function updateItem(newItem) {
    var newList = [...todoList];
    var idx = newList.findIndex(function(item) {
      return item.seq === newItem.seq;
    });
    if(idx >= 0) {
      // mode가 1면 done 변경, mode가 2이면 title 변경
      // newLlist[idx].done = !newLlist[idx].done;
      newList[idx] = newItem;
    }
    setTodoList(newList);
  }

  function deleteItem(seq) {
    console.log("deleteItem: " + seq);
    //var newList = todoList.filter(function(item) {
    //  return item.seq !== seq;
    //});
    var newList = [...todoList];
    var idx = newList.findIndex(function(item) {
      return item.seq == seq;
    });
    if(idx >= 0) {
      newList.splice(idx, 1);
    }
    setTodoList(newList);
  }

  return (
    <>
      <h1>Todo List</h1>
      <hr />
      <Input appendItem={appendItem} />
      <hr />
      <TodoList todoList={todoList} deleteItem={deleteItem} updateItem={updateItem} />
    </>
  );
}

export default App;
