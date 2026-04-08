
function Login({ setIsLogin }: {setIsLogin :(value:boolean) => void}) {
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
        Welcome Back
      </h3>
      <p className="text-gray-500 text-sm mb-4 text-center">
        Access your wholesale marketplace
      </p>

      {/* TOGGLE */}
      <div className="flex rounded-xl bg-gray-100 p-1 mb-5">
        <button className="flex-1 py-2 rounded-lg text-sm font-bold bg-[#123a5e] text-white shadow-md">
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className="flex-1 py-2 rounded-lg text-sm font-bold text-gray-500 hover:text-gray-700"
        >
          Register
        </button>
      </div>

      {/* FORM */}
      <form className="space-y-3">
        <div className="flex border border-gray-200 rounded-xl overflow-hidden focus-within:border-orange-400">
          <span className="px-3 flex items-center bg-gray-50 border-r">
            +91
          </span>
          <input
            type="tel"
            placeholder="Mobile Number"
            className="flex-1 px-3 py-3 outline-none text-sm"
            maxLength={10}
          />
        </div>

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

export default Login;