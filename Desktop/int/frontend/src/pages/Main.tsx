import Auth from "./Auth";
import Carousel from "./Carousal";

// function Main() {
//   return (
    
//     <div className="geometric-pattern min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12">
//   {/* LEFT CONTENT */}
//   <div className="text-center lg:text-left flex-1 flex flex-col items-center lg:items-start">

//     {/* <p className="text-white bg-yellow-500 inline-block px-2 py-1 text-sm sm:text-base font-semibold rounded-4xl"> */}
//         <p className="self-center lg:self-start w-fit text-white bg-yellow-500 inline-block px-2 py-1 text-sm sm:text-base font-semibold rounded-full">
//       OFFICIAL B2B PLATFORM
//     </p>

//     <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text:center text-left">
//       Your Direct <br/> Gateway to{" "} <br/>
      
//       <span className="text-yellow-500">Wholesale Beauty</span>
//     </h1>

//     <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg text-center lg:text-left leading-relaxed">
//   Bulkdoor is a centralized B2B platform designed for beauty
//   <br className="hidden lg:block" />
//   retailers, salons, distributors and resellers to discover
//   <br className="hidden lg:block" />
//   and purchase authentic beauty products
// </p>

//     {/* AUTH (mobile ke liye yahin show hoga) */}
//     <div className="order-1 lg:hidden mt-6">
//       <Auth />
//     </div>

//     {/* BUTTONS */}
//     <div className="order-2 mt-6 flex sm:flex-row gap-4 justify-center lg:justify-start">
//       <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
//         Start Shopping →
//       </button>
//       <button className="border border-white text-white px-6 py-3 rounded-lg">
//         View Catalogue
//       </button>
//     </div>

//   </div>

//   {/* AUTH (desktop ke liye right side) */}
//   <div className="hidden lg:block w-full lg:w-1/3">
//     <Auth />
//   </div>


//   <Carousel/>
// </div>

//   )
// }


function Main() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="geometric-pattern min-h-screen flex flex-col px-4 sm:px-6 lg:px-12 overflow-hidden">
  
  {/* 🔝 TOP CONTENT */}
  <div className="flex-1 flex items-center justify-center py-10">
    <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-10">

      {/* LEFT */}
      <div className="text-center lg:text-left flex-1 flex flex-col items-center lg:items-start">

        <p className="self-center lg:self-start w-fit text-white bg-yellow-500 px-2 py-1 text-sm sm:text-base font-semibold rounded-full">
          OFFICIAL B2B PLATFORM
        </p>

        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-center lg:text-left leading-tight">
          Your Direct <br />
          Gateway to <br />
          <span className="text-yellow-500">Wholesale Beauty</span>
        </h1>

        <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg text-center lg:text-left leading-relaxed max-w-xl">
          Bulkdoor is a centralized B2B platform designed for beauty
          <br className="hidden lg:block" />
          retailers, salons, distributors and resellers to discover
          <br className="hidden lg:block" />
          and purchase authentic beauty products
        </p>

        {/* MOBILE AUTH */}
        <div className="lg:hidden mt-6 w-full max-w-sm">
          <Auth />
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg w-full sm:w-auto">
            Start Shopping →
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-lg w-full sm:w-auto">
            View Catalogue
          </button>
        </div>

      </div>

      {/* DESKTOP AUTH */}
      <div className="hidden lg:block w-full lg:w-1/3">
        <Auth />
      </div>

    </div>
  </div>

  {/* 🔥 BOTTOM CAROUSEL */}
 <div className="pb-4 sm:pb-6 -mx-4 sm:-mx-6 lg:-mx-12">
  <Carousel />
</div>

</div>
</>
  );
}

export default Main


