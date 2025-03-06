const SocialMediaCard = ({ name, icon, gradient, textColor, hoverColor, description }) => {
    return (
      <div className={`relative w-[400px] h-[200px] ${gradient} ${textColor} overflow-hidden rounded-lg p-6`}>
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span className="w-6 h-6">{icon}</span> {name}
        </div>
        <p className="text-sm mt-2">{description}</p>
        <button className={`mt-4 px-4 py-2 flex gap-3`}>
            <span> View All</span>
            <span className="bg-white h-[25px] w-[25px] rounded-[50%] text-black font-semibold">  →</span>
       
        </button>
      </div>
    );
  };
  
  export default SocialMediaCard;
  