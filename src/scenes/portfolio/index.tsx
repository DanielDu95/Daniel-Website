import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { FLEXCENTER } from "@/constants/styles";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/src/assets/img/blance-book-dashbaord.jpg",
    "/src/assets/img/blance-book-monthly.jpg",
    "/src/assets/img/blance-book-annual.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="portfolio" className={`${FLEXCENTER} w-full bg-gray-50 py-10`}>
      <div className="w-full max-w-4xl px-4">
        <h2 className="mb-8 text-left font-rocknroll text-2xl text-gray-100">
          Portfolio
        </h2>

        <div
          className={`${FLEXCENTER} w-full flex-col gap-10 rounded-[24px] bg-gray-20 p-6 sm:flex-row`}
        >
          {/* LEFT SIDE */}
          <div className="flex w-full flex-col justify-between sm:w-1/2">
            <h3 className="text-md rounded-lg bg-primary-400 px-6 py-4 text-center font-semibold">
              Balance Book
            </h3>
            <div className="whitespace-pre-line p-4 indent-5 text-sm leading-6">
              Balance Book is a ledger application. People can add new records
              to the ledger and check their balance by month or year easily.
              There are many categories in the app, and you can create your own
              since people's needs are always different.
            </div>
            <div className="mt-6 flex justify-end gap-5">
              <Button type="secondary" size="sm" href="https://www.example.com">
                website
              </Button>
              <Button type="secondary" size="sm" href="https://www.example.com">
                github
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE - GALLERY */}
          <div className="relative h-[calc(100vw*(16/9))] w-full overflow-hidden rounded-lg bg-gray-100 sm:aspect-[9/16] sm:h-auto sm:max-h-[400px] sm:w-1/2 sm:bg-transparent">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`absolute left-1/2 top-0 h-full w-auto -translate-x-1/2 transform object-contain transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
