import { useLoaderData, useParams } from "react-router";
import { addToLocalStorage, getFromLocalStorage } from "../utils/localStorage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


const HabitDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [isDone, setIsDone] = useState(false);


  const habit = data?.find(item => item.id === parseInt(id))
  const { title, description, category, image, recommended, frequency } = habit;

  const handleDone = () => {
    if (isDone) {
      toast.error("Already added to db.");
      return;
    }
    addToLocalStorage(habit.id);
    setIsDone(true)
    toast.success("Successfully added to db.");
  }

  useEffect(() => {
    const storedData = getFromLocalStorage();

    if (storedData.includes(habit.id)) {
      setIsDone(true);
    }

  }, [habit])



  return (
    <div className="w-full px-4 py-12 bg-base-100">
      <div className="card bg-base-100 shadow-xl max-w-7xl mx-auto">
        <div className="card-body p-0">
          <div className="bg-primary/10 p-8 rounded-t-xl">
            <h2 className="text-4xl font-bold mb-2 text-primary">
              Track Your Habit
            </h2>
            <p className="text-gray-600 text-lg">
              Small steps lead to big changes. Keep going!
            </p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Details Section */}
              <div className="space-y-8">
                <div className="bg-base-200 p-6 rounded-xl">
                  <div className="flex items-start mb-6">

                    <img
                      src={image}
                      alt={title}
                      className="w-32 h-32 object-cover rounded-lg mr-6"
                    />

                    <div>
                      <h3 className="text-2xl font-bold mb-3">{title}</h3>
                      <p className="text-gray-600 text-lg">{description}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-base-200 p-5 rounded-xl">
                    <div className="font-semibold mb-2 text-gray-600">
                      Category
                    </div>
                    <div className="badge badge-primary badge-lg px-4 py-3">
                      {category}
                    </div>
                  </div>

                  <div className="bg-base-200 p-5 rounded-xl">
                    <div className="font-semibold mb-2 text-gray-600">
                      Recommended Frequency
                    </div>
                    <div className="text-lg font-medium">{frequency}</div>
                  </div>
                </div>

                <div className="bg-base-200 p-6 rounded-xl">
                  <div className="font-semibold mb-3 text-gray-600">
                    Motivation Tips
                  </div>
                  <div className="text-gray-700 text-lg italic">
                    Try to do this in the morning to make it a {recommended} habit.`
                  </div>
                </div>
              </div>

              {/* Tracking Card */}
              <div className="bg-base-200 p-8 rounded-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Track Your Progress</h3>

                  <div className="flex items-center justify-between mb-8 p-5 bg-base-100 rounded-xl">
                    <div>
                      <span className="font-semibold text-lg">Done today:</span>
                    </div>
                    <div>
                      <span className={`text-lg font-bold ${isDone ? "text-success" : "text-error"}`}>
                        {
                          isDone ? "YES" : "NO"
                        }
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-primary btn-lg w-full"
                  onClick={handleDone}
                >
                  Mark as Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitDetails;
