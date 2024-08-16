import clsx from "clsx";

import { poppins, arvo, firaCode } from "@utils/fonts";

import "@styles/globals.css";

import ModalProvider from "@contexts/ModalProvider";
import SidebarProvider from "@contexts/SidebarProvider";

import TopNav from "@components/navigations/TopNav";
import Sidebar from "@components/navigations/Sidebar";
import BottomNav from "@components/navigations/BottomNav";
import Footer from "@components/navigations/Footer";

export const metadata = {
  title: "React Custom Components",
  description: "...",
};

export const viewport = {
  themeColor: "rgb(0 0 0)",
};

function RootLayout({ children }) {
  const bodyClasses = clsx(
    poppins.variable, arvo.variable, firaCode.variable,
    "antialiased font-sans text-base leading-normal font-normal",
    "select-none overflow-x-hidden",
    "text-foreground-light dark:text-foreground-dark",
    "bg-background-light dark:bg-background-dark"
  );

  return (
    <html lang="en">
      <body className={bodyClasses}>
        {/* <SidebarProvider>
          <TopNav />

          <Sidebar />
        </SidebarProvider> */}

        {/* <ModalProvider> */}
        {children}
        {/* </ModalProvider> */}

        {/* <BottomNav /> */}

        {/* <Footer /> */}
      </body>
    </html>
  );
}

export default RootLayout;
