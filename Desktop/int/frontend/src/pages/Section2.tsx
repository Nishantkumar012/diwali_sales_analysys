

function Section2() {
  const categories = [
    {
      title: "Cosmetics",
      desc: "A wide range of makeup products from trusted beauty brands.",
      img: "https://cdn.bulkdoor.in/Bulkdoor-folder/categories/1769250929261-j5tw0o-Eye-Essentials.webp",
    },
    {
      title: "Skincare",
      desc: "Essential skincare solutions designed for everyday beauty routines.",
      img: "https://cdn.bulkdoor.in/Bulkdoor-folder/categories/1769251314531-rl0pzz-Skincare.webp",
    },
    {
      title: "Beauty Tools",
      desc: "Professional beauty tools for precise and effective application.",
      img: "https://cdn.bulkdoor.in/Bulkdoor-folder/categories/1769868464190-oqk68g-tools-accessories.webp",
    },
    {
      title: "Haircare",
      desc: "Professional haircare products for healthy, beautiful hair.",
      img: "https://cdn.bulkdoor.in/Bulkdoor-folder/categories/1769251429778-ef5xe7-Haircare.webp",
    },
    {
      title: "Fragrances",
      desc: "Popular perfumes and fragrances for every preference.",
      img: "https://cdn.bulkdoor.in/Bulkdoor-folder/categories/1771869824197-q62cfv-fragrance.webp",
    },
  ];


  
  return (
    <div className="bg-slate-200 py-12 px-4 w-full">
      
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-indigo-900 mb-4">
          What We Offer ?
        </h2>
        <p className="text-gray-500 text-lg mb-12">
          Explore a wide range of professional beauty product categories
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {categories.slice(0, 3).map((item, i) => (
          <Card key={i} item={item} />
        ))}

      </div>

      {/* Bottom Grid */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        
        {categories.slice(3).map((item, i) => (
          <Card key={i} item={item} />
        ))}

      </div>


        {/* ================= OUR SERVICES ================= */}

<div className="bg-slate-200 py-16 px-4 mt-16">

  <div className="max-w-6xl mx-auto">
    
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-indigo-900 mb-12">
      Our Services
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

      {/* LEFT BIG CARD */}
      <div className="md:col-span-8 bg-indigo-900 rounded-3xl p-8 text-white flex  justify-between">

        <div>
          <img src="/images/logo.png" className="w-12 mb-6" />

          <h3 className="text-2xl font-black mb-4">
            Direct Brand Sourcing
          </h3>

          <p className="text-gray-300 max-w-md">
            Connect directly with distributors and manufacturers for best prices.
          </p>
        </div>


        <div className="grid grid-cols-2 gap-3 mt-8">
          {[
            "/images/1769245101039-p15ozw-4.webp",
            "/images/1769245089661-mvl6ry-5.webp",
             "/images/1770706412113-jvp7lx-wild-stone.webp",
            "/images/1770706471928-deh26d-wottagirl.webp",
             "/images/1769245057222-k62amm-8.webp",
             "/images/1769245017995-3hj32d-9.webp",
          ].map((img, i) => (
            // <div key={i} className="bg-white rounded-xl p-4">
            //   <img
            //     src={`${img}`}
            //     className="w-full h-12 object-contain"
            //   />
            // </div>
            <div key={i} className="bg-white rounded-xl p-4 h-20 w-30 flex items-center justify-center">
  <img
    src={img}
    className="max-h-full object-contain"
  />
</div>

          ))}
        </div>
      </div>


      {/* RIGHT CARD */}
      <div className="md:col-span-4 bg-white border rounded-3xl p-8 flex flex-col justify-between">

        <div>
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            ⭐
          </div>

          <h3 className="text-2xl font-black text-indigo-900 mb-3">
            Authentic Products
          </h3>

          We guarantee the origin and quality of every SKU. Digital certificates provided with every bulk purchase.
        </div>

        <div className="mt-6 pt-4 border-t flex justify-between text-sm text-gray-400">
          <span className="font-bold text-lg">Quality Guaranteed</span>
          ✔️
        </div>
      </div>

      {/* BOTTOM LEFT */}
      <div className="md:col-span-5 bg-white border rounded-3xl p-8">

        <h3 className="text-xl font-black text-indigo-900 mb-4">
          Logistics Support
        </h3>

        <p className="text-gray-600 mb-4">
          End-to-end logistics from warehouse to your doorstep. Real-time tracking and insured shipping for all orders.
        </p>

        <div className="h-40 bg-gray-100 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="md:col-span-7 bg-orange-500 rounded-3xl p-8 text-white">

        <h3 className="text-2xl font-black mb-4">
          Market Analytics
        </h3>

        <p className="opacity-90 mb-6">
          Get insights into trending beauty products and seasonal demands to optimize your inventory and maximize profitability.
        </p>

        <div className="flex gap-4">
          {[
            { value: "85%", label: "Accuracy" },
            { value: "24/7", label: "Uptime" },
            { value: "4.8/5", label: "Rating" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/20 px-6 py-4 rounded-xl text-center flex-1">
              <div className="text-xl font-black">{stat.value}</div>
              <div className="text-xs opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

    </div>
  </div>
</div>

     
        {/* ================= HOW IT WORKS ================= */}

<div className="py-16 px-4 bg-slate-200 mt-20">

  <div className="max-w-5xl mx-auto text-center">
    
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-indigo-900 mb-4">
      How To Use Bulkdoor?
    </h2>

    <p className="text-gray-500 mb-12 text-lg">
      Get started in 4 simple steps
    </p>

    <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">

      {/* dashed line (desktop only) */}
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[18%] right-[18%] border-t-2 border-dashed border-orange-300 z-0"></div>

      {[
        {
          step: "1",
          title: "Login",
          desc: "Quick access using your Mobile Number and OTP.",
        },
        {
          step: "2",
          title: "Browse Brands",
          desc: "Explore our catalog of authentic cosmetics brands.",
        },
        {
          step: "3",
          title: "Select Quantity",
          desc: "Choose exact quantities for your inventory.",
        },
        {
          step: "4",
          title: "Order & Delivery",
          desc: "Set payment and get tracked delivery.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="relative z-10 bg-white rounded-2xl p-6 border-2 border-gray-100 hover:shadow-lg transition-all aspect-square flex flex-col items-center justify-center"
           
             style={{
    animation: "borderGlow 6s infinite ease-in-out",
    animationDelay: `${i * 1.5}s`, // 👈 this creates the shifting effect
  }}
        >
          
          {/* Step Number */}
          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center mb-4 text-white font-black shadow-lg shadow-orange-500/30">
            {item.step}
          </div>

          <h3 className="text-sm sm:text-lg font-bold text-indigo-900 mb-2">
            {item.title}
          </h3>

          <p className="text-gray-500 text-xs sm:text-sm text-center">
            {item.desc}
          </p>

        </div>
      ))}

    </div>
  </div>
</div>


   {/* ================= CTA / GAME CHANGER SECTION ================= */}

<div className="py-16 px-4 bg-slate-200 mt-20">

  <div className="max-w-6xl mx-auto">
    
    <div className="bg-indigo-900 rounded-[2.5rem] p-8 lg:p-12 text-white shadow-2xl">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT CONTENT */}
        <div>
          
          <span className="inline-flex items-center gap-2 bg-orange-500 px-3 py-1 rounded-full text-xs font-bold mb-4">
            ⚡ Game Changer for Small Businesses
          </span>

          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Single Quantity.<br />
            <span className="text-orange-400">Wholesale Pricing.</span>
          </h2>

          <p className="text-gray-300 mb-6 max-w-md">
            Why stock up if you don’t have to? Get brand-direct prices even on a single unit.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-3">
            {[
              "No MOQ Required",
              "100% Authentic",
              "Fast Delivery",
              "Best Margins",
              "Secure Payments",
              "Premium Brands",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/80">
                <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center text-orange-400">
                  ✔
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6">

          {/* Tags */}
          <div>
            <h3 className="text-lg font-black mb-3">Designed For You</h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Regular Buyers",
                "Shop Owners",
                "Retailers",
                "Resellers",
                "Salon & Spa",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs bg-white/10 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA BOX */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

            <h4 className="font-black mb-2">
              Bulk Mixed Cart Support
            </h4>

            <p className="text-gray-300 text-sm mb-4">
              Want to buy <span className="text-orange-400 font-bold">5+ different items</span> with single quantities?
            </p>

            <a
              href="https://wa.me/919355606795"
              target="_blank"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 px-6 py-2 rounded-xl text-sm font-bold shadow-lg"
            >
              💬 Chat with Sales
            </a>

          </div>

        </div>

      </div>

    </div>
  </div>
</div>




            {/*   Bulk door Advantage */}

              <div className="py-12 sm:py-16 md:py-20 px-4 bg-slate-200">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-indigo-900 mb-4">
      The Bulkdoor Advantage
    </h2>

    <p className="text-gray-500 text-lg mb-12">
      Why businesses choose Bulkdoor for wholesale sourcing.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

      {[
        {
          title: "Genuine Products",
          desc: "Get exclusive with verified distributors and certified beauty brands.",
          icon: "📦"
        },
        {
          title: "Wholesale Rates",
          desc: "Most competitive wholesale pricing designed for bulk purchasing.",
          icon: "📈"
        },
        {
          title: "Secure Buying",
          desc: "Consistent product availability and dependable sourcing partners.",
          icon: "🔒"
        },
        {
          title: "Better Margins",
          desc: "Reduce procurement cost and boost profit margins.",
          icon: "📊"
        },
        {
          title: "Trusted Supply",
          desc: "Transparent pricing with accurate inventory and premium brands.",
          icon: "🚚"
        },
        {
          title: "Business Support",
          desc: "Dedicated team to assist with ordering and platform guidance.",
          icon: "🎧"
        }
      ].map((item, i) => (
        <div
          key={i}
          className="bg-gray-50 rounded-2xl p-6 text-left border border-gray-100 flex gap-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >

          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-xl flex-shrink-0">
            {item.icon}
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl font-bold text-indigo-900 mb-1">
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>

        </div>
      ))}

    </div>
  </div>
</div>
            



    </div>
  );
}

export default Section2;









function Card({ item }: any) {
  return (
    <div className="bg-white rounded-2xl p-6 text-left hover:shadow-lg transition-all hover:-translate-y-1 border-2 border-gray-200/80 shadow-sm">
      
      <div className="flex items-center gap-3 mb-3">
        
        <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-lg font-bold text-indigo-900">
          {item.title}
        </h3>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed">
        {item.desc}
      </p>

    </div>
  );
}