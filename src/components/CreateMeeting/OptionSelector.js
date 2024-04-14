import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OptionSelector = ({
  title,
  options,
  selectedOption = "",
  handleSelect = () => {},
}) => {
  return (
    <div>
      <h2 className="text-xs text-[#242938] font-semibold mb-4">{title}: *</h2>
      <div className="flex flex-col gap-3">
        {options.map(option => (
          <div
            key={option}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleSelect(option)}>
            <div className="h-5 w-5 border border-gray-400 rounded flex items-center justify-center">
              {selectedOption.includes(option) && (
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-[#006bfc] text-xs"
                />
              )}
            </div>
            <span className="text-sm text-[#242938] font-normal">{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionSelector;
