import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';

import imgage1 from "../../../public/img/fundraising/pngwing.com (4) 1.png"

const FinanceOptionCard = ({ title, description, features, buttonText, onButtonClick }) => {
  return (
    <div className="flex items-center bg-white p-6 shadow-md rounded-lg">
      <div className="w-1/2">
        <img src={imgage1} alt="Finance Options" className="w-full h-auto" />
      </div>
      <div className="w-1/2 pl-6">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: '#5F5D5E' }}>{title}</h2>
        <p className="text-gray-600 mb-4" style={{ color: '#5F5D5E' }}>{description}</p>
        <ul className="text-gray-600 mb-4 text-center" style={{ color: '#5F5D5E' }}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="flex items-center justify-center mb-4">
          <div className="flex-1 text-right pr-4 mt-10">
            <FeatureCard 
              title="Diverse Funding Solutions"
              description="Epidosis Investments offers a range of funding options including capital markets funds, private equity, and private debt platforms, tailored to meet diverse project requirements."
            />
          </div>
          <div className="relative flex items-center">
            <div className="h-full w-px bg-gray-300 mx-4"></div>
          </div>
          <div className="flex-1 text-right pl-4">
            <FeatureCard 
              title="Flexibility and Scalability"
              description="Our flexible investment options ensure scalability to support projects of varying sizes and stages."
            />
          </div>
        </div>
        <Button 
          className="bg-gradient-to-r from-[#1C5678] to-[#339FDE] px-4 py-2 text-white rounded-none" 
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="flex items-start text-left mb-4">
      <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 mt-1 flex-shrink-0"></span>
      <div>
        <h3 className="font-semibold" style={{ color: '#5F5D5E' }}>{title}</h3>
        <p className="text-gray-600" style={{ color: '#5F5D5E' }}>{description}</p>
      </div>
    </div>
  );
};

FinanceOptionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FinanceOptionCard;
