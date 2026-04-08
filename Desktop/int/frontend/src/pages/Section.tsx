import React from 'react'

function Section() {
  // return (
    // <div>Section</div>
  // )
// }

// export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4">
      
      <div className="max-w-6xl mx-auto">

        {/* 🔝 Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-4 text-center">
          About Bulkdoor
        </h2>

        <p className="text-gray-500 text-lg max-w-3xl mx-auto mb-16 text-center">
          Bulkdoor bridges the gap between global beauty brands and local businesses.
          Our platform simplifies the procurement of authentic cosmetics and personal
          care products through a centralized B2B marketplace.
        </p>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* 🖼️ LEFT */}
          <div className="relative flex items-center justify-center">
            
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96">

              {/* Gradient Ring */}
              <div
                className="absolute inset-0 rounded-full animate-revolve-gradient"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(18,58,94,0.15), rgba(249,115,22,0.25), rgba(18,58,94,0.1), rgba(249,115,22,0.2), rgba(18,58,94,0.15))",
                  padding: "3px",
                }}
              >
                <div className="w-full h-full rounded-full bg-white"></div>
              </div>

              {/* Image */}
              <div className="absolute inset-3 bg-white rounded-full shadow-xl overflow-hidden">
                <img
                  src="/images/Bulkdoor-mascot.jpeg"
                  alt="Bulkdoor Mascot"
                  className="w-full h-full object-contain p-6 rotate-[-3deg]"
                />
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-2 right-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                🛍️
              </div>

              <div className="absolute -bottom-2 left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                🚚
              </div>

              <div className="absolute top-1/2 -left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                🛡️
              </div>

              <div className="absolute top-8 -left-2 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                📊
              </div>

              <div className="absolute -bottom-2 right-8 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                ⭐
              </div>

              <div className="absolute top-1/2 -right-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                📦
              </div>

            </div>
          </div>

          {/* 📄 RIGHT CONTENT */}
          <div className="space-y-6">

            {/* Item 1 */}
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                🛍️
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">
                  Centralized Hub
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Access hundreds of brands through a single, easy-to-use interface
                  for seamless bulk procurement.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                🛡️
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">
                  100% Authentic
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Direct from brand sourcing ensures every product is genuine and
                  certified. No counterfeits, ever.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                📈
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">
                  Scalable Growth
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We help you expand at any scale. Building access to top brands to
                  help your business grow rapidly.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Section