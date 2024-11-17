import { books } from "../unitls/mockData";
import { Link } from "react-router-dom";

function BrowseBooks() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Browse Books</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <Link
              to={`/book/${book.id}`}
              key={book.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                src={book.imageLink}
                alt={book.title}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-700">{book.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{book.author}</p>
              <p className="text-sm text-gray-500 mt-1">{book.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseBooks;
