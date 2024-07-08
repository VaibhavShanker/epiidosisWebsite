import PropTypes from 'prop-types';

const ValueCard = ({ title, description }) => {
  return (
    <div className="bg-[#E8F6FF] p-6 rounded-lg shadow-md" style={{ width: '500x', height: '330px', color: '#5F5D5E' }}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

ValueCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ValueCard;
