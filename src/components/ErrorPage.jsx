import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-4xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>
        
      </div>

      <div className="mt-6">
        <Link to="/">
          <button className="px-8 py-4 text-lg font-medium text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
