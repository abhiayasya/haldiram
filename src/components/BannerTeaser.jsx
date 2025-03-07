export default function BannerTeaser() {
    return (
      <section className="relative w-full h-screen bg-cover bg-center flex items-end justify-center text-white"
        style={{ backgroundImage: "url('https://www.haldiram.com/media/wysiwyg/homepage/web_banner_1_1_1_1.jpg')" }}>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 "></div>
  
        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-10 max-w-3xl pb-6">
          <img src="https://www.haldiram.com/Haldiram_Logo-9GN.png" alt="Haldiram's" className="w-40 mx-auto mb-4" />
  
          <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
            A Legacy Built on <br className="hidden md:block" />
            Excellence & Trust
          </h1>
  
          <p className="mt-4 text-sm md:text-base text-gray-200">
            What began in a small kitchen in Bikaner, Rajasthan has grown into
            a global phenomenon. Haldiram has been synonymous with
            authenticity, quality, and innovation for over seven decades,
            bringing families together with every bite.
          </p>
  
          {/* Button */}
          <button className="mt-6 px-6 py-2 flex justify-center items-center gap-4 w-full text-white font-medium rounded-full transition-transform transform hover:scale-105">
            Know More <span className="bg-yellow-500  flex justify-center items-center rounded-full px-2 py-1">→</span>
          </button>
        </div>
      </section>
    );
  }
  