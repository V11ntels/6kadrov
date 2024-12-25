import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DepartmentsVacanciesPage() {
  const [departments, setDepartments] = useState([]); // Список департаментов
  const [newDepartmentName, setNewDepartmentName] = useState(''); // Новое название департамента
  const [message, setMessage] = useState(''); // Сообщение об успехе или ошибке

  // Загрузка существующих департаментов
  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:3000/departments');
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
      setMessage('Error fetching departments. Check console for details.');
    }
  };

  const addDepartment = async () => {
    if (!newDepartmentName.trim()) {
      setMessage('Department name cannot be empty.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/departments', {
        department_name: newDepartmentName,
      });
  
      // Используем функцию обновления состояния, которая использует текущие данные в departments
      setDepartments((prevDepartments) => [...prevDepartments, response.data]);
  
      setNewDepartmentName('');
      setMessage('Department created successfully!');
    } catch (error) {
      console.error('Error creating department:', error);
      setMessage('Error creating department. Check console for details.');
    }
  };

  return (
    <div>
      <h1>Departments</h1>
      {message && <p style={{ color: message.includes('Error') ? 'red' : 'green' }}>{message}</p>}

      {/* Форма добавления нового департамента */}
      <div>
        <input
          type="text"
          placeholder="New Department Name"
          value={newDepartmentName}
          onChange={(e) => setNewDepartmentName(e.target.value)}
        />
        <button onClick={addDepartment}>Add Department</button>
      </div>

      {/* Список департаментов с ID */}
      <ul>
        {departments.map((department) => (
          <li key={department.department_id}>
            {department.department_name} (ID: {department.department_id})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DepartmentsVacanciesPage;
