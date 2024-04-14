import React from "react";
import PricingPlan from "./PricingPlan";
import { pricingPlans } from "../../data/data";

const PricingPlans = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 text-xl text-[#242938] font-light">
            Start your 14-day free trial. No CC required.
          </p>
        </div>

        <div className="mt-16 space-y-12 md:grid md:grid-cols-2 md:space-x-6 md:space-y-0">
          {pricingPlans.map(plan => (
            <PricingPlan key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
