import Ujjwall from "../../public/img/aboutus/Ujjwal.png";
import Mohit from "../../public/img/aboutus/Mohit.png";

import Narendar from "../../public/img/aboutus/Narendar.jpg";


const teamMembers = [
    {
        name: 'Narender Chauhan',
        title: 'Director',
        image: Narendar,
    },
    {
        name: 'Mohit Rana',
        title: 'CEO/Director',
        image: Mohit,
    },
    {
        name: 'Ujjwal Singh',
        title: 'Director Administration',
        image: Ujjwall,
    },
];

const OurPartner = () => {
    return (
        <div className="text-center py-10 bg-gray-50">
            <h2 className="text-3xl font-semibold mb-4 text-gray-700">Our Partner</h2>
            <h3 className="text-xl font-medium mb-8 text-gray-700">Executive Management</h3>
            <div className="flex justify-center space-x-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="w-64 bg-white rounded-lg shadow-lg">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold text-gray-700">{member.name}</h4>
                            <p className="text-blue-500 text-gray-700">{member.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurPartner;
