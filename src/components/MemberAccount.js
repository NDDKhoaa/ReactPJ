import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const MemberManagement = () => {
  const [members, setMembers] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    username: '',
    password: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [errorPhone, setErrorPhone] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorUsername, setErrorUsername] = useState('');

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
    setErrorPhone('');
    setErrorEmail('');
    setErrorUsername('');

    const isPhoneDuplicate = members.some((member) =>
      (member.phone === formData.phone && member.id !== formData.id)
    );
    const isEmailDuplicate = members.some((member) =>
      (member.email === formData.email && member.id !== formData.id)
    );
    const isUsernameDuplicate = members.some((member) =>
      (member.username === formData.username && member.id !== formData.id)
    );

    let hasError = false;

    if (isPhoneDuplicate) {
      setErrorPhone('Phone number already exists.');
      hasError = true;
    }

    if (isEmailDuplicate) {
      setErrorEmail('Email already exists.');
      hasError = true;
    }

    if (isUsernameDuplicate) {
      setErrorUsername('Username already exists.');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    if (editIndex !== null) {
      const updatedMembers = members.map((member) =>
        member.id === formData.id ? formData : member
      );
      setMembers(updatedMembers);
      setEditIndex(null);
    } else {
      setMembers((prev) => [...prev, { ...formData, id: uuidv4() }]);
    }
    setFormData({
      id: '',
      name: '',
      phone: '',
      email: '',
      address: '',
      username: '',
      password: '',
    });
  };

  const handleEdit = (id) => {
    const memberToEdit = members.find((member) => member.id === id);
    setFormData(memberToEdit);
    setEditIndex(id);
  };

  const handleDelete = (id) => {
    const updatedMembers = members.filter((member) => member.id !== id);
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
          />        </div>
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
      {errorPhone && <p style={{ color: 'red' }}>{errorPhone}</p>}
      {errorEmail && <p style={{ color: 'red' }}>{errorEmail}</p>}
      {errorUsername && <p style={{ color: 'red' }}>{errorUsername}</p>}
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
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.phone}</td>
              <td>{member.email}</td>
              <td>{member.address}</td>
              <td>{member.username}</td>
              <td>
                <div className="actions">
                  <button onClick={() => handleEdit(member.id)}>Update</button>
                  <button onClick={() => handleDelete(member.id)}>Delete</button>
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