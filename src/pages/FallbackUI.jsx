import { FiAlertTriangle, FiSearch } from "react-icons/fi";

const FallbackUI = () => {
  return (
    <div className="w-full px-4 py-12 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto bg-base-100 shadow-xl rounded-xl overflow-hidden">
        <div className="bg-error/10 p-8 flex justify-center">
          <FiAlertTriangle size={80} className="text-error" />
        </div>

        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Habit Not Found</h2>
          <p className="text-gray-600 text-lg mb-6">
            We couldn't find the habit you're looking for. It may have been
            removed or the ID might be incorrect.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/" className="btn btn-outline btn-lg gap-2">
              <FiSearch /> Explore Habits
            </a>
          </div>
        </div>

        <div className="bg-base-200 p-4 text-center">
          <p className="text-sm text-gray-600">
            Need help? Contact our support team
          </p>
        </div>
      </div>
    </div>
  );
};
export default FallbackUI;
