import { useState } from 'react';
import './book.css';
import { books } from '../unitls/mockData';
import Book from './Book';

function BookList() {
  const [searchText, setSearchText] = useState('');
  const [filterBook, setFilterBook] = useState(books);

  function handleSearch() {
    const findBook = books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilterBook(findBook);
  }

  function handleFilter(category) {
    if (category === 'All') {
      setFilterBook(books);
    } else {
      const filtered = books.filter((book) => book.category === category);
      
      setFilterBook(filtered); 
    }
  }

  return (
    <>
      <div className="my-4 py-9 flex flex-col justify-center items-center bg-gray-100">
        {/* Filter Buttons */}
        <div className="flex space-x-4 mb-6">
          <button
            className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
            onClick={() => handleFilter('All')}
          >
            All Books
          </button>
          <button
            className="px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
            onClick={() => handleFilter('Fiction')}
          >
            Fiction
          </button>
          <button
            className="px-6 py-3 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition"
            onClick={() => handleFilter('Non-Fiction')}
          >
            Non-Fiction
          </button>
          <button
            className="px-6 py-3 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition"
            onClick={() => handleFilter('Sci-Fi')}
          >
            Sci-Fi
          </button>
        </div>

        {/* Search Input */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search books..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="px-4 py-2 w-80 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Search
          </button>
        </div>


        <div className="book-list">         
          {filterBook.map((data, index) => (
            <Book book={data} key={index} />)
          )}
        </div>
      </div>
    </>
  );
}

export default BookList;
