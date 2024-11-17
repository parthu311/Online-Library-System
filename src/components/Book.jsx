

function Book({book}) {
  return (
    <div className="max-w-sm w-full my-9 max-h-full px-3 mx-5 bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all">
    {/* Image */}
    <img
      src={book.imageLink}
      alt={book.title}
      className="w-full h-78 object-cover"
    />

    {/* Card Content */}
    <div className="p-4">
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>

      {/* Year and Category */}
      <p className="text-gray-600 text-sm mt-2">
        <span className="font-medium">Year:</span> {book.year}
      </p>
      <p className="text-gray-600 text-sm">
        <span className="font-medium">Category:</span> {book.category}
      </p>

      {/* View More Button */}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        View More
      </button>
    </div>
  </div>
  )
}

export default Book