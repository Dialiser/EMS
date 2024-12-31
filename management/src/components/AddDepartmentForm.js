 import React, { useState } from 'react';

const AddDepartmentForm = ({ onAddDepartment }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddDepartment({ name, description });
    setName('');
    setDescription('');
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
      <h3 style={{ marginBottom: '15px' }}>Add Department</h3>
      <input
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        type="text"
        placeholder="Department Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button style={{ width: '100%' }} type="submit">
        Add Department
      </button>
    </form>
  );
};

export default AddDepartmentForm;
