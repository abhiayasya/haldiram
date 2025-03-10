import React from "react";

const MaxWidthContainer = ({ children, className, img }) => {
  return (
    <div
      className={`${className} w-full my-4 md:my-8 lg:my-16 md:px-8 px-4`}
      style={ img ? { backgroundImage: `url(${img})` }:{}}
    >
      <div className="max-w-[1280px] mx-auto">{children}</div>
    </div>
  );
};

export default MaxWidthContainer;
