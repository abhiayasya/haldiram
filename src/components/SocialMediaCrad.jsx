const SocialMediaCard = ({
  name,
  icon,
  bgImg,
  description,
  showIcon,
  btnShow,
  visionMission,
}) => {
  console.log(showIcon);
  return (
    <div
      className={`relative ${
        bgImg ? "text-white p-6" : "text-black "
      }  overflow-hidden rounded-lg bg-cover bg-center`}
      style={
        !visionMission === true
          ? { backgroundImage: `url(${bgImg})` }
          : { backgroundImage: "none" }
      }
    >
      {showIcon && (
        <div className="flex items-center gap-2 text-lg font-semibold  ">
          <span className="w-6 h-6">
            <img src={icon} alt={`${name} Icon`} />
          </span>
          <span>{name}</span>
        </div>
      )}

      {!visionMission ? (
        <p className="text-sm mt-2">{description}</p>
      ) : (
        <div className="flex-1 bg-white p-4 rounded-2xl shadow-md border border-gray-200 flex flex-col">
          <span className="text-lg font-serif mb-3 tracking-wider text-black ">
            {name}
          </span>
          <div className="flex flex-col md:flex-row  items-center md:items-start gap-4 md:gap-1">
            <img src={bgImg} width={124} height={124} alt="Vision" />
            <p className="text-lg md:text-lg text-black font-normal text-center md:text-left">
              {description}
            </p>
          </div>
        </div>
      )}

      {btnShow && (
        <button className={`mt-4 py-2 flex gap-3`}>
          <span>View All</span>
          <span className="bg-white h-[25px] w-[25px] rounded-[50%] text-black font-semibold">
            →
          </span>
        </button>
      )}
    </div>
  );
};
export default SocialMediaCard;
