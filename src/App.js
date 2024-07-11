import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
      </header>
    </div>
  );
}


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }
  )


  return (
    <div>
      <h1>Dynamic users:{users.length}</h1>
      <h1>List:</h1>
      <ul>
        {
          users.map(user =>
            <li>{user.id}</li>
          )
        }
        <br /><br />
        {
          users.map(user =>
            <li>{user.name}</li>
          )
        }
        <br /><br />
        {
          users.map(user =>
            <li>{user.email}</li>
          )
        }
      </ul>
    </div>
  )
}
export default App;
