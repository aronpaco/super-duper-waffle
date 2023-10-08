// UserList.js
import React, { useState, useEffect } from "react"
import axios from "axios"

const UserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Use Axios to fetch data from JSONPlaceholder
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setUsers(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching data:", error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
