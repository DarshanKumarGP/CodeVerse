export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-8 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">

        {/* Branding */}
        <div>
          <h2 className="text-xl font-semibold text-white">CodeVerse</h2>
          <p className="text-sm mt-2">© {new Date().getFullYear()} Darshan Kumar GP</p>
          <p className="text-sm">Built with React & TailwindCSS</p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-white mb-2">Useful Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-yellow-400 transition-colors duration-200">Home</a></li>
            <li><a href="/courses" className="hover:text-yellow-400 transition-colors duration-200">Courses</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
              className="text-xl text-gray-300 hover:text-yellow-400 transform hover:scale-125 transition duration-300">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
              className="text-xl text-gray-300 hover:text-yellow-400 transform hover:scale-125 transition duration-300">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
              className="text-xl text-gray-300 hover:text-yellow-400 transform hover:scale-125 transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"
              className="text-xl text-gray-300 hover:text-yellow-400 transform hover:scale-125 transition duration-300">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
