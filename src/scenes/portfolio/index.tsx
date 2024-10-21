import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { FLEXCENTER } from "@/constants/styles";
import useMediaQuery from "@/hooks/useMediaQuery";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isBetweenXsmallAndSmall = useMediaQuery(
    "(min-width:480px) and (max-width:768px)",
  );

  const images = [
    "/src/assets/img/blance-book-dashbaord.jpg",
    "/src/assets/img/blance-book-monthly.jpg",
    "/src/assets/img/blance-book-annual.jpg",
  ];

  useEffect(() => {
    if (!isBetweenXsmallAndSmall) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 3000); // Auto-slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isBetweenXsmallAndSmall, images.length]);

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
          <div className="flex w-full flex-col gap-5 sm:w-1/2">
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
              <Button
                type="secondary"
                size="sm"
                href="http://66.103.210.133:5174/login"
              >
                website
              </Button>
              <Button
                type="secondary"
                size="sm"
                href="https://github.com/DanielDu95/Ledger"
              >
                github
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE - GALLERY */}
          {!isBetweenXsmallAndSmall ? (
            <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-gray-200 sm:aspect-[9/16] sm:h-auto sm:max-h-[400px] sm:w-1/2 sm:bg-transparent">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`absolute left-1/2 top-0 h-full w-auto -translate-x-1/2 transform object-contain transition-opacity duration-[2000ms] ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Overlay Element */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-500 hover:opacity-100">
                <div className="text-center text-white">
                  <p className="mb-4 text-lg font-semibold">Tech Stacks Used</p>
                  <ul className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-1">
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                    <li>React Router</li>
                    <li>Supabase</li>
                    <li>Tanstack Query</li>
                    <li>React Hook Form</li>
                    <li>Rechart</li>
                    <li>React Icons</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative flex h-[200px] w-full justify-center gap-10 overflow-hidden rounded-lg bg-gray-200">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-auto object-contain"
                />
              ))}
              {/* Overlay Element */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-500 hover:opacity-100">
                <div className="text-center text-white">
                  <p className="mb-4 text-lg font-semibold">Tech Stacks Used</p>
                  <ul className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-1">
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                    <li>React Router</li>
                    <li>Supabase</li>
                    <li>Tanstack Query</li>
                    <li>React Hook Form</li>
                    <li>Rechart</li>
                    <li>React Icons</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
