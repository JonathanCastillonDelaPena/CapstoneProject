import React, { useState, useEffect } from "react";
import serverURI from "./dbServerURI";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/userdata") // assuming this is your API endpoint
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Verified</th>
            <th>Image Public ID</th>
            <th>Image URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.user_id}>
              <td>{user.user_id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.verified}</td>
              <td>{user.image_public_id}</td>
              <td>{user.image_url}</td>
              <td>
                <button onClick={() => handleUserClick(user)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <p>User ID: {selectedUser.user_id}</p>
          <p>First Name: {selectedUser.first_name}</p>
          <p>Last Name: {selectedUser.last_name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Gender: {selectedUser.gender}</p>
          <p>Verified: {selectedUser.verified}</p>
          <p>Image Public ID: {selectedUser.image_public_id}</p>
          <p>Image URL: {selectedUser.image_url}</p>
        </div>
      )}
    </div>
  );
}

export default UserTable;
