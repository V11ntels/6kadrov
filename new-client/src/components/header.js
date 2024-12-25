import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/create-employee" style={styles.link}>
          Create Employee
        </Link>
        <Link to="/departments-vacancies" style={styles.link}>
          Create Department
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Header;