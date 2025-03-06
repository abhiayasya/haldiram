 import SocialMediaCard from "./SocialMediaCrad";
const socialMediaData = [
  {
    id: "instagram",
    name: "Instagram",
    icon: "📷",
    gradient: "bg-gradient-to-r from-orange-500 to-pink-500",
    textColor: "text-white",
    hoverColor: "hover:text-orange-500",
    description:
      "Miss home? Dal Makhani & Peas Pulao brings you that taste of love, wherever you are. Treat yourself anytime, anywhere!",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "🔗",
    gradient: "bg-gradient-to-r from-blue-600 to-blue-400",
    textColor: "text-white",
    hoverColor: "hover:text-blue-600",
    description:
      "We've done it! Haldiram’s is proud to be named 'Most Admired Retailer of the Year: Marketing & Promotions' at the Images Food Service Awards 2024!",
  },
];

const SocialMediaCards = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {socialMediaData.map((platform) => (
        <SocialMediaCard key={platform.id} {...platform} />
      ))}
    </div>
  );
};

export default SocialMediaCards;
