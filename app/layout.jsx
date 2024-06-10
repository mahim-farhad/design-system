import clsx from "clsx";

import { sans, serif, mono } from "@utils/fonts";

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
    "w-full min-h-screen",
    "antialiased font-sans leading-normal text-base font-normal",
    "select-none overflow-x-hidden",
    "text-font-light dark:text-font-light",
    "bg-background-light dark:bg-background-light",
  );

  return (
    <html
      lang="en"
      className={clsx(
        sans.variable,
        serif.variable,
        mono.variable
      )}
    >
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
