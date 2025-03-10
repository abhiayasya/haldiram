import React from "react";
import SocialMediaCard from "./SocialMediaCrad";

const LOGO_SLIDER_JSON = [
  {
    name: "Our Vision",
    description:
      "To share the rich and flavorful tapestry of Indian cuisine with the world, in its purest and most delicious form.",
  },
  {
    name: "Our Mission",
    description:
      "To be the most preferred destination for authentic Indian cuisine,leveraging our heritage and a passionate global network.",
  },
];

const VisionMissionCard = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 my-3 mx-auto">
      {LOGO_SLIDER_JSON.map((platform) => (
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
