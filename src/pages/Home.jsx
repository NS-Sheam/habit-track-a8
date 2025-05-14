
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Progress from "../components/Progress";
import { Suspense } from "react";
import Loading from "../components/Loading";

const featuredPromise = fetch("/data.json").then(res => res.json())

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <Hero />
      {/* Featured Habits Section */}
      <Suspense fallback={<Loading />}>
        <Featured featuredPromise={featuredPromise} />
      </Suspense>
      {/* Progress Highlights Section */}
      <Progress />
    </div>
  );
};

export default Home;
