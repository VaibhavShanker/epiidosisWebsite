import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";
import first from "/img/first.png";
import second from "/img/second.png";
import thirdservice from "/img/thirdservice.png";

const ServiceComponent = () => {
  return (
    <>
      <div className="bg-bgprimary p-5 md:mt-[rem]">
        <div className="container mx-auto flex md:justify-center flex-wrap gap-12 md:gap-28 mt-12 mb-12">
          <img alt="deal" src={first} className="md:h-[18rem]" />
          <div className="text-start text-wrap">
            <p className="text-2xl md:text-4xl text-center md:text-start font-semibold font-inria" style={{ color: '#5F5D5E' }}>
              Structured Finance
            </p>
            <p className="text-wrap font-inter text-justify text-md w-full md:w-[30rem] p-5 md:pt-3 md:p-0 text-gray-600 mt-2" style={{ color: '#5F5D5E' }}>
              Elevate your projects with Epiidosis Investments. Join our fundraising campaign today and gain access to diverse funding options. Our streamlined process ensures transparency and support at every step. Learn more about how we empower visionaries to bring their projects to life and achieve their goals.
            </p>
            <div className="flex gap-2 mt-2 pl-5 pr-5 md:pl-0 md:pr-0 md:pt-2">
              <ButtonPrimaryUi>Know More</ButtonPrimaryUi>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex md:justify-center flex-wrap md:gap-28 mt-12 mb-12">
        <div className="text-start text-wrap m-4">
          <p className="text-3xl md:text-4xl font-semibold font-inria text-center md:text-start" style={{ color: '#5F5D5E' }}>
            Asset Monetization
          </p>
          <p className="text-wrap text-md text-justify w-full md:w-[30rem] text-gray-600 mt-2 md:mt-3 font-inter p-5 md:p-0" style={{ color: '#5F5D5E' }}>
            Unlock the potential of your assets with Epiidosis Investments. Our structured asset monetization process aims to maximize value for asset owners across diverse sectors. Access capital, benefit from professional due diligence, and expand your reach globally. Trust Epiidosis for transparent, streamlined, and flexible asset monetization solutions.
          </p>
          <div className="flex gap-2 mt-2 pl-5 pr-5 md:pr-0 md:pl-0">
            <ButtonPrimaryUi>Know More</ButtonPrimaryUi>
          </div>
        </div>
        <img alt="deal" src={second} className="h-[18rem] p-5" />
      </div>
      <div className="bg-bgprimary p-5">
        <div className="container mx-auto md:justify-center flex flex-wrap md:gap-28 mt-12 mb-12">
          <img alt="deal" src={thirdservice} className="h-[18rem]" />
          <div className="text-start text-wrap">
            <p className="text-3xl md:text-4xl font-semibold font-inria text-center mt-5 md:text-start md:p-0" style={{ color: '#5F5D5E' }}>
              Loans Secured by Listed
            </p>
            <p className="text-3xl md:text-4xl font-semibold font-inria text-center md:text-start md:p-0" style={{ color: '#5F5D5E' }}>
              Stocks
            </p>
            <p className="text-wrap text-justify text-md w-full md:w-[30rem] pl-5 pr-5 md:pl-0 md:pr-0 text-gray-600 mt-3 md:mt-2 font-inter" style={{ color: '#5F5D5E' }}>
              Unlock liquidity without selling stocks. Epiidosis Investments LLC offers loans against listed stocks, ensuring quick access to funds. Borrowers retain ownership and benefit from competitive rates.
            </p>
            <div className="flex gap-2 md:mt-2 pl-5 pr-5 mt-5 md:pl-0 md:pr-0">
              <ButtonPrimaryUi>Know More</ButtonPrimaryUi>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceComponent;
