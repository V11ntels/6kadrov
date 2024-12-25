import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateEmployeePage() {
  const [employeeData, setEmployeeData] = useState({
    first_name: '',
    last_name: '',
    middle_name: '',
    birth_date: '',
    hire_date: '',
    position_id: '', // поле для ввода позиции вручную
    department_id: '',
    current_status: '',
  });
  const [departments, setDepartments] = useState([]);
  const [message, setMessage] = useState('');

  // Загрузка списка департаментов
  useEffect(() => {
    async function fetchDepartments() {
      try {
        const response = await axios.get('http://localhost:3000/departments');
        if (response.data && response.data.length > 0) {
          setDepartments(response.data);  // Устанавливаем данные департаментов
        } else {
          console.log('No departments found');
        }
      } catch (error) {
        console.error('Error fetching departments:', error);
        setMessage('Error fetching departments. Please check console.');
      }
    }
    fetchDepartments();
  }, []);  // Пустой массив зависимостей, чтобы загрузка происходила только один раз

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        ...employeeData,
        birth_date: new Date(employeeData.birth_date),
        hire_date: new Date(employeeData.hire_date),
        department_id: parseInt(employeeData.department_id, 10),
      };
      const response = await axios.post('http://localhost:3000/employees', formattedData);
      console.log('Employee created successfully:', response.data);
      setMessage('Employee created successfully!');
    } catch (error) {
      console.error('Error creating employee:', error);
      setMessage('Error creating employee. Check console for details.');
    }
  };

  return (
    <div>
      <h1>Create Employee</h1>
      {message && <p style={{ color: message.includes('Error') ? 'red' : 'green' }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={employeeData.first_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={employeeData.last_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="middle_name"
          placeholder="Middle Name"
          value={employeeData.middle_name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="birth_date"
          value={employeeData.birth_date}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="hire_date"
          value={employeeData.hire_date}
          onChange={handleChange}
          required
        />
        
        {/* Выпадающий список для департамента */}
        <select
          name="department_id"
          value={employeeData.department_id}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          {departments.length > 0 ? (
            departments.map((department) => (
              <option key={department.department_id} value={department.department_id}>
                {department.department_name}
              </option>
            ))
          ) : (
            <option disabled>No departments available</option>
          )}
        </select>

        {/* Текстовое поле для позиции */}
        <input
          type="text"
          name="position_id"
          placeholder="Position_id"
          value={employeeData.position_id}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="current_status"
          placeholder="Current Status"
          value={employeeData.current_status}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Employee</button>
      </form>
    </div>
  );
}

export default CreateEmployeePage;
