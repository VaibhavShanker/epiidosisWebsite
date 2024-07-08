function VisionSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8">
      <div className="flex flex-col items-end text-right w-full md:w-1/2 pr-4">
        <div className="flex items-center mb-4">
          <h2 className="font-bold text-lg" style={{ color: "#5F5D5E" }}>Established</h2>
          <div className="h-3 w-3 bg-blue-500 rounded-full ml-2"></div>
        </div>
        <p className="text-gray-600 mb-8 pl-4">
          Founded in 2020, Epiidosis Investments LLC set out to provide access to diversified high-potential investments in the Middle East and East Africa. Founded in 2020, Epiidosis Investments LLC set out to provide access to diversified high-potential investments in the Middle East and East Africa. Founded in 2020, Epiidosis Investments LLC set out to provide access to diversified high-potential investments in the Middle East and East Africa.
        </p>
        <div className="flex items-center mb-4">
          <h2 className="font-bold text-lg" style={{ color: "#5F5D5E" }}>Strategic Partnerships</h2>
          <div className="h-3 w-3 bg-blue-500 rounded-full ml-2"></div>
        </div>
        <p className="text-gray-600 pl-4">
          Founded in 2020, Epiidosis Investments LLC set out to provide access to diversified high-potential investments in the Middle East and East Africa. Founded in 2020, Epiidosis Investments LLC set out to provide access to diversified high-potential investments in the Middle East and East Africa. Founded in 2020, Epiidosis Investments LLC set out to provide access to diversified high-potential investments in the Middle East and East Africa.
        </p>
      </div>
      <div className="md:hidden border-l border-gray-300 h-full my-4"></div>
      <div className="flex flex-col items-start text-left w-full md:w-1/2 pl-4" style={{ minHeight: "400px" }}>
        <div className="flex items-center mb-4">
          <div className="h-3 w-3 bg-blue-500 rounded-full mr-2  mt-10"></div>
          <h2 className="font-bold text-lg mt-10" style={{ color: "#5F5D5E" }}>Our Investment Expert:</h2>
        </div>
        <p className="text-gray-600 mb-3 pr-4">
          Within a few years, we built a reputation as investment experts, with successful ventures across various sectors including finance, fintech, energy, and healthcare. Within a few years, we built a reputation as investment experts, with successful ventures across various sectors including finance, fintech, energy, and healthcare. Within a few years, we built a reputation as investment experts, with successful ventures across various sectors including finance, fintech, energy, and healthcare.
        </p>
        <div className="flex items-center mb-4">
          <div className="h-3 w-3 bg-blue-500 rounded-full mr-2"></div>
          <h2 className="font-bold text-lg" style={{ color: "#5F5D5E" }}>Global Expansion:</h2>
        </div>
        <p className="text-gray-600 pr-4">
          Expanded our portfolio globally, managing credit and equity investments that enhanced diversification and liquidity for our investors. Expanded our portfolio globally, managing credit and equity investments that enhanced diversification and liquidity for our investors. Expanded our portfolio globally, managing credit and equity investments that enhanced diversification and liquidity for our investors.
        </p>
      </div>
      <div className="md:block border-l border-gray-300 h-full mx-8" style={{ background: "#5F5D5E", minWidth: "1px", minHeight: "100%" }}></div>
    </div>
  );
}

export default VisionSection;
