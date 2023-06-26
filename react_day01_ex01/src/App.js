import { useState } from 'react';
import Hello from './Hello';
import TodoList from './TodoList';



function App() {
  const [todoList, setTodoList] = useState([
    {seq:1, work:'스프링부트 공부', done:false},
    {seq:2, work:'친구 만나기', done:false},
    {seq:3, work:'탁구 치기', done:false},
    {seq:4, work:'React 복습', done:false},
    {seq:5, work:'과제하기', done:false},
    {seq:6, work:'프로젝트 준비', done:false}
  ]);
  const [seqCnt, setSeqCnt] = useState(7);
  
  function append(newWork) {
    var newitem = {
      seq : seqCnt,
      work : newWork,
      done : false 
    };
    setSeqCnt(seqCnt + 1);
    var list = [...todoList, newitem];
    setTodoList(list);
  }
  
  return (
    <>
      <Hello />
      <hr/>
      <TodoList todoList={todoList} appendFn={append}/>
    </>
  );
}

export default App;