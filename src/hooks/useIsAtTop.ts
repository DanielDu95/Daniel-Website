import { SelectedPage } from "@/types/types";
import { useEffect, useState } from "react";
import { usePageContext } from "./PageProvider";

const useIsAtTop = () => {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const { setSelectedPage } = usePageContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsAtTop(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSelectedPage]);

  return isAtTop;
};

export default useIsAtTop;
