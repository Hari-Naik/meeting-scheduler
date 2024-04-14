import React from "react";

const PricingPlan = ({ plan }) => {
  return (
    <div
      className={`${
        plan.name === "Pro" ? "hover:bg-[#ffd1e5]" : "hover:bg-[#bdf2bd]"
      } flex flex-col sm:flex-row gap-2 rounded-lg border border-gray-200 shadow-sm p-10 cursor-pointer`}>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl text-[#242938] font-semibold">{plan.name}</h2>
        <div className="flex gap-5">
          <p className="text-3xl text-[#242938] font-semibold">{plan.price}</p>
          <p className="flex flex-col text-xs text-[#242938] font-light">
            <span>{plan.priceFrequency}</span>
            <span>{plan.billedAnnually}</span>
          </p>
        </div>
        <button className="px-4 py-2 w-max rounded bg-[#242938] text-lg text-white font-semibold mt-8">
          {plan.trialButtonText}
        </button>
      </div>
      <div className="text-base md:text-sm text-[#242938] md:font-light mt-4 md:mt-0">
        <p>Version History: {plan.versionHistory}</p>
        <p>Read-only users: {plan.readOnlyUsers}</p>
      </div>
    </div>
  );
};

export default PricingPlan;
