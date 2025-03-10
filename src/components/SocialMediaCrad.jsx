const SocialMediaCard = ({ name, icon, bgImg, textColor, description }) => {
  return (
    <div
      className={`relative mx-5  ${textColor} overflow-hidden rounded-lg p-6 bg-cover bg-center`}
      style={{ backgroundImage: `url(${bgImg})` }} 
    >
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span className="w-6 h-6">
          <img src={icon} alt={`${name} Icon`} />
        </span>
        {name}
      </div>
      <p className="text-sm mt-2">{description}</p>
      <button className={`mt-4 py-2 flex gap-3`}>
        <span>View All</span>
        <span className="bg-white h-[25px] w-[25px] rounded-[50%] text-black font-semibold"> →</span>
      </button>
    </div>
  );
};

export default SocialMediaCard;
