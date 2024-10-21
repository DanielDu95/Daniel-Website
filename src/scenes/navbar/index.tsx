import { PAGES } from "@/constants/arrays";
import { FLEXCENTER } from "@/constants/styles";
import Link from "./Link";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <nav className={`${FLEXCENTER} w-full bg-gray-20 py-4 text-xl`}>
      <div className="flex w-4/5 justify-between">
        {/* LEFT SIDE */}

        <div className={`${FLEXCENTER} `}>
          <span className="font-oleo">Daniel Du</span>
        </div>
        {/* RIGHT SIDE */}
        {isAboveMediumScreen ? (
          <div className="flex w-2/3 justify-between text-sm">
            <ul className={`${FLEXCENTER} gap-5`}>
              {PAGES.map((page: string) => (
                <Link key={page} page={page} />
              ))}
            </ul>
            <ul className={`${FLEXCENTER} gap-2`}>
              <li>icon1</li>
              <li>icon2</li>
              <li>icon3</li>
            </ul>
          </div>
        ) : (
          <button
            className="h-6 w-6 rounded-full bg-primary-500 p-1"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className="text-white" />
          </button>
        )}

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreen && isMenuToggled && (
          <div className="fixed right-0 top-0 z-40 h-full w-[300px] bg-gray-50 text-white drop-shadow-xl">
            <button
              className="fixed right-6 top-6"
              onClick={() => setIsMenuToggled(false)}
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
            <div
              className={`${FLEXCENTER} h-full w-3/4 flex-col gap-10 p-4 text-xl`}
            >
              {PAGES.map((page: string) => (
                <Link key={page} page={page} />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
