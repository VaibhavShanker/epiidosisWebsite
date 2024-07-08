import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";

const OurClientService = () => {
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
      <div className="flex justify-center mt-4 mb-5"> {/* Added margin-top for the button */}
        <ButtonPrimaryUi style={{ fontSize: '0.9rem', padding: '8px 16px' }}>Explore Now  <span style={{ marginLeft: '5px' }}>&rarr;</span>
          </ButtonPrimaryUi> {/* Adjusted button size */}
      </div>
    </div>
  );
};

export default OurClientService;
