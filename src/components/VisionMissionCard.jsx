import React from "react";
import SocialMediaCard from "./SocialMediaCrad";
import { div } from "framer-motion/client";
import PageHeading from "./PageHeading";

const VisionMissionCard = ({data, heading}) => {
  return (
    <div className="p-7">
    <div className="vision-headings">
       <PageHeading headings={heading}/>
    </div>
    <div className="grid lg:grid-cols-2 gap-4 my-3">
      {data.map((platform) => (
        <SocialMediaCard
          key={platform.id}
          {...platform}
          showIcon={false}
          btnShow={false}
          visionMission={true}
        />
      ))}
    </div>
    </div>
  );
};

export default VisionMissionCard;
