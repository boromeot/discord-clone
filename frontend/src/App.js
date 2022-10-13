import './App.css';
import { useEffect, useState } from "react"; 

function App() {
  // eslint-disable-next-line
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/Users');
      const data = await res.json();
      setUsers(data);
    })();
  }, []);

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
    </div>
  );
}

export default App;
