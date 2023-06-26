function MyTbl({myArray,data1,data2}) {
  //----------------요위에 props 넣을 수도 잇다
  // var myArray = props['myArray'];
  // var data1 = props['data1'];
  // var data2 = props['data2'];
  // 구조분해 할당
  //var {myArray,data1,data2} = props;
  const myList = myArray.map(function (item) { 
    return (<tr>
      <td>{item.seq}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{data1}</td>
      <td>{data2}</td>
    </tr>);
  });

  return (<table border="1">{myList}</table>);
}

export default MyTbl;