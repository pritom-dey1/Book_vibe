// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#06111f] text-gray-400 py-10 px-6">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800 pt-8 px-3 ">
        {/* Left section */}
        <div>
          <div className="flex items-center space-x-2">
            {/* Example logo placeholder */}
            <div className="bg-white text-black font-bold text-xl px-2 py-1 rounded">Book Vibe</div>
          </div>
          <p className="mt-3 text-sm">A better way to take your LLMs online.</p>
          <p className="mt-3 text-xs text-gray-500">
            © Nen Labs · Inc. 2025.
          </p>
          <div className="mt-2 space-x-3 text-xs">
            <a href="#" className="hover:text-white">Terms of Service</a> · 
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
          <p className="mt-4 text-green-400 text-sm">● All Systems Operational</p>
        </div>

        {/* Middle section */}
        <div>
          <h3 className="text-white font-semibold mb-3">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Docs</a></li>
            <li><a href="#" className="hover:text-white">Status</a></li>
            <li><a href="#" className="hover:text-white">Careers (We’re Hiring!)</a></li>
          </ul>
        </div>

        {/* Right section */}
        <div>
          <h3 className="text-white font-semibold mb-3">Join the Community</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">X / Twitter</a></li>
            <li><a href="#" className="hover:text-white">GitHub</a></li>
            <li><a href="#" className="hover:text-white">Discord</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
