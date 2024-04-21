import classNames from "classnames"

import {
  inter,
  arvo,
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
  return (
    <html
      lang="en"
      className={classNames(
        inter.variable,
        arvo.variable,
        firaCode.variable,
        "scroll-smooth"
      )}
    >
      <body
        className={twMerge(
          classNames(
            "w-full",
            "min-h-screen",
            "antialiased",
            "font-arvo",
            "select-none",
            "overflow-x-hidden",
            "text-font-light dark:text-font-light",
            "bg-background-light dark:bg-background-light",
          )
        )}
      >
        <SidebarProvider>
          <TopNav />

          <Sidebar />
        </SidebarProvider>

        {children}

        {/* <BottomNav /> */}

        {/* <Footer /> */}
      </body>
    </html>
  )
}

export default RootLayout
