import { ReactNode, createContext, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};
type PageContextType = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

const PageProvider = ({ children }: Props) => {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  return (
    <PageContext.Provider
      value={{
        selectedPage,
        setSelectedPage,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context)
    throw new Error("usePageContext must be used within a PageProvider");
  return context;
};

export default PageProvider;
