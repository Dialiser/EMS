import React, { useState } from 'react';

const AddEmployeeForm = ({ departments, onAddEmployee }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee({ name, department, address });
    setName('');
    setDepartment('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>
      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      >
        <option value="" disabled>
          Select Department
        </option>
        {departments.map((dept) => (
          <option key={dept.name} value={dept.name}>
            {dept.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;
