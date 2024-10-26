import { PAGES } from "@/constants/arrays";
import { FLEXCENTER } from "@/constants/styles";
import LinkButton from "./LinkButton";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import useIsAtTop from "@/hooks/useIsAtTop";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const isAtTop = useIsAtTop();

  return (
    <nav
      className={`${FLEXCENTER} ${isAtTop ? "" : "shadow-gray-20"} fixed left-0 right-0 top-0 z-50 w-full bg-gray-20 py-4 text-xl shadow-sm transition-all duration-300 ease-in-out`}
    >
      <div className="flex w-4/5 justify-between">
        {/* LEFT SIDE */}
        <div className={`${FLEXCENTER}`}>
          <span className="font-oleo text-2xl text-gray-50 transition-colors duration-300 hover:text-primary-600">
            Daniel Du
          </span>
        </div>

        {/* RIGHT SIDE */}
        {isAboveMediumScreen ? (
          <div className="flex w-2/3 justify-between text-sm">
            <ul className={`${FLEXCENTER} gap-5`}>
              {PAGES.map((page: string) => (
                <LinkButton key={page} page={page} />
              ))}
            </ul>
            <ul className={`${FLEXCENTER} gap-4`}>
              <li>
                <img
                  className="w-6 transition-transform duration-300 ease-in-out hover:scale-110"
                  src="/assets/icons/facebook.png"
                  alt="facebook"
                />
              </li>
              <li>
                <a href="https://github.com/DanielDu95">
                  <img
                    className="w-6 transition-transform duration-300 ease-in-out hover:scale-110"
                    src="/assets/icons/github.png"
                    alt="github"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/danieldu1131/">
                  <img
                    className="w-6 transition-transform duration-300 ease-in-out hover:scale-110"
                    src="assets/icons/instagram.png"
                    alt="instagram"
                  />
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <button
            className="h-8 w-8 rounded-full bg-primary-500 p-2 transition-colors duration-300 ease-in-out hover:bg-primary-600"
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
              <XMarkIcon className="h-8 w-8 text-primary-500" />
            </button>
            <div
              className={`${FLEXCENTER} h-full w-3/4 flex-col gap-10 p-4 text-xl`}
            >
              {PAGES.map((page: string) => (
                <LinkButton key={page} page={page} />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
