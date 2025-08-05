import React from 'react';

const NotFound = () => {
  const styles = {
    errorContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    errorCode: {
      fontSize: '72px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    errorMessage: {
      fontSize: '36px',
      marginBottom: '10px',
    },
    errorDescription: {
      fontSize: '18px',
    },
  };

  return (
    <div style={styles.errorContainer}>
      <div style={styles.errorCode}>404</div>
      <div style={styles.errorMessage}>Page Not Found</div>
      <div style={styles.errorDescription}>Sorry, the page you are looking for does not exist.</div>
    </div>
  );
};

export default NotFound;