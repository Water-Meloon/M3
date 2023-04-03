import React, { useState } from "react";

const PageContext = React.createContext({
  currentPage: "Home",
  onPageChange: (pageName) => {},
});

export const PageContextProvider = (props) => {
  const [currentPage, setCurrentPage] = useState("Home");

  const pageChangeHandler = (pageName) => {
    setCurrentPage(pageName);
  };
//   console.log(currentPage);
  return (
    <PageContext.Provider
      value={{ currentPage: currentPage, onPageChange: pageChangeHandler }}
    >
        {props.children}
    </PageContext.Provider>
  );
};

export default PageContext;
