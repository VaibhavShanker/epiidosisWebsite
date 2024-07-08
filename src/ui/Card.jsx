// Card.js
import PropTypes from 'prop-types';

function Card({ imageSrc, altText, title }) {
  // Example content for each card
  const cardContent = {
    'Guidance': {
      content: 'Expert guidance, tailored strategies. Begin confidently with us on your financial journey toward success, wealth, stability, and prosperity. Achieve your dreams with our support.',
    },
    'Transparency': {
      content: 'Clear insights, integrity, and honesty in business. Trust us for transparency in every interaction, ensuring your peace of mind and confidence. We prioritize ethical practices and your best interests.',
    },
    'Independence': {
      content: 'Freedom to invest your way. Explore opportunities with confidence in our unwavering independence and commitment. Make informed decisions, leveraging our unbiased advice and support for your financial growth.',
    },
    'Support': {
      content: 'Dedicated assistance, exceptional service. Count on us for unwavering support, guiding you to financial prosperity. Our team is here to assist you at every step, ensuring your success and satisfaction.',
    },
    'Mission Statement': {
      content: 'The mission of our company is to provide innovative investment solutions and strategic guidance. Our goal is to deliver superior returns to investors. Also, we are committed to fostering economic growth in the communities we serve.',
    },
    'Vision Statement': {
      content: 'Our vision is to be recognized as a global leader in investment management. In addition to creating value for our investors and partners, we generate value for all stakeholders. By embracing innovation, integrity, and impact, we empower individuals and organizations to thrive.',
    },
    'Core Values': {
      content: 'We conduct ourselves with honesty, transparency, and ethical integrity in all aspects of our business. We hold ourselves accountable to the highest standards of professionalism and adhere to the principles of fairness.',
    },
  };

  // Retrieve content based on title
  const { content } = cardContent[title];

  return (
    <div
      className="relative md:max-w-[25rem] md:w-[-5%] md:justify-center overflow-hidden border shadow-2xl bg-white z-10 flex flex-col justify-end"
      style={{ width: "400px", height: "400px" }} // Adjust this size as needed
    >
      <div
        className="h-24 w-24 bg-gradient-to-br from-[#1FA0EB] to-[#125B85] rounded-full absolute top-[30px] left-1/2 transform -translate-x-1/2 flex items-center justify-center"
        style={{ padding: '8px' }} // Increase or decrease padding as needed
      >
        <img src={imageSrc} alt={altText} className="h-36 w-36 object-cover rounded-full" /> {/* Adjust height and width */}
      </div>
      <p
        className="text-blue-500 text-center mt-20 -mb-1 text-lg"
        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        {title}
      </p>
      <p className="text-gray-700 text-center mt-5">{content}</p>
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;