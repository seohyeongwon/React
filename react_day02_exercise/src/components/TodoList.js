import Item from './Item';

export default function TodoList({todoList, deleteItem, updateItem}) {
  var list = todoList.map(function(todo, idx) {
    return <Item key={idx} item={todo} deleteItem={deleteItem} updateItem={updateItem} />
  });
  return (
    <>
      <ul>{list}</ul>
    </>
  );
}