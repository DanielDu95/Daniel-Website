import { usePageContext } from "@/hooks/PageProvider";
import { Link } from "react-scroll";
// import ScrollSpy from "react-scroll/modules/mixins/scroll-spy";
// import { useEffect } from "react";

type Props = {
  page: string;
};

const LinkButton = ({ page }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  const { selectedPage, setSelectedPage } = usePageContext();

  // useEffect(() => {
  //   ScrollSpy.update(); // Update scroll-spy whenever the component mounts
  // }, []);

  return (
    <Link
      className={`${
        selectedPage === lowerCasePage ? "text-primary-600" : ""
      } font-semibold transition duration-500 hover:text-primary-500`}
      smooth={true}
      duration={500}
      offset={-25}
      to={lowerCasePage}
      spy={true} // Enable spy to monitor scroll
      onSetActive={() => setSelectedPage(lowerCasePage)} // Updates the selectedPage on scroll
    >
      {page}
    </Link>
  );
};

export default LinkButton;
