
import { useEffect, useState } from "react";
import { FiArrowLeft, FiX } from "react-icons/fi";
import { useLoaderData } from "react-router";
import { getFromLocalStorage, removeFromLocalStorage } from "../utils/localStorage";
import { toast } from "react-toastify";


const MyHabits = () => {
  const [doneHabits, setDoneHabits] = useState([])
  const habitData = useLoaderData();

  useEffect(() => {
    const storedData = getFromLocalStorage()
    const addedData = [];
    for (const id of storedData) {
      const singleData = habitData.find(item => item.id === id)
      addedData.push(singleData);
    }
    setDoneHabits(addedData)
  }, [habitData])


  const removeFromDB = (id) => {
    removeFromLocalStorage(id)
    const updatedHabits = doneHabits.filter((item) => item.id !== id);
    setDoneHabits(updatedHabits)
    toast.success("Habit removed from DB.")

  }


  return (
    <div className="px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-primary">My Completed Habits</h1>

      {!doneHabits.length ? (
        <div className="text-center py-12">
          <div className="text-9xl mb-4">🧭</div>
          <h2 className="text-2xl font-bold mb-4">No tracked habits yet</h2>
          <p className="text-gray-600 mb-6">
            Start tracking your habits to see them here.
          </p>
          <a href="/" className="btn btn-primary">
            <FiArrowLeft className="mr-2" /> Go to Homepage
          </a>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            doneHabits?.map(item => <div
              key={item.id}
              className="relative bg-base-100 p-6 rounded-xl shadow-md border border-base-300"
            >
              {/* ❌ Cross button */}
              <button
                onClick={() => removeFromDB(item.id)}
                className="absolute top-2 right-2 text-error hover:text-red-700"
                title="Remove from Done"
              >
                <FiX size={20} />
              </button>

              <h3 className="text-xl font-semibold mb-2">{item?.title}</h3>
              <p className="text-sm text-gray-600 mb-3">
                Category: <span className="font-medium">{item?.category}</span>
              </p>
              <p className="text-success font-medium">✅ Marked as Done Today</p>
            </div>)
          }

        </div>
      )}
    </div>
  );
};

export default MyHabits;
