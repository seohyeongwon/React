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
          console.log(item.no);
          updateItem({no:item.no, title:item.title, done: !item.done});
        }} />
          <input value={titleValue===""?item.title:titleValue}  
          onKeyUp={(e)=>{
           if(e.code==="Enter"){
            updateItem({no:item.no, title:titleValue, done: item.done});
            e.target.blur();
           }
          }} 
          onChange={(e)=>{
            setTitleValue(e.target.value);
          }} 
          onBlur={(e)=>{
            setModifyMode("modifyModeFalse");
            updateItem({no:item.no, title:titleValue, done: item.done});
            setTitleValue("");
          }} 
          onFocus={(e)=>{
            setModifyMode("modifyMode");
            setTitleValue(e.target.value);
          }} style={{textDecoration:isThrough}} className={modifyMode} />
        <button onClick={() => {
            deleteItem(item.no);
          }
        }>del</button>
      </li>
    </>
  );
}