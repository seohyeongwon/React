import { useState } from "react";

function delete_list(){
  var th = this;

  this.parents("li").remove();
  
}

function TodoList({todoList, appendFn}) {
  // useState 훅 사용
  var [newWork, setNewWork] = useState("점심 먹고 낮잠 자기");

  var list = todoList.map((item, i) => {
    return <li key={i}><input type="checkbox" />{item.seq} : {item.work} ({item.done?'O':'X'}) 
    <button>수정</button> 
    
    <button type="button" onclick="delete_list(this);">삭제</button>
    
    </li>
  });


  return (<>
    <h2>Todo List</h2>
    할일 : <input type="text" value={newWork} onChange={function(e) {
      // input의 데이터가 바뀔때 마다 변수에 즉시 저장 -> value도 바뀐다.
      // 전역 변수의 형식은 useState 훅을 이용해서 선언 해야 한다.
      // state의 값은 setter 함수를 이용해서 변경 해야 한다.
      setNewWork(e.target.value);
    }}/> <button onClick={function(event) {
      // 버튼을 클릭하면 state의 값을 사용.
      // 추가 버튼을 누르면 새 할 일을 App.js의 todoList 배열에 추가해야 한다.
      appendFn(newWork);
    }}>추가</button>
    <ul>{ list }</ul>
  </>);
}

export default TodoList;