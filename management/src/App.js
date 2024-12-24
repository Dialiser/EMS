import React, { useState } from 'react';
import AddDepartmentForm from '../src/components/AddDepartmentForm';
import AddEmployeeForm from '../src/components/AddEmployeeForm';
import FilterEmployee from '../src/components/FilterEmployee';
import EmployeeTable from '../src/components/EmployeeTable';

const App = () => {
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [filters, setFilters] = useState({ name: '', department: '' });

  const addDepartment = (dept) => {
    setDepartments([...departments, dept]);
  };

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    employee.department.toLowerCase().includes(filters.department.toLowerCase())
  );

  return (
    <div>
      <AddDepartmentForm onAddDepartment={addDepartment} />
      <AddEmployeeForm departments={departments} onAddEmployee={addEmployee} />
      <FilterEmployee filters={filters} onFilterChange={handleFilterChange} />
      <EmployeeTable employees={filteredEmployees} />
    </div>
  );
};

export default App;
