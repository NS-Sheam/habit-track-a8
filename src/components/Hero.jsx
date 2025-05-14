
const Hero = () => {
    return (
        <section className="py-16 mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100 relative overflow-hidden h-[600px] flex items-center justify-center mt-10">
            <div className="max-w-3xl mx-auto text-center z-10 relative">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                    Track Your Way to Better Habits
                </h1>
                <p className="text-lg md:text-xl text-blue-700 mb-8">
                    Build consistency, track progress, and achieve your goals with our
                    simple habit tracking app.
                </p>
                <button className="btn btn-primary">Start Tracking Now</button>
            </div>

            <div className="absolute top-10 left-10 opacity-20">
                <div className="w-32 h-32 rounded-full bg-blue-300"></div>
            </div>
            <div className="absolute bottom-10 right-10 opacity-20">
                <div className="w-32 h-32 rounded-full bg-purple-300"></div>
            </div>
        </section>
    );
};

export default Hero;