import PropTypes from 'prop-types';
import image4 from '/img/home/32422 1.jpg';

const content = {
  'Renewable Energy': {
    title: 'Renewable Energy',
    part1: `In 2021, the renewable energy industry remained remarkably resilient. Rapid technology improvements and decreasing costs of renewable energy resources, along with the increased competitiveness of battery storage,`,
    part2: `have made renewables one of the most competitive energy sources in many areas. Epidlosis Investments Dubai is focused and has keen interest in developing and deploying investments in this key sector across the Globe.`
  },
  'Tourism & Hospitality': {
    title: 'Tourism & Hospitality',
    part1: 'Content will be available soon.',
    part2: ''
  },
  'Commercial': {
    title: 'Commercial',
    part1: 'Content will be available soon.',
    part2: ''
  },
  'Agriculture': {
    title: 'Agriculture',
    part1: 'Content will be available soon.',
    part2: ''
  },
  'Industry': {
    title: 'Industry',
    part1: 'Content will be available soon.',
    part2: ''
  },
  'Education': {
    title: 'Education',
    part1: 'Content will be available soon.',
    part2: ''
  },
  'Healthcare': {
    title: 'Healthcare',
    part1: 'Content will be available soon.',
    part2: ''
  },
};

const TabContent = ({ selectedTab }) => {
  const { title, part1, part2 } = content[selectedTab];

  return (
    <div className="p-6 flex">
      <div className="w-1/2">
        {/* Example placeholder for image or other content */}
        <div className="h-64 flex items-center justify-center">
          {/* Replace with actual image */}
          <img
            src={image4}
            alt={title}
            className="object-cover w-3/4 h-full float-left"
            style={{ maxWidth: '70%' , marginLeft:'30%'}} // Adjusted width to 70%
          />
        </div>
      </div>
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-md ml-4 relative -top-16 -left-16 mt-20">
        <h2 className="text-xl font-semibold mb-4 text-center" style={{ color: '#5F5D5E' }}>{title}</h2>
        <div className="flex text-gray-700" style={{ color: '#5F5D5E' }}>
          <div className="w-1/2 pr-2">{part1}</div>
          <div className="w-1/2 pl-2">{part2}</div>
        </div>
      </div>
    </div>
  );
};

TabContent.propTypes = {
  selectedTab: PropTypes.string.isRequired,
};

export default TabContent;
