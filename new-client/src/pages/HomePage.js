import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from '../components/Pagination';
import './HomePage.css';

const HomePage = () => {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [query, setQuery] = useState(''); // Для хранения поискового запроса
  const [department, setDepartment] = useState(''); // Для хранения выбранного департамента
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Загрузка списка департаментов
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/departments');
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };
    fetchDepartments();
  }, []);

  // Загрузка сотрудников с фильтром
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const params = { q: query };

        // Добавляем фильтр по департаменту, если выбран
        if (department) {
          params.department = department;
        }

        const response = await axios.get('http://localhost:3000/employees/search', {
          params: params
        });

        setEmployees(response.data);
        setCurrentPage(1); // Сбрасываем на первую страницу после нового поиска
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, [query, department]); // Загрузка сотрудников при изменении запроса или департамента

  // Handle page change
  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const handlePageChange = (page) => setCurrentPage(page);

  // Handle search input
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.search.value.trim());
  };

  // Handle department change
  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  // Calculate current employees to display
  const indexOfLastEmployee = currentPage * itemsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Employees</h1>
      
      {/* Search Form */}
      <form onSubmit={handleSearch} style={styles.searchForm}>
        <input
          type="text"
          name="search"
          placeholder="Search employees..."
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchButton}>Search</button>
      </form>

      {/* Department Filter */}
      <div style={styles.filter}>
        <select
          value={department}
          onChange={handleDepartmentChange}
          style={styles.filterSelect}
        >
          <option value="">Select Department</option>
          {departments.map((dep) => (
            <option key={dep.department_id} value={dep.department_id}>
              {dep.department_name}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.grid}>
        {currentEmployees.map((employee) => (
          <Link
            key={employee.employee_id}
            to={`/employee/${employee.employee_id}`}
            style={styles.cardLink}
          >
            <div style={styles.card}>
              <h3>{employee.first_name} {employee.last_name}</h3>
              <p>Position ID: {employee.position_id}</p>
            </div>
          </Link>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  searchForm: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  searchInput: {
    padding: '10px',
    fontSize: '1rem',
    width: '300px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  searchButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  filter: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  filterSelect: {
    padding: '10px',
    fontSize: '1rem',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    justifyItems: 'center',
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  card: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
};

export default HomePage;
