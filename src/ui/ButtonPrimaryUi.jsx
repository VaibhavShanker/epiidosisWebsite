/* eslint-disable react/prop-types */
const ButtonPrimaryUi = ({ children }) => {
  return (
    <button
      className="font-inria text-white font-bold py-2 px-4 border border-blue-700 rounded-none"
      style={{
        background: "linear-gradient(90deg, #1E8DCD 0%, #0F4767 96.77%)",
        borderRadius: "0",
      }}
    >
      {children}
    </button>
  );
};

export default ButtonPrimaryUi;
