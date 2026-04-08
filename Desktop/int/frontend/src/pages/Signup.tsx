





function Signup({ setIsLogin }: { setIsLogin: (value: boolean) => void }) {
return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl max-w-sm mx-auto">

      {/* TOP BADGE */}
      <div className="flex items-center gap-2 mb-4 justify-center">
        <div className="rounded-full p-2 bg-orange-100">⭐</div>
        <div>
          <p className="text-xs font-bold text-gray-900">
            India's Trusted B2B Beauty Marketplace
          </p>
          <div className="text-orange-500 text-xs">
            ⭐⭐⭐⭐⭐ <span className="text-gray-400 ml-1">4.9/5</span>
          </div>
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-xl font-black text-gray-900 text-center">
        Get Started
      </h3>
      <p className="text-gray-500 text-sm mb-4 text-center">
        Register your business on Bulkdoor
      </p>

      {/* TOGGLE */}
      <div className="flex rounded-xl bg-gray-100 p-1 mb-5">
        <button
          onClick={() => setIsLogin(true)}
          className="flex-1 py-2 rounded-lg text-sm font-bold text-gray-500 hover:text-gray-700"
        >
          Login
        </button>
        <button className="flex-1 py-2 rounded-lg text-sm font-bold bg-orange-500 text-white shadow-md">
          Register
        </button>
      </div>

      {/* FORM */}
      <form className="space-y-3">

        {/* NAME */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="First Name *"
            className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400"
          />
        </div>

        {/* BUSINESS */}
        <input
          type="text"
          placeholder="Store / Business Name *"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400"
        />

        {/* PHONE */}
        <div className="flex border border-gray-200 rounded-xl overflow-hidden focus-within:border-orange-400">
          <span className="px-3 flex items-center bg-gray-50 border-r">
            +91
          </span>
          <input
            type="tel"
            placeholder="Mobile Number *"
            className="flex-1 px-3 py-2.5 text-sm outline-none"
            maxLength={10}
          />
        </div>

        {/* BUTTON */}
        <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:opacity-90">
          Get OTP
        </button>

      </form>

      {/* FOOTER */}
      <p className="text-gray-400 text-[10px] text-center mt-3">
        By continuing, you agree to our{" "}
        <span className="text-orange-500 font-medium cursor-pointer">
          Terms of Service
        </span>
      </p>
    </div>
  );
}

export default Signup;