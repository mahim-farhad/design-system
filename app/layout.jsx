import classNames from "classnames"

import {
  inter,
  arvo,
  poppins,
  firaCode,
} from "@utils/fonts"

import { twMerge } from "tailwind-merge"

import "@styles/globals.css"

import SidebarProvider from "@contexts/SidebarProvider"

import TopNav from "@components/navigations/TopNav"
import Sidebar from "@components/navigations/Sidebar"
import BottomNav from "@components/navigations/BottomNav"
import Footer from "@components/navigations/Footer"

export const metadata = {
  title: "React Custom Components",
  description: "...",
}

export const viewport = {
  themeColor: "rgb(0 0 0)",
}

function RootLayout({ children }) {
  const bodyClasses = twMerge(
    classNames(
      "w-full",
      "min-h-screen",
      "antialiased",
      "font-arvo",
      "leading-normal",
      "text-base",
      "font-normal",
      "select-none",
      "overflow-x-hidden",
      "text-font-light dark:text-font-light",
      "bg-background-light dark:bg-background-dark",
    )
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

          {children}
        </SidebarProvider>

        {/* <BottomNav /> */}

        {/* <Footer /> */}
      </body>
    </html>
  )
}

export default RootLayout
