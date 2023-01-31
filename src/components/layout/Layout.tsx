import React from "react";
import Header from "./Header";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mx-8">{props.children}</main>
    </>
  );
};

export default Layout;
