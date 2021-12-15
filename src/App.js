import react, {useState, useEffect, useMemo, useCallback} from "react";
import List from "./List";

const initialUsers = [
  {id:1, name:'Luis'},
  {id:2, name:'María'}
]



function App() {

  

  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("")


  useEffect( () => {
    //console.log("App render");
  });

  const printUsers = useCallback(() => {
    console.log('Usuarios cambiaron', users);
  }, [users]);

  useEffect(() => {
    printUsers();
  }, [users, printUsers]);

  const handleAdd = () => {
    const newUser = {id:Date.now(), name:text}
    setUsers([...users, newUser]);
  }

  const handleSearch = () => {
    setSearch(text);
  }

  const handleDelete = useCallback(
    (userId) => {
      setUsers(users.filter((user) => user.id !== userId));
    },[users]);

  const filteredUsers = useMemo( () => users.filter(user =>{
    //user.name.toLowerCase().includes(text.toLowerCase())
      //console.log('Filter Proccess');
      return user.name.toLowerCase().includes(search.toLowerCase())
  }), [search, users] );


  return (
    <div className="App">
      <h1>App</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <button onClick={handleAdd}>Agregar</button>
      <hr />
      <List users={filteredUsers} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
