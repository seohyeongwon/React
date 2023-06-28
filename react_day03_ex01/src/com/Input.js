import { useState } from "react";


export default function Input({ appendItem }) {
  const [newWork, setNewWork] = useState("");

  return (
    <>

      이번 주 할 일 :
      <input onChange={e => setNewWork(e.target.value)} value={newWork} />

      <button onClick={e => {
        if (newWork === "") {
          alert("뭐할끼고");
          e.target.previousSibling.focus();
          return;
        }
        appendItem(newWork);
      }}> 넣기 </button>


    </>
  );


}

