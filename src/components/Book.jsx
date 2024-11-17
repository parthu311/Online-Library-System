function Book({ book }) {
    return (
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full my-6 px-4 mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all">
        {/* Image */}
        <img
          src={book.imageLink}
          alt={book.title}
          className="w-full h-52 sm:h-64 md:h-72 lg:h-80 object-cover"
        />
  
        {/* Card Content */}
        <div className="p-4">
          {/* Title */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            {book.title}
          </h3>
  
          {/* Year and Category */}
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            <span className="font-medium">Year:</span> {book.year}
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            <span className="font-medium">Category:</span> {book.category}
          </p>
  
          {/* View More Button */}
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm sm:text-base">
            View More
          </button>
        </div>
      </div>
    );
  }
  
  export default Book;
  