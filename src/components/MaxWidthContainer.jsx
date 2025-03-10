import React from "react";

const MaxWidthContainer = ({ children, className, img }) => {
  return (
    <div
      className={`${className} w-full`}
      style={ img ? { backgroundImage: `url(${img})` }:{}}
    >
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </div>
  );
};

export default MaxWidthContainer;
