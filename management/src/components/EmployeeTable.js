 import React from 'react';

const EmployeeTable = ({ employees }) => {
  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
      <h3 style={{ marginBottom: '15px' }}>Employee Details</h3>
      <table
        border="1"
        style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
