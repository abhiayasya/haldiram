 import SocialMediaCard from "./SocialMediaCrad";
 import instaIcon from "../assets/instagram.png";
 import linkdinIcon from "../assets/linkdinICon.png";
 import linkdinBgImg from "../assets/linkdin-bg-img.png";
 import instaBgImg from "../assets/insta-bg-img.png";

const socialMediaData = [
  {
    id: "instagram",
    name: "Instagram",
    icon:  instaIcon,
    bgImg:instaBgImg,
    textColor: "text-white",
    hoverColor: "hover:text-orange-500",
    description:
      "Miss home?  Dal Makhani & Peas Pulao brings you that taste of love, wherever you are. So, go on and treat yourself to a little comfort, anytime, anywhere!",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: linkdinIcon,
   bgImg:linkdinBgImg,
    textColor: "text-white",
    hoverColor: "hover:text-blue-600",
    description:
      "We’ve done it! Haldiram’s is proud to be named “Most Admired Retailer of the Year: Marketing & Promotions” at the Images Food Service Awards 2024!",
  },
];

const SocialMediaCards = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4  mx-auto">
      {socialMediaData.map((platform) => (
        <SocialMediaCard key={platform.id} {...platform} />
      ))}
    </div>
  );
};

export default SocialMediaCards;
