"use client"

import { useState } from "react"

import { usePathname } from "next/navigation"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

import { useToggleSidebar } from "@contexts/SidebarProvider"

import Icon from "@components/elements/Icon"
import DynamicLink from "@components/elements/DynamicLink"
import Typography from "@components/elements/Typography"
import Button from "@components/elements/Button"
import {
  List,
  ListItem
} from "@components/elements/List"

import Box from "@components/layouts/Box"
import Flex from "@components/layouts/Flex"
import Backdrop from "@components/Backdrop"

const pageLinks = [{
  id: 1,
  path: "/",
  label: "dashboard",
  iconName: "apps-sort",
}, {
  id: 2,
  path: "/components",
  label: "components",
  iconName: "code-branch"
}, {
  id: 3,
  path: "/applications",
  label: "applications",
  iconName: "grid",
}, {
  id: 4,
  path: "/widgets",
  label: "widgets",
  iconName: "menu",
}]

function Header() {
  return (
    <Flex
      className={classNames(
        "flex-shrink-0",
        "gap-x-6",
        "items-center",
        "h-16",
        "py-3",
        "px-6",
        "border-b-2",
      )}
    >
      <Icon
        name="brand"
        size="lg"
      />

      <Typography
        type="h6"
      >
        Components
      </Typography>
    </Flex>
  )
}

function Body() {
  const router = usePathname()

  return (
    <Box
      className={classNames(
        "flex",
        "flex-col",
        "flex-1",
        "overflow-y-hidden",
      )}
    >
      <Box
        className={classNames(
          "flex",
          "flex-col",
          "flex-1",
          "gap-6",
          "py-6",
          "px-3",
          "overflow-y-auto",
        )}
      >
        <List
          className={classNames(
            "flex",
            "flex-col",
            "gap-2",
          )}
        >
          <ListItem
            className={classNames(
              "px-3",
              "mb-4",
            )}
          >
            <Typography
              type="h6"
              className={classNames(
                "!text-sm",
              )}
            >
              Pages
            </Typography>
          </ListItem>

          {
            pageLinks?.map(({
              id,
              path,
              label,
              iconName,
              nestedLinks
            }) => (
              <ListItem
                key={id}
              >
                <DynamicLink
                  href={path}
                  className={classNames(
                    "relative",
                    "flex",
                    "gap-x-6",
                    "items-center",
                    "h-12",
                    "py-3",
                    "px-3",
                    { ["mb-2"]: nestedLinks },
                    "font-arvo",
                    "text-base",
                    "leading-[21px]",
                    "font-medium",
                    "capitalize",
                    { ["text-[#6D7D93] bg-transparent"]: router !== path },
                    { ["text-primary bg-[rgba(47,178,171,0.1)]"]: router === path },
                    "hover:bg-gray-100",
                    "rounded-lg",
                    "transition-all",
                    "duration-300",
                    "ease-in-out",
                  )}
                >
                  <span
                    className={classNames(
                      "flex",
                      "items-center",
                      "justify-center",
                      "w-6",
                      "h-6",
                      "font-semibold",
                      "uppercase",
                    )}
                  >
                    {
                      iconName ? (
                        <Icon
                          name={iconName}
                          active={router === path}
                        />
                      ) : label[0] + label[1]
                    }
                  </span>

                  {label}

                  {
                    nestedLinks &&
                    <span
                      className={classNames(
                        "flex",
                        "items-center",
                        "justify-center",
                        "w-6",
                        "h-6",
                        "ml-auto",
                        "font-semibold",
                        "uppercase",
                        "bg-surface-light",
                        "rounded-lg",
                        "border-2",
                        "border-[#E9EAEE]",
                      )}
                    >
                      <Icon
                        name="chevron-down"
                      />
                    </span>
                  }
                </DynamicLink>
              </ListItem>
            ))
          }
        </List>
      </Box>
    </Box>
  )
}

function Footer() {
  return (
    <Box
      className={classNames(
        "flex-shrink-0",
      )}
    >
      <Box
        className={classNames(
          "flex",
          "items-center",
          "justify-center",
          "py-2.5",
          "px-3",
          "border-t-2",
        )}
      >
        <Button
          size="sm"
          variant="outlined"
          color="gray"
          className="w-full"
        >
          Upgrade to Pro
        </Button>
      </Box>
    </Box>
  )
}

function Sidebar() {
  const {
    sidebarRef,
    showSidebar,
    showBackdrop
  } = useToggleSidebar()

  const sidebarClasses = twMerge(
    classNames(
      "z-50",
      "fixed",
      "top-0",
      "left-0",
      "bottom-0",
      { "-translate-x-full lg:translate-x-0": !showSidebar },
      { "translate-x-0": showSidebar },
      "flex",
      "flex-col",
      "w-80",
      "h-full",
      "min-h-screen",
      "bg-surface-light",
      "border-r-2",
      "transition-transform",
      "duration-300",
      "ease-in-out",
    )
  )

  return (
    <>
      {showBackdrop && <Backdrop />}

      <aside
        ref={sidebarRef}
        className={sidebarClasses}
      >
        <Header />

        <Body />

        <Footer />
      </aside>
    </>
  )
}

export default Sidebar
