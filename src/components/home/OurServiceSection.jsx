import fundingSolution from "/img/home/19198424SX[1] 1.png";

const OurServiceSection = () => {
  return (
    
      <div className="container sm:mt-[80rem] md:mt-[35rem] lg:mt-[15rem] 2xl:mt-[5rem] mb-0 mx-auto flex flex-col items-center justify-center ">
        <div className="flex w-full h-full">
          <div className="left-div" style={{ width: '50%', height: '100%' }}>
            <img src={fundingSolution} alt="Funding Solution" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
          </div>
          <div className="right-div flex-1 bg-white flex flex-col justify-center items-start text-left p-6">
            <h2 className="text-2xl md:text-4xl font-semibold font-inria">
              Your Reliable Guide in Financial Navigation
            </h2>
            <div className="flex items-start mt-4">
              <div className="w-3 h-full bg-blue-500 mr-4"></div>
              <p className="text-lg md:text-xl">
                At Epiidosis Investments LLC, we empower individuals and organizations to achieve their financial goals by providing innovative investment solutions, strategic guidance, and unparalleled service.
              </p>
            </div>
            <p className="mt-4 text-lg md:text-xl">
              We are committed to delivering superior returns for our investors, fostering economic growth in the communities we serve, and upholding the highest standards of integrity, transparency, and professionalism in all our endeavors.
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default OurServiceSection;
