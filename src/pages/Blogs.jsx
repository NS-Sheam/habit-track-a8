import { FiArrowRight } from "react-icons/fi";

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Habit Tracking Blog</h1>

        <div className="space-y-8">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-xl font-bold text-primary">
                What are the scientific benefits of habit tracking?
              </h2>
              <div className="divider my-1"></div>
              <p className="text-gray-700">
                Research shows that habit tracking activates multiple
                psychological mechanisms that boost success rates. The act of
                monitoring creates awareness that interrupts automatic
                behaviors, while visual progress charts trigger the brain's
                reward system, releasing dopamine when progress is visible.
                Studies have found that people who track habits are 42% more
                likely to achieve their goals due to heightened accountability,
                pattern recognition, and the satisfaction of recording
                accomplishments. This creates a positive feedback loop that
                reinforces consistency.
              </p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-ghost btn-sm">
                  Read more <FiArrowRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-xl font-bold text-primary">
                How can habit stacking improve your success rate?
              </h2>
              <div className="divider my-1"></div>
              <p className="text-gray-700">
                Habit stacking is a powerful technique where you link a new
                habit to an existing one, creating an automatic trigger. For
                example, 'After I brush my teeth, I will meditate for two
                minutes.' This approach leverages the neural pathways of
                established routines, making the new habit adoption 80% more
                effective. The key is choosing the right anchor habit that
                occurs reliably and matching the context - location, time,
                emotional state - between the existing habit and the new one you
                want to form.
              </p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-ghost btn-sm">
                  Read more <FiArrowRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-xl font-bold text-primary">
                What's the ideal habit tracking frequency for different goals?
              </h2>
              <div className="divider my-1"></div>
              <p className="text-gray-700">
                Different goals require different tracking frequencies for
                optimal results. For health habits like hydration or medication,
                daily tracking is essential. For fitness progress, 2-3 times
                weekly tracking prevents discouragement from normal
                fluctuations. Financial habits benefit from weekly reviews to
                identify patterns without creating anxiety. Creative pursuits
                show best results with bi-weekly tracking to balance
                accountability with creative freedom. The golden rule: track
                frequently enough to catch problems early, but not so often that
                tracking itself becomes a burden.
              </p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-ghost btn-sm">
                  Read more <FiArrowRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-xl font-bold text-primary">
                How do successful people incorporate habit tracking in their
                routines?
              </h2>
              <div className="divider my-1"></div>
              <p className="text-gray-700">
                Successful individuals treat habit tracking as a cornerstone of
                their productivity systems. Tim Ferriss uses a minimalist
                morning journal focusing on just three key habits. Bill Gates
                tracks reading time with detailed notes. Serena Williams
                maintains detailed training and recovery logs. The common thread
                is consistency and intentionality - successful people typically
                spend 5-15 minutes daily on tracking, often as part of morning
                or evening routines. Many use a combination of digital tools for
                quantitative tracking and handwritten notes for insights and
                reflections.
              </p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-ghost btn-sm">
                  Read more <FiArrowRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-xl font-bold text-primary">
                What are the most common reasons habit tracking attempts fail?
              </h2>
              <div className="divider my-1"></div>
              <p className="text-gray-700">
                Habit tracking attempts most commonly fail due to five key
                factors: overambition (tracking too many habits simultaneously),
                perfectionism (abandoning the system after missing days),
                choosing overly complex tracking methods, focusing on habits
                that don't align with personal values, and neglecting to build
                in accountability. Research indicates the sweet spot is tracking
                1-3 meaningful habits with a simple system that requires less
                than 2 minutes to maintain daily. Building in flexibility for
                occasional misses and regular weekly reviews significantly
                improves long-term adherence.
              </p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-ghost btn-sm">
                  Read more <FiArrowRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
