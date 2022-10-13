import './App.css';
import { useEffect, useState } from "react"; 

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");
 
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/Users');
      const data = await res.json();
      setUsers(data);
    })();
  }, []);

  const createUser = async () => {
    const res = await fetch('http://localhost:3001/User', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        age,
        username
      })
    });

    const data = await res.json();
    setUsers([...users, data]);
  };

  return (
    <div className="App">
      <div className='usersDisplay'>
        {users.map(user => {
          return (
            <div>
              <h1>name: {user.name}</h1>
              <h1>age: {user.age}</h1>
              <h1>username: {user.username}</h1>
            </div>
          )
        })}
      </div>
      <div>
        <input type='text' placeholder='Name...' onChange={e => {setName(e.target.value)}}/>
        <input type='text' placeholder='Age...' onChange={e => {setAge(e.target.value)}}/>
        <input type='text' placeholder='Username...' onChange={e => {setUsername(e.target.value)}}/>
        <button onClick={createUser}> Create User </button> 
      </div>
    </div>
  );
}

export default App;
