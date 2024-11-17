import { useParams, Link } from 'react-router-dom';
import { books } from '../unitls/mockData';

function BookDetails() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src={book.imageLink}
            alt={book.title}
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{book.title}</h1>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Author:</span> {book.author}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Category:</span> {book.category}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Language:</span> {book.language}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Pages:</span> {book.pages}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Year:</span> {book.year}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Rating:</span> {book.rating} / 5
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Publication Date:</span>{' '}
            {new Date(book.date).toLocaleDateString()}
          </p>
          <Link
            to="/books/All"
            className="inline-block mt-6 px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Books
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
