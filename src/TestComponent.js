import React from 'react';

function TestComponent() {
  return (
    <div style={{ 
      backgroundColor: 'red', 
      color: 'white', 
      padding: '20px', 
      fontSize: '24px',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      Test Component - If you can see this, React is working!
    </div>
  );
}

export default TestComponent;