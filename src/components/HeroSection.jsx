import "./herosection.css";

function HeroSection() {
  return (
    <>
      <div className="relative  bg-cover bg-center back">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Center Content */}
        <div className="relative  flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl  font-bold mb-4">
            Welcome to Online Library
          </h1>
          <p className="text-lg mb-8">
            Discover, Learn, and Grow with our vast collection of books.
          </p>
          
        </div>
      </div>
    </>
  );
}

export default HeroSection;
