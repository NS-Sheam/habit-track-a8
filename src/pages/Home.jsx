
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Progress from "../components/Progress";


const Home = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <Hero />
      {/* Featured Habits Section */}
      <Featured />
      {/* Progress Highlights Section */}
      <Progress />
    </div>
  );
};

export default Home;
