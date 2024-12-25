import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeCard({ employee }) {
  const fullName = `${employee.last_name} ${employee.first_name} ${employee.middle_name}`;
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      <h2>{fullName}</h2>
      <p>Status: {employee.current_status}</p>
      <Link to={`/employee/${employee.employee_id}`}>View Details</Link>
    </div>
  );
}

export default EmployeeCard;