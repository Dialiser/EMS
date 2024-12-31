 import React from 'react';

const FilterEmployee = ({ filters, onFilterChange }) => {
  return (
    <div
      style={{
        margin: '20px 0',
        padding: '10px',
        border: '1px solid black',
      }}
    >
      <h3 style={{ marginBottom: '15px' }}>Filter Employees</h3>
      <input
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        type="text"
        placeholder="Filter by Name"
        value={filters.name}
        onChange={(e) => onFilterChange('name', e.target.value)}
      />
      <input
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        type="text"
        placeholder="Filter by Department"
        value={filters.department}
        onChange={(e) => onFilterChange('department', e.target.value)}
      />
    </div>
  );
};

export default FilterEmployee;

