import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  // Добавляем первые 4 страницы
  for (let i = 1; i <= Math.min(4, totalPages); i++) {
    pages.push(i);
  }

  // Добавляем многоточие, если есть пропуски
  if (totalPages > 4) {
    pages.push('...');
  }

  // Добавляем последние 2 страницы, если они не включены
  if (totalPages > 4) {
    pages.push(totalPages - 1, totalPages);
  }

  return (
    <div style={styles.pagination}>
      {pages.map((page, index) => (
        page === '...' ? (
          <span key={index} style={styles.ellipsis}>...</span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            style={{
              ...styles.button,
              backgroundColor: currentPage === page ? '#282c34' : '#61dafb',
              color: currentPage === page ? '#fff' : '#000',
            }}
          >
            {page}
          </button>
        )
      ))}
    </div>
  );
};

const styles = {
  pagination: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  button: {
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  ellipsis: {
    padding: '8px 12px',
    fontSize: '14px',
    color: '#000',
  },
};

export default Pagination;
