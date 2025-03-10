export default function BannerTeaser({ data }) {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-end justify-center text-white"
      style={{ backgroundImage: `url(${data.imageUrl})` }} // Use imageUrl from the data
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-10 max-w-3xl pb-6">
        <img
          src={data.logoUrl} // Use logoUrl from the data
          alt="Haldiram's"
          className="w-40 mx-auto mb-4"
        />
 
        <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
          {data.heading.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br className={index === 0 ? "hidden md:block" : ""} />
            </span>
          ))}
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-200">
          {data.description}
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-2 flex justify-center items-center gap-4 w-full text-white font-medium rounded-full transition-transform transform hover:scale-105">
          Know More{" "}
          <span className="bg-yellow-500 flex justify-center items-center rounded-full px-2 py-1">
            →
          </span>
        </button>
      </div>
    </section>
  );
}
