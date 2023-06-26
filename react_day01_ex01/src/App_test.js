import Hello from './Hello';
import MyLink from './MyLink';
import MyTbl from './MyTbl';

import TodoList from './TodoList';

const todoList = [
  {seq:1, work:'스프링부트 공부', done:false},
  {seq:1, work:'친구 만나기', done:false},
  {seq:1, work:'탁구치기', done:false}
];

const myArray = [
  {seq:1, name:'apple', price:1000},
  {seq:2, name:'banana', price:2000},
  {seq:3, name:'orange', price:1500},
  {seq:4, name:'mango', price:3000},
  {seq:5, name:'kiwi', price:500}
];

function App() {
  return (
    <>
      <h1>Hello Comstudy world!</h1>
      <Hello />
      <hr/>
      <MyLink />
      <hr/>
      <MyTbl myArray={myArray} data1="aaa" data2="bbb" />
      <hr/>
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;