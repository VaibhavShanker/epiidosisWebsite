
import image3 from "../../../public/img/aboutus/closeup-shot-spinning-globe-beige[1] 1.jpg";

function MissionSection() {
  return (
    <div 
      className="relative"
      style={{
        width: '100%',
        height: '512px',
       marginTop:'225px',
        gap: '0px',
        border: '1px solid transparent',
        backgroundImage: `url(${image3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text visibility */}
      <div className="absolute inset-0 p-5 flex flex-col  justify-center text-white">
        <h2 className="text-3xl font-bold mb-10">Mission Statement</h2>
        <p className="mt-4 ">
        Epiidosis Investments LLC has quickly risen to prominence since its inception in 2020. Founded with a vision to identify and capitalize on high-potential investment opportunities, we have established ourselves as a trusted partner in the global investment landscape. Our journey is marked by strategic milestones and significant achievements that underscore our commitment to excellence, innovation, and sustainable growth.
        </p>
      </div>
    </div>
  );
}

export default MissionSection;
