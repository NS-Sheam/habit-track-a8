import { FiAlertTriangle, FiHome } from "react-icons/fi";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-[80vh]">
      <div className="flex-grow flex items-center justify-center bg-gradient-to-b from-base-100 to-base-200 p-4">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-error text-white p-6 flex justify-center">
            <FiAlertTriangle size={70} />
          </div>

          <div className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Oops!</h1>
            <p className="text-xl mb-6 text-gray-600">
              We can't seem to find the page you're looking for
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button href="/" className="btn btn-primary btn-lg">
                <FiHome className="mr-2" /> Back to Homepage
              </button>
            </div>
          </div>

          <div className="bg-base-300 p-4 text-center">
            <p className="text-sm text-gray-600">
              If you think this is a mistake, please contact support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
