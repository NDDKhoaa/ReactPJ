import React, { useState, useEffect } from 'react';

const MemberManagement = () => {
  const [members, setMembers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    username: '',
    password: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedMembers = localStorage.getItem('members');
    if (storedMembers) {
      setMembers(JSON.parse(storedMembers));
    }
  }, []);

  useEffect(() => {
    if (members.length !== 0) {
      localStorage.setItem('members', JSON.stringify(members));
    }
  }, [members]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedMembers = members.map((member, index) =>
        index === editIndex ? formData : member
      );
      setMembers(updatedMembers);
      setEditIndex(null);
    } else {
      setMembers((prev) => [...prev, formData]);
    }
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      username: '',
      password: '',
    });
  };

  const handleEdit = (index) => {
    setFormData(members[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
  };

  return (
    <div>
      <h1>Member Account Management</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{editIndex !== null ? 'Update' : 'Save'}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.phone}</td>
              <td>{member.email}</td>
              <td>{member.address}</td>
              <td>{member.username}</td>
              <td>
                <div className="actions">
                  <button onClick={() => handleEdit(index)}>Update</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberManagement;