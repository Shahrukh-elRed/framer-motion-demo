const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">For Individuals</h3>
        <span className="block text-sm hover:underline cursor-pointer">
          Introduction
        </span>
        <span href="#" className="block text-sm hover:underline cursor-pointer">
          Pay as you go
        </span>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">For Companies</h3>
        <span href="#" className="block text-sm hover:underline cursor-pointer">
          Startups
        </span>
        <span href="#" className="block text-sm hover:underline cursor-pointer">
          SMBs
        </span>
        <span href="#" className="block text-sm hover:underline cursor-pointer">
          Enterprise
        </span>
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button>
    </div>
  );
};

export default PricingContent;
