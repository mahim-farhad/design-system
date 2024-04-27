"use client"

import {
  usePathname
} from "next/navigation"

import Link from "next/link"

import classNames from "classnames"

import useWindowSize from "@hooks/useWindowSize"

import Animate from "@framerMotion/Animate"

import Icon from "@components/elements/Icon"

const links = [{
  id: 1,
  path: "/",
  label: "dash",
  iconName: "apps-sort",
}, {
  id: 2,
  path: "/components",
  label: "comp",
  iconName: "code-branch",
}, {
  id: 3,
  path: "/applications",
  label: "appl",
  iconName: "grid",
}, {
  id: 4,
  path: "/widgets",
  label: "widg",
  iconName: "menu",
}]

function BottomNav() {
  const router = usePathname()

  const windowSize = useWindowSize()

  if (
    windowSize.width === undefined ||
    windowSize.width === 0 ||
    windowSize.width > 640
  ) {
    return null
  }

  return (
    <Animate>
      <nav
        className={classNames(
          "z-50",
          "fixed",
          "bottom-0",
          "flex",
          "items-center",
          "justify-center",
          "w-full",
          "h-16",
          "overflow-hidden",
          "bg-background-light",
          "border-t",
        )}
      >
        {
          links.map(({
            id,
            iconName,
            label,
            path
          }) => (
            <Link
              key={id}
              href={path}
              className={classNames(
                "relative",
                "flex",
                "flex-col",
                "gap-1",
                "items-center",
                "justify-center",
                "flex-1",
                "h-full",
                "pt-2.5",
                "pb-1",
                "px-4",
                "text-xs",
                "leading-relaxed",
                "font-medium",
                "uppercase",
                "whitespace-nowrap",
                { ["text-gray-800"]: router !== path },
                { ["text-primary"]: router === path },
                "bg-transparent",
                "rounded-none",
                "transition-all",
                "duration-300",
                "ease-in-out",
              )}
            >
              <Icon
                name={iconName}
              // className={classNames(
              //   "absolute",
              //   "top-1/2",
              //   "left-1/2",
              //   "-translate-y-1/2",
              //   "-translate-x-1/2",
              // )}
              />

              {label}
            </Link>
          ))
        }
      </nav>
    </Animate>
  )
}

export default BottomNav
