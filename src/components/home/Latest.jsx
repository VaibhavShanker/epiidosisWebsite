const Latest = () => {
    return (
      <div className="blue-div" style={{ 
        background: 'linear-gradient(90deg, #1E8DCD 0%, #0F4767 96.77%)',
        height: '260px',
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '2.5rem', // Adjust the font size here (example: 2rem)
        textAlign: 'center', // Center align text horizontally
      }}>
        <p style={{ margin: 0 }}>Latest Updates</p>
        
      </div>
    );
  };
  
  export default Latest;
  