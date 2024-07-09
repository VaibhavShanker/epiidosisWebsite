import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";
import { useState } from 'react';

const OurClientService = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="blue-div"
      style={{
        background: 'linear-gradient(90deg, #1E8DCD 0%, #0F4767 96.77%)',
        paddingTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '2rem',
      }}
    >
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        Explore Investment Opportunities with us
      </p>
      <div style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Explore our comprehensive range of investment solutions tailored to your needs. From strategic portfolio management to innovative financial products, we offer expertise and flexibility to optimize your investment strategy. With a focus on performance, risk management, and client satisfaction, we deliver results that exceed expectations. Trust us to navigate the complexities of the financial landscape and help you achieve your investment objectives with confidence and clarity.
        </h3>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <ButtonPrimaryUi
          style={{
            fontSize: '1rem',
            padding: '10px 20px',
            minWidth: '120px',
            background: isHovered ? '#0F4767' : '#1E8DCD',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Explore Now <span style={{ marginLeft: '5px' }}>&rarr;</span>
        </ButtonPrimaryUi>
      </div>
    </div>
  );
};

export default OurClientService;
