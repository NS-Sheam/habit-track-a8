

import { FiArrowRight } from "react-icons/fi";
const Featured = () => {

    return (
        <section className="py-12 mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Featured Habits</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Start with these proven habit templates to build consistency and
                    improve your daily routine
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div

                    className="relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 "
                >
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-10">
                        <span className="badge badge-primary badge-sm py-3 px-4 font-semibold">
                            Mindset
                        </span>
                    </div>

                    {/* Image */}
                    <img
                        src="/morning-meditation.jpg"
                        alt="Morning Meditation"
                        className="h-40 w-full object-cover"
                    />

                    <div className="h-2 w-full bg-primary"></div>

                    <div className="p-6">
                        {/* Title Section */}
                        <div className="mb-4">
                            <h3 className="font-bold text-xl text-gray-800 group-hover:text-primary transition-colors">
                                Morning Meditation
                            </h3>
                            <p className="text-gray-500 text-sm mt-1">7x/week</p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 line-clamp-2 text-sm">
                            Start your day with 10 minutes of mindfulness meditation to reduce stress and improve focus.
                        </p>

                        {/* Action Button */}
                        <div className="flex justify-between items-center mt-4">
                            <div className="text-xs text-gray-500">
                                Recommended: daily
                            </div>
                            <button className="btn btn-sm btn-primary">
                                Track Now
                            </button>
                        </div>
                    </div>
                </div>
                <div

                    className="relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 "
                >
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-10">
                        <span className="badge badge-primary badge-sm py-3 px-4 font-semibold">
                            Mindset
                        </span>
                    </div>

                    {/* Image */}
                    <img
                        src="/morning-meditation.jpg"
                        alt="Morning Meditation"
                        className="h-40 w-full object-cover"
                    />

                    <div className="h-2 w-full bg-primary"></div>

                    <div className="p-6">
                        {/* Title Section */}
                        <div className="mb-4">
                            <h3 className="font-bold text-xl text-gray-800 group-hover:text-primary transition-colors">
                                Morning Meditation
                            </h3>
                            <p className="text-gray-500 text-sm mt-1">7x/week</p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 line-clamp-2 text-sm">
                            Start your day with 10 minutes of mindfulness meditation to reduce stress and improve focus.
                        </p>

                        {/* Action Button */}
                        <div className="flex justify-between items-center mt-4">
                            <div className="text-xs text-gray-500">
                                Recommended: daily
                            </div>
                            <button className="btn btn-sm btn-primary">
                                Track Now
                            </button>
                        </div>
                    </div>
                </div>
                <div

                    className="relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 "
                >
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-10">
                        <span className="badge badge-primary badge-sm py-3 px-4 font-semibold">
                            Mindset
                        </span>
                    </div>

                    {/* Image */}
                    <img
                        src="/morning-meditation.jpg"
                        alt="Morning Meditation"
                        className="h-40 w-full object-cover"
                    />

                    <div className="h-2 w-full bg-primary"></div>

                    <div className="p-6">
                        {/* Title Section */}
                        <div className="mb-4">
                            <h3 className="font-bold text-xl text-gray-800 group-hover:text-primary transition-colors">
                                Morning Meditation
                            </h3>
                            <p className="text-gray-500 text-sm mt-1">7x/week</p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 line-clamp-2 text-sm">
                            Start your day with 10 minutes of mindfulness meditation to reduce stress and improve focus.
                        </p>

                        {/* Action Button */}
                        <div className="flex justify-between items-center mt-4">
                            <div className="text-xs text-gray-500">
                                Recommended: daily
                            </div>
                            <button className="btn btn-sm btn-primary">
                                Track Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center">
                <button

                    className="btn btn-outline">
                    Show More
                    <FiArrowRight className="ml-2" />
                </button>
            </div>
        </section>
    );
};

export default Featured;