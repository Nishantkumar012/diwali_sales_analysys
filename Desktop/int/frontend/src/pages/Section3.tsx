
function Section3() {
  return (
    <>
      {/* =============== Who can Buy ============= */}

      <div className="py-20 bg-[#0a1628] overflow-x-hidden">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2">
            Who can Buy ?
          </h2>

          <p className="text-gray-400 mb-12">
            Bulkdoor is designed for businesses across the beauty industry
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

            {[
              {
                title: "Retail Store Owners",
                desc: "Stock your retail shop with trending beauty products at competitive margins.",
                icon: "🏪",
              },
              {
                title: "Distributors",
                desc: "Expand your distribution with high-volume procurement directly from brands.",
                icon: "🚚",
              },
              {
                title: "Salon & Spa Owners",
                desc: "Professional-grade cosmetics for your service-based storefront needs.",
                icon: "✂️",
              },
              {
                title: "Online Sellers & Retailers",
                desc: "Source authentic products for your e-commerce store at wholesale rates.",
                icon: "🛒",
              },
              {
                title: "Wholesalers & Traders",
                desc: "Scale your wholesale business with bulk orders and exclusive pricing.",
                icon: "🏢",
              },
              {
                title: "Franchise Chains",
                desc: "Consistent sourcing across multiple outlets at unified wholesale rates.",
                icon: "👥",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white/10 hover:scale-[1.03]"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center mx-auto mb-4 text-3xl">
                  {item.icon}
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div> 

                  {/* =================  FAQS ======================== */}

         <div className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl minecolor font-bold text-primary mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-left">

          {/* FAQ Item */}
          <details className="group bg-slate-100 rounded-2xl border border-gray-100 overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-gray-900 hover:text-primary transition-colors">
              What is the minimum order quantity (MOQ)?
              <span className="ml-4 transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed -mt-2">
              Some brands have an MOQ as low as 6 units. Check each product page for exact requirements.
            </div>
          </details>

          <details className="group bg-slate-100 rounded-2xl border border-gray-100 overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-gray-900 hover:text-primary transition-colors">
              How long does delivery take?
              <span className="ml-4 transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed -mt-2">
              Delivery usually takes 1–2 business days depending on your location.
            </div>
          </details>

          <details className="group bg-slate-100 rounded-2xl border border-gray-100 overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-gray-900 hover:text-primary transition-colors">
              Are the products authentic?
              <span className="ml-4 transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed -mt-2">
              Yes, all products are sourced from verified brands and authorized distributors.
            </div>
          </details>

          <details className="group bg-slate-100 rounded-2xl border border-gray-100 overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-gray-900 hover:text-primary transition-colors">
              What documents are needed for registration?
              <span className="ml-4 transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed -mt-2">
              GST registration, trade license, and PAN card are required.
            </div>
          </details>

        </div>
      </div>
    </div>


         {/* =========== Ready to Scale =============== */}

         <div
      className="py-12 sm:py-16 md:py-20 px-4"
      style={{ backgroundColor: "#ff9000" }}
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-2 sm:mb-4">
          Ready to scale your inventory?
        </h2>

        <p className="text-white/80 text-sm sm:text-lg mb-6 sm:mb-10 max-w-xl mx-auto">
          Join the future of wholesale beauty distribution today.
        </p>

        <div className="grid grid-cols-2 sm:flex sm:justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">

          <a
            href="#top"
            className="bg-indigo-900 hover:bg-black/90 text-white font-bold px-4 sm:px-8 py-3 sm:py-4 rounded-xl transition-all hover:-translate-y-0.5 text-xs sm:text-base text-center"
          >
            Sign Up Now
          </a>

          <a
            href="/contact-us"
            className="bg-white text-[#ff9000] font-bold px-4 sm:px-8 py-3 sm:py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg text-xs sm:text-base text-center"
          >
            Contact Sales
          </a>

          <a
            href="/"
            className="col-span-2 bg-white/20 border-2 border-white/60 text-white font-bold px-4 sm:px-8 py-3 sm:py-4 rounded-xl transition-all hover:bg-black hover:border-black hover:-translate-y-0.5 text-xs sm:text-base text-center"
          >
            Start Shopping
          </a>

        </div>
      </div>
    </div>

    </>
  );
}

export default Section3;