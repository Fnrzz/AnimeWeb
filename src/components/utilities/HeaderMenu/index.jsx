import React from "react";

const HeaderMenu = ({ title }) => {
  return (
    <div className="md:py-10 pb-8">
      <div className="text-center text-white font-bold md:text-3xl text-xl">
        {title}
      </div>
    </div>
  );
};

export default HeaderMenu;
