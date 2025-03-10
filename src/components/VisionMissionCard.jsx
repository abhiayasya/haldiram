import React from "react";
import SocialMediaCard from "./SocialMediaCrad";

const VisionMissionCard = ({data}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 my-3 mx-auto">
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
  );
};

export default VisionMissionCard;
