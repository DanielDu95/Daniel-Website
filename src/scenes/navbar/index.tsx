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
    <nav className={`${FLEXCENTER} w-full bg-gray-20 py-4`}>
      <div className="flex w-4/5 justify-between">
        {/* LEFT SIDE */}

        <div className={`${FLEXCENTER} `}>
          <img
            src="../../assets/img/Daniel.jpg"
            alt="daniel du's photo"
            className="h-6 w-6"
          />
          <span className="font-oleo">Daniel Du</span>
        </div>
        {/* RIGHT SIDE */}
        {isAboveMediumScreen ? (
          <div className="flex w-2/3 justify-between">
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
            className="rounded-full bg-primary-500"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className="h-6 w-6 p-1 text-white" />
          </button>
        )}

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreen && isMenuToggled && (
          <div className="fixed right-0 top-0 h-full w-[300px] bg-gray-50 text-white drop-shadow-xl">
            <button
              className="fixed right-1 top-1"
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
