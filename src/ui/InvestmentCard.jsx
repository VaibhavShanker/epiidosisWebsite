import PropTypes from 'prop-types';

const InvestmentCard = ({ title, subtitle, investment, ticketSize, roi, sector, image }) => {
  return (
    <div className="max-w-[700px] w-full h-[500px] p-8 border shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg mx-4">
      <div className="relative flex items-center mb-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1FA0EB] to-[#125B85] flex items-center justify-center mr-8">
          <img src={image} alt="icon" className="w-12 h-12" />
        </div>
        <div>
          <h6 className="font-serif text-3xl font-bold leading-tight tracking-wide text-left" style={{ fontFamily: 'Inria Serif', color: '#5F5D5E' }}>
            {title}
          </h6>
          <p className="font-serif text-xl font-light leading-relaxed tracking-wide text-left" style={{ fontFamily: 'Inria Serif', color: '#5F5D5E' }}>
            {subtitle}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <p className="font-serif text-lg font-bold leading-tight tracking-wide text-left" style={{ fontFamily: 'Inria Serif', color: '#5F5D5E' }}>
            <span className="pr-2">|</span> Total Investment Required
          </p>
          <h6 className="text-2xl font-bold leading-tight tracking-wide text-left" style={{ fontFamily: 'Poppins', color: '#5F5D5E' }}>{investment}</h6>
        </div>
        <div>
          <p className="font-serif text-lg font-bold leading-tight tracking-wide text-left" style={{ fontFamily: 'Inria Serif', color: '#5F5D5E' }}>
            <span className="pr-2">|</span> Ticket Size
          </p>
          <h6 className="text-2xl font-bold leading-tight tracking-wide text-left" style={{ fontFamily: 'Poppins', color: '#5F5D5E' }}>{ticketSize}</h6>
        </div>
        <div>
          <p className="font-serif text-lg font-bold leading-tight tracking-wide text-left" style={{ fontFamily: 'Inria Serif', color: '#5F5D5E' }}>
            <span className="pr-2">|</span> ROI (%)
          </p>
          <h6 className="text-2xl font-bold leading-tight tracking-wide text-left" style={{ fontFamily: 'Poppins', color: '#5F5D5E' }}>{roi}</h6>
        </div>
        <div>
          <p className="font-serif text-lg font-bold leading-tight tracking-wide text-left" style={{ fontFamily: 'Inria Serif', color: '#5F5D5E' }}>
            <span className="pr-2">|</span> Sector
          </p>
          <h6 className="text-2xl font-bold leading-tight tracking-wide text-left" style={{ fontFamily: 'Poppins', color: '#5F5D5E' }}>{sector}</h6>
        </div>
      </div>
      <button
  className="w-20 py-4 mt-8 text-white transition-colors duration-300"
  style={{
    background: 'linear-gradient(104.32deg, #339FDE 3.51%, #1C5678 90.88%)',
    width: '25%',
  }}
>
  Invest now
</button>
    </div>
  );
};

InvestmentCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  investment: PropTypes.string.isRequired,
  ticketSize: PropTypes.string.isRequired,
  roi: PropTypes.string.isRequired,
  sector: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default InvestmentCard;
