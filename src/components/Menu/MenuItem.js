import React from "react";

const MenuItem = ({ menuItem }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-base text-[#242938] font-semibold mb-2">
        {menuItem.title}
      </h2>
      {menuItem.items.map(text => (
        <p key={text} className="text-base text-[#242938] font-light">
          {text}
        </p>
      ))}
    </div>
  );
};

export default MenuItem;
