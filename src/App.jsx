
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  return (
    <>
      <h1>test-1 react practice</h1>
      <LoadUsers></LoadUsers>
    </>
  )
}

function LoadUsers() {

  const [Users,setUsers] = useState([]);

  useEffect( ()=>{
    fetch('https://jsonplaceholder.org/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return(
    <>
      <p>Show number of users this site: {Users.length}</p>
      {
        Users.map((user) => <ShowUser
        user={user}
        key={user.id}
        ></ShowUser>)
      }
    </>
  )
}

function ShowUser(props) {
  return(
    <>
      <h1>{props.user.firstname}</h1>
    </>
  )
}

export default App
