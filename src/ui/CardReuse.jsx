import PropTypes from "prop-types";

const CardReuse = ({ cards }) => {
  return (
    <div className="w-full flex justify-center items-center my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0 w-full max-w-7xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#E8F6FF] p-8 rounded-lg shadow-md"
          >
            <h2 className="font-inter text-[28px] font-bold leading-[40px] tracking-[0.01em] text-center text-[#5F5D5E]">
              {card.title}
            </h2>
            <p className="mt-4 text-center text-[#5F5D5E]">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

CardReuse.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardReuse;
