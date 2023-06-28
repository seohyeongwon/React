function LocalStorage() {
  //localStorage.setItem("lastname", "Smith");
  var lastname = localStorage.getItem("lastname");
  console.log(lastname);
  return (
    <>
      <div>(c) hw .</div>
    </>
  );
}

export default LocalStorage;