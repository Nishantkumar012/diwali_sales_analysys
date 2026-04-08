export default function Navbar() {
  return (
    <div className="w-full h-17  bg-white px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
      
      {/* Logo */}
      {/* <p className="text-lg font-semibold">Logo</p> */}
      <img
        src="/images/logo.png"
        className="w-15"
      />

      {/* Button */}
      <button className="bg-indigo-900 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg">
        Login
      </button>

    </div>
  );
}