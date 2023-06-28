import { useState } from "react";

export default function Input({ appendItem }) {
  const [newWork, setNewWork] = useState("");
  return (
    <>
      새 일 :
      <input onChange={e => setNewWork(e.target.value)} value={newWork} />
      <button onClick={e => {
        if(newWork === "") {
          alert("내용을 입력하세요");
          e.target.previousSibling.focus();
          return;
        }
        appendItem(newWork);
      }}>추가</button>
    </>
  );
}
