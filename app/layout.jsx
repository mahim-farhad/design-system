import classNames from "classnames"

import {
  inter,
  arvo,
  poppins,
  firaCode,
} from "@utils/fonts"

import "@styles/globals.css"

import ModalProvider from "@contexts/ModalProvider"
import SidebarProvider from "@contexts/SidebarProvider"

import TopNav from "@components/navigations/TopNav"
import Sidebar from "@components/navigations/Sidebar"
import BottomNav from "@components/navigations/BottomNav"
import Footer from "@components/navigations/Footer"
import Modal from "@components/modals/Modal"

export const metadata = {
  title: "React Custom Components",
  description: "...",
}

export const viewport = {
  themeColor: "rgb(0 0 0)",
}

function RootLayout({ children }) {
  const bodyClasses = classNames(
    "w-full",
    "min-h-screen",
    "antialiased",
    "font-poppins",
    "text-base",
    "leading-normal",
    "font-normal",
    "select-none",
    "overflow-x-hidden",
    "text-font-light dark:text-font-light",
    "bg-background-light dark:bg-background-light",
  )

  return (
    <html
      lang="en"
      className={classNames(
        inter.variable,
        arvo.variable,
        poppins.variable,
        firaCode.variable,
        "scroll-smooth"
      )}
    >
      <body
        className={bodyClasses}
      >
        <SidebarProvider>
          <TopNav />

          <Sidebar />
        </SidebarProvider>

        <ModalProvider>
          {children}

          <Modal />
        </ModalProvider>

        {/* <BottomNav /> */}

        {/* <Footer /> */}
      </body>
    </html>
  )
}

export default RootLayout
