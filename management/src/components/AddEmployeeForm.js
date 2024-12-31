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
    <form
      onSubmit={handleSubmit}
      style={{
        border: '1px solid black',
        padding: '20px',
        margin: '10px',
        display: 'inline-block',
        width: '40%',
        verticalAlign: 'top',
      }}
    >
      <h3 style={{ marginBottom: '15px' }}>Add Employee</h3>
      <input
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
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
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <button style={{ width: '100%' }} type="submit">
        Add Employee
      </button>
    </form>
  );
};

export default AddEmployeeForm;
