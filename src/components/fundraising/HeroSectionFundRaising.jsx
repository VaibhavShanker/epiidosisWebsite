import { Carousel } from "@material-tailwind/react";
import herosectionfundraising from "/img/fundraising/heroimgfundraising.png";
import { BreadcrumbsDefault } from "../../ui/BreadcrumbsDefault";
import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";
import Card from "../../ui/Card";

const breadcrumbs = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Our Services",
    link: "/aboutus",
  },
  {
    title: "Fundraising",
    link: "/aboutus",
  },
];

const cards = [
  {
    imageSrc: "/img/home/image1.png",
    altText: 'Circle 1',
    title: 'Mission Statement',
    content: `The mission of our company is to provide innovative investment solutions and strategic guidance. Our goal is to deliver superior returns to investors. Also, we are committed to fostering economic growth in the communities we serve.`,
  },
  {
    imageSrc: "/img/home/image2.png",
    altText: 'Circle 2',
    title: 'Vision Statement',
    content: `Our vision is to be recognized as a global leader in investment management. In addition to creating value for our investors and partners, we generate value for all stakeholders. By embracing innovation, integrity, and impact, we empower individuals and organizations to thrive.`,
  },
  {
    imageSrc: "/img/home/image3.png",
    altText: 'Circle 3',
    title: 'Core Values',
    content: `We conduct ourselves with honesty, transparency, and ethical integrity in all aspects of our business. We hold ourselves accountable to the highest standards of professionalism and adhere to the principles of fairness.`,
  },
];

const HeroSectionFundRaising = () => {
  return (
    <div className="relative w-full max-h-auto sm:min-h-[55rem] 2xl:min-h-[55rem]">
      <Carousel>
        <div
          style={{ backgroundImage: `url(${herosectionfundraising})` }}
          className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat md:h-[600px]"
        >
          <div className="absolute inset-0 flex flex-col container mx-auto">
            <BreadcrumbsDefault data={breadcrumbs} />
            <div className="ml-12">
              <p className="text-white mt-5 text-xl md:text-start md:text-4xl font-inria">
                Empower Your Vision with Epiidosis Investments
              </p>
              <p className="text-white mt-1 text-xl md:text-start md:text-4xl font-inria">
                Epiidosis Investments
              </p>
              <p className="md:w-[56%] md:text-lg text-gray-400 mt-1 font-inter">
                Unlock Funding Opportunities for Your Project
              </p>
              <p className="md:w-[56%] md:text-lg text-gray-400 mt-2 font-inter">
                Join Epiidosis Investments and embark on a transformative journey to bring
              </p>
              <div className="w-fit mt-2">
                <ButtonPrimaryUi>
                  <span className="flex items-center gap-2 font-inria">
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </ButtonPrimaryUi>
              </div>
              <p className="md:w-[70%] md:text-sm text-gray-400 mt-5 font-inter">
                Join Epiidosis Investments and embark on a transformative journey to bring your projects to life. 
                Our comprehensive funding process streamlines every step, ensuring transparency, efficiency, and support at every turn.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${herosectionfundraising})` }}
          className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat md:h-[600px]"
        >
          <div className="absolute inset-0 flex flex-col container mx-auto">
            <BreadcrumbsDefault data={breadcrumbs} />
            <div className="ml-12">
              <p className="text-white mt-5 text-xl md:text-start md:text-4xl font-inria">
                Streamlined Funding Process
              </p>
              <p className="text-white mt-1 text-xl md:text-start md:text-4xl font-inria">
                Navigating Your Path to Success
              </p>
              <div className="w-fit mt-6">
                <ButtonPrimaryUi>
                  <span className="flex items-center gap-2 font-inria">
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </ButtonPrimaryUi>
              </div>
              <p className="md:w-[86%] md:text-lg text-gray-400 mt-3 font-inter">
                Our meticulous project funding process is designed to simplify the journey for entrepreneurs and visionaries like you.
                From initial onboarding and document submission to final fund deployment and project assessment, 
                we provide a structured pathway to unlock funding opportunities and propel your projects forward.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${herosectionfundraising})` }}
          className="relative w-full h-[480px] bg-cover bg-center bg-no-repeat md:h-[600px]"
        >
          <div className="absolute inset-0 flex flex-col container mx-auto">
            <BreadcrumbsDefault data={breadcrumbs} />
            <div className="ml-12">
              <p className="text-white mt-5 text-xl md:text-start md:text-4xl font-inria">
                Benefits of Partnering with Epiidosis
              </p>
              <p className="text-white mt-1 text-xl md:text-start md:text-4xl font-inria">
                Why Choose Epiidosis for Your Funding Needs
              </p>
              <p className="md:w-[56%] md:text-lg text-gray-400 mt-3 font-inter">
                Unlock Funding Opportunities for Your Project
              </p>
              <div className="w-fit mt-6">
                <ButtonPrimaryUi>
                  <span className="flex items-center gap-2 font-inria">
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </ButtonPrimaryUi>
              </div>
              <ul className="list-disc md:w-auto md:text-lg text-gray-400 mt-3 font-inter">
                <li>
                  Discover why Epiidosis is your ideal funding partner
                </li>
                <li>Benefit from comprehensive support, efficient verification, tailored solutions, risk mitigation, strategic leveraging, and transparent operations.</li>
                <li>Explore our funding process for detailed insights.</li>
              </ul>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="md:absolute w-full flex justify-center items-center md:h-[25%] h-[40%]">
        <div className="flex flex-col md:flex-row gap-5 p-5">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionFundRaising;
