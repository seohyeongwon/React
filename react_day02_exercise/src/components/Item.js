import { useState } from 'react';
import './Item.css'

export default function Item({item, deleteItem, updateItem}) {
  var isThrough = "none";
  var isChecked = "";
  if(item.done) {
    isThrough = "line-through";
    isChecked = "checked";
  }
  const [modifyMode, setModifyMode] = useState("modifyModeFalse");
  const [titleValue, setTitleValue] = useState("");
  return (
    <>
      <li>
        <input type="checkbox" checked={isChecked} onChange={(e)=>{
          updateItem({seq:item.seq, title:item.title, done: !item.done});
        }} />
          <input value={titleValue===""?item.title:titleValue}  
          onKeyUp={(e)=>{
           if(e.code==="Enter"){
            updateItem({seq:item.seq, title:titleValue, done: item.done});
            e.target.blur();
           }
          }} 
          onChange={(e)=>{
            setTitleValue(e.target.value);
          }} 
          onBlur={(e)=>{
            setModifyMode("modifyModeFalse");
            updateItem({seq:item.seq, title:titleValue, done: item.done});
            setTitleValue("");
          }} 
          onFocus={(e)=>{
            setModifyMode("modifyMode");
            setTitleValue(e.target.value);
          }} style={{textDecoration:isThrough}} className={modifyMode} />
        <button onClick={() => {
            deleteItem(item.seq);
          }
        }>삭제</button>
      </li>
    </>
  );
}