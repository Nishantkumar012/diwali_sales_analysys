import { useEffect, useRef } from "react";

// const cards = [
//   "Product 1",
//   "Product 2",
//   "Product 3",
//   "Product 4",
//   "Product 5",
// ];

const cards = [
  {
    title: "Product 1",
    img: "/images/1769245017995-3hj32d-9.webp",
  },
  {
    title: "Product 2",
    img: "/images/1769245057222-k62amm-8.webp",
  },
  {
    title: "Product 3",
    img: "/images/1769245066536-ma9o3u-7.webp",
  },
  {
    title: "Product 4",
    img: "/images/1769245078808-okqw0c-6.webp",
  },
  {
    title: "Product 5",
    img: "/images/1769245089661-mvl6ry-5.webp",
  },
  {
    title: "Product 6",
    img: "/images/1769245101039-p15ozw-4.webp",
  },  
];

function Carousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1; // speed control
      container.scrollLeft = scrollAmount;

      // loop reset
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scroll, 20); // smooth speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full  overflow-hidden ">
      
      <div
        ref={scrollRef}
        className="flex gap-4 w-max animate-scroll"
      >
        {/* duplicate items for infinite loop */}
        {[...cards, ...cards].map((item, i) => (
          <div
            key={i}
            className="min-w-[200px]  text-white p-6 rounded-xl flex-shrink-0"
          >
            {/* {item} */}
              <img
      src={item.img}
      alt={item.title}
      className="w-20 h-20 object-cover rounded-lg"
    />
    {/* <p className="mt-2 text-center font-medium">{item.title}</p> */}

          </div>
        ))}
      </div>

    </div>
  );
}

export default Carousel;