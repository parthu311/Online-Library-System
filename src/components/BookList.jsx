import { useState, useEffect } from "react";
import "./book.css";
import { books } from "../unitls/mockData";
import Book from "./Book";
import { Link, useParams } from "react-router-dom";

function BookList() {
  const { category } = useParams(); // Get the category from the URL
  const [searchText, setSearchText] = useState("");
  const [filterBook, setFilterBook] = useState([]);

  useEffect(() => {
    let filteredBooks = books;

    if (category && category !== "All") {
      filteredBooks = books.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchText) {
      filteredBooks = filteredBooks.filter((book) =>
        book.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilterBook(filteredBooks);
  }, [category, searchText]);

  return (
    <>
      <div className="my-4 py-9 flex flex-col justify-center items-center bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Link to="/">
            <button className="w-full px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
              All Books
            </button>
          </Link>
          <Link to="/books/Fiction">
            <button className="w-full px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition">
              Fiction
            </button>
          </Link>
          <Link to="/books/Non-Fiction">
            <button className="w-full px-6 py-3 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition">
              Non-Fiction
            </button>
          </Link>
          <Link to="/books/Sci-Fi">
            <button className="w-full px-6 py-3 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition">
              Sci-Fi
            </button>
          </Link>
          <Link to="/books/Romance">
            <button className="w-full px-6 py-3 text-white bg-pink-500 rounded-lg hover:bg-green-600 transition">
            Romance
            </button>
          </Link>
          <Link to="/books/Dystopian">
            <button className="w-full px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-blue-600 transition">
            Dystopian
            </button>
          </Link>
          <Link to="/books/Classic">
            <button className="w-full px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-purple-600 transition">
            Classic
            </button>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search books..."
            onChange={(e) => setSearchText(e.target.value)}
            className="px-4 py-2 w-80 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => {}}
            className="px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Search
          </button>
        </div>

        <div className="book-list">
          {filterBook.map((data, index) => (
            <Link key={index} to={`/book/${data.id}`}>
              <Book book={data} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default BookList;
