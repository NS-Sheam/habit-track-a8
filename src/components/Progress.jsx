import CountUp from "react-countup";


const Progress = () => {
    return (
        <section className="py-12 mb-16 bg-gray-50 rounded-lg">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Your Progress Highlights</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    See how far you've come and celebrate your achievements.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-4xl mb-3">🔥</div>
                    <div className="text-3xl font-bold text-primary mb-1">
                        <CountUp end={20} duration={5} />
                    </div>
                    <div className="text-gray-600">Habits Tracked</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-4xl mb-3">📊</div>
                    <div className="text-3xl font-bold text-primary mb-1">
                        <CountUp end={25} duration={5} />
                    </div>
                    <div className="text-gray-600">Days Streak</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-4xl mb-3">⏱️</div>
                    <div className="text-3xl font-bold text-primary mb-1">
                        <CountUp end={50} duration={5} />
                    </div>
                    <div className="text-gray-600">Hours Focused</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-4xl mb-3">📝</div>
                    <div className="text-3xl font-bold text-primary mb-1">
                        <CountUp end={60} duration={5} />
                    </div>
                    <div className="text-gray-600">Total Entries</div>
                </div>
            </div>
        </section>
    );
};

export default Progress;