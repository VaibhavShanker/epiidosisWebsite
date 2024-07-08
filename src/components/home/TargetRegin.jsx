import SampleImage from '../../../public/img/home/hero-2 1.jpg'; // Adjust the path as per your project structure

const TargetRegin = () => {
  // Calculate the width of the hr element based on the text content of the heading
  const hrWidth = `${Math.ceil(50)}%`; // Adjust percentage as per your requirement

  return (
    <div className="blue-div" style={{ 
      display: 'flex',
      flexDirection: 'column', // Stack items vertically
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFFFFF',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontSize: '2.5rem', // Adjust the font size here (example: 2rem)
      textAlign: 'center', // Center align text horizontally
      minHeight: '50vh', // Minimum height of viewport
    }}>
      <h3 className="font-serif text-5xl font-bold leading-tight text-gray-800 mb-6">
        Targeted Region
      </h3>
      <hr className="w-full my-4 border-t-2 border-gray-800 mx-auto"
          style={{ width: hrWidth }} />
      <div className="relative w-full h-screen overflow-hidden"
           style={{ backgroundImage: `url(${SampleImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
    </div>
  );
};

export default TargetRegin;
