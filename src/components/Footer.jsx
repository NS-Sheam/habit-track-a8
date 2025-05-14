import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-6">
      <div className="flex flex-col items-center">
        <div className="mb-6">
          <a href="/" className="flex items-center">
            <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-2">
              H
            </div>
            <span className="text-lg font-bold">HabitTrack</span>
          </a>
        </div>

        <nav className="mb-4">
          <ul className="flex gap-8">
            <li>
              <a href="/" className="text-base">
                Home
              </a>
            </li>
            <li>
              <a href="/stats" className="text-base">
                Stats
              </a>
            </li>
            <li>
              <a href="/blogs" className="text-base">
                Blogs
              </a>
            </li>
            <li>
              <a href="/contact" className="text-base">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm btn-circle"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm btn-circle"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm btn-circle"
            >
              <FiTwitter size={18} />
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
