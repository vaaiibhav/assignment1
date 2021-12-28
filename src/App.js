import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./SocialCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://random-data-api.com/api/users/random_user?size=10");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setUsers(userData);
    })();
  }, []);
 
  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = users.filter(user => (`${user.first_name} ${user.last_name}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }
  
  
  return (
    <div className="App">
      <h1>User Profile</h1>
      <input className="search-box" onInput={filterCards} placeholder="Search..."/>
      <button className="btn-next" onClick={() => window.location.reload(false)}>Next 10</button>
      <div className="cards-container" >
    
      {users.map((user, index) => (
        <SocialCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
