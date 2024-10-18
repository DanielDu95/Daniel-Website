import { usePageContext } from "@/hooks/PageProvider";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
};

const Link = ({ page }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const { selectedPage, setSelectedPage } = usePageContext();
  return (
    <a
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} hover:text-primaray-500 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </a>
  );
};

export default Link;
