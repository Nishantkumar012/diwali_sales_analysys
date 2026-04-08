
function Footer() {
  return (
    <div className="hidden md:block bg-slate-100 px-6 lg:px-20 pt-10 pb-6">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

        {/* LEFT SIDE */}
        <div className="max-w-sm flex flex-col gap-4">
          <img src="/images/logo.png" alt="logo" className="w-12 rounded-lg" />

          <p className="text-gray-600 text-sm leading-relaxed">
            Bulkdoor is India’s B2B wholesale cosmetics marketplace helping businesses source genuine products in bulk at competitive prices.
          </p>

          {/* EMAIL BOX */}
          <div className="bg-[#123a5e] text-white px-4 py-3 rounded-lg flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none w-full text-sm placeholder:text-white/60"
            />
            <button className="hover:scale-110 transition">➡️</button>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-2 text-xl">
            <span className="cursor-pointer hover:scale-110">📸</span>
            <span className="cursor-pointer hover:scale-110">📘</span>
            <span className="cursor-pointer hover:scale-110">🐦</span>
            <span className="cursor-pointer hover:scale-110">💬</span>
          </div>
        </div>

        {/* RIGHT LINKS */}
        <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8">

          {/* COLUMN 1 */}
          <div>
            <h3 className="font-bold text-[#123a5e] mb-4">My Account</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-[#123a5e] cursor-pointer">My Account</li>
              <li className="hover:text-[#123a5e] cursor-pointer">Orders</li>
              <li className="hover:text-[#123a5e] cursor-pointer">Catalogue</li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="font-bold text-[#123a5e] mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-[#123a5e] cursor-pointer">Contact Us</li>
              <li className="hover:text-[#123a5e] cursor-pointer">FAQs</li>
              <li className="hover:text-[#123a5e] cursor-pointer">Refund Policy</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="font-bold text-[#123a5e] mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-[#123a5e] cursor-pointer">About Us</li>
              <li className="hover:text-[#123a5e] cursor-pointer">Blog</li>
              <li className="hover:text-[#123a5e] cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="font-bold text-[#123a5e] mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-[#123a5e] cursor-pointer">Terms</li>
              <li className="hover:text-[#123a5e] cursor-pointer">Shipping</li>
              <li className="hover:text-[#123a5e] cursor-pointer">Cancellation</li>
            </ul>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-600">

        <div>
          © 2026 Bulkdoor Enterprises <br />
          <span className="text-xs text-gray-500">GSTIN: 07XXXXXXX</span>
        </div>

        <div className="flex items-center gap-1">
          Built with ❤️ by <span className="font-semibold text-gray-800">Your Team</span>
        </div>

      </div>

      {/* POPULAR LINKS (COLLAPSIBLE) */}
      <div className="mt-6 border-t pt-4 text-center">
        <details>
          <summary className="cursor-pointer font-semibold text-gray-700">
            Popular Links
          </summary>

          <div className="text-xs text-gray-600 mt-2 leading-relaxed">
            Makeup, Skincare, Haircare, Fragrance, Tools, Lipstick, Foundation...
          </div>
        </details>
      </div>

    </div>
  );
}

export default Footer;