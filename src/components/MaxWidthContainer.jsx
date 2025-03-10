import React from "react";

const MaxWidthContainer = ({ children, className, img }) => {
  return (
    <div
      className={`${className} w-full`}
      style={ img ? { backgroundImage: `url(${img})` }:""}
    >
      <div className="max-w-[1280px]">{children}</div>
    </div>
  );
};

export default MaxWidthContainer;
