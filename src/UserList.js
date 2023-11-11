import React, { useEffect, useState } from 'react'
import axios from 'axios';
function UserList () {
    const [arr, setarr] = useState([])
  // Fetch users when the component mounts
useEffect(() => {
axios.get("https://jsonplaceholder.typicode.com/users")
.then(function(response){
   // handle success 
   console.log(response.data); 
   setarr=response.data})

   .catch(function(error) { 
   // handle error 
   console.log(error);
   })

}, [])

  return (
    <div>
      <table>
        <tr>
          <th>name</th>
          <th>username</th>
          <th>email</th>
        </tr>
        {arr.map((el) => (
          <tr>
            <td>{el.name}</td>
            <td>{el.username}</td>
            <td>{el.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default UserList
