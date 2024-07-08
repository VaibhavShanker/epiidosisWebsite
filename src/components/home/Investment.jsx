import InvestmentCard from '../../ui/InvestmentCard';
import SampleImage from '/img/home/image1.png'; // Replace with the path to your image

const InvestmentCardsContainer = () => {
  return (
    <div className="flex justify-center items-center mt-10 space-x-8">
      <InvestmentCard
        title="E&k - Energy Infra Project"
        subtitle="E&K Energy Infra Holdings Limited"
        investment="AED 7.0 Million"
        ticketSize="AED 100k - 500k"
        roi="24% - 30% Annual"
        sector="Commercial"
        image={SampleImage}
      />
      <InvestmentCard
        title="InvestcoPortal"
        subtitle="Investment Management Platform"
        investment="AED 7.0 Million"
        ticketSize="AED 100k - 500k"
        roi="24% - 30% Annual"
        sector="Commercial"
        image={SampleImage}
      />
    </div>
  );
};

export default InvestmentCardsContainer;
