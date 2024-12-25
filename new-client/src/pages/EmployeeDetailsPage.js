import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EmployeeDetailsPage() {
  const { id } = useParams(); // Получаем ID сотрудника из URL
  const [employee, setEmployee] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate(); // Навигация для перенаправления после удаления

  // Получение данных сотрудника
  useEffect(() => {
    axios.get(`http://localhost:3000/employees/${id}`)
      .then((response) => {
        setEmployee(response.data);
        setFormData(response.data); // Инициализируем форму данными сотрудника
      })
      .catch((error) => console.error(error));
  }, [id]);

  // Удаление сотрудника
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/employees/${id}`);
      alert('Employee deleted successfully');
      navigate('/'); // Перенаправляем на главную страницу
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Failed to delete employee');
    }
  };

  // Сохранение изменений
  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3000/employees/${id}`, formData);
      alert('Employee updated successfully');
      setEditMode(false); // Выход из режима редактирования
    } catch (error) {
      console.error('Error updating employee:', error);
      alert('Failed to update employee');
    }
  };

  // Обновление данных формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  if (!employee) return <div>Loading...</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{`${employee.last_name} ${employee.first_name} ${employee.middle_name}`}</h1>
      {editMode ? (
        <div style={styles.formContainer}>
          <label style={styles.label}>
            Birth Date: 
            <input
              type="date"
              name="birth_date"
              value={formData.birth_date || ''}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Hire Date: 
            <input
              type="date"
              name="hire_date"
              value={formData.hire_date || ''}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Department ID: 
            <input
              type="number"
              name="department_id"
              value={formData.department_id || ''}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Position ID: 
            <input
              type="number"
              name="position_id"
              value={formData.position_id || ''}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Status: 
            <input
              type="text"
              name="current_status"
              value={formData.current_status || ''}
              onChange={handleChange}
              style={styles.input}
            />
          </label>
          <div style={styles.buttonContainer}>
            <button onClick={handleSave} style={styles.saveButton}>Save</button>
            <button onClick={() => setEditMode(false)} style={styles.cancelButton}>Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <p>Birth Date: {new Date(employee.birth_date).toLocaleDateString()}</p>
          <p>Hire Date: {new Date(employee.hire_date).toLocaleDateString()}</p>
          <p>Department ID: {employee.department_id}</p>
          <p>Position ID: {employee.position_id}</p>
          <p>Status: {employee.current_status}</p>
          <div style={styles.buttonContainer}>
            <button onClick={() => setEditMode(true)} style={styles.editButton}>Edit</button>
            <button onClick={handleDelete} style={styles.deleteButton}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    maxWidth: '600px',
    margin: '0 auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  label: {
    fontSize: '1rem',
    color: '#333',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '5px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  saveButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  cancelButton: {
    padding: '10px 20px',
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  editButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  deleteButton: {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default EmployeeDetailsPage;
