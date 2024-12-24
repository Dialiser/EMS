import React from 'react';

const FilterEmployee = ({ filters, onFilterChange }) => {
  return (
    <div>
      <h3>Filter Employees</h3>
      <input
        type="text"
        placeholder="Filter by Name"
        value={filters.name}
        onChange={(e) => onFilterChange('name', e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by Department"
        value={filters.department}
        onChange={(e) => onFilterChange('department', e.target.value)}
      />
    </div>
  );
};

export default FilterEmployee;
