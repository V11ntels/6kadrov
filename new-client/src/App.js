import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateEmployeePage from './pages/CreateEmployeePage';
import DepartmentsVacanciesPage from './pages/DepartmentsVacanciesPage';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage';
import Header from './components/header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-employee" element={<CreateEmployeePage />} />
        <Route path="/departments-vacancies" element={<DepartmentsVacanciesPage />} />
        <Route path="/employee/:id" element={<EmployeeDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;