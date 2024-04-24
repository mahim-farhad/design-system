"use client"

import { useState } from "react"

import { usePathname } from "next/navigation"

import classNames from "classnames"

import { useSidebarSlider } from "@contexts/SidebarProvider"

import Icon from "@components/Icon"
import Divider from "@components/Divider"
import DynamicLink from "@components/DynamicLink"
import Typography from "@components/Typography"
import Button from "@components/Button"
import {
  List,
  ListItem
} from "@components/List"

import Box from "@components/layouts/Box"
import Flex from "@components/layouts/Flex"

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

function Header({ setSidebarSlide }) {
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
        className={classNames(
          "text-lg",
          "font-semibold",
        )}
      >
        Components
      </Typography>

      <Button
        variant="text"
        className={classNames(
          "flex",
          "items-center",
          "justify-center",
          "w-6",
          "h-6",
          "p-0",
          "ml-auto",
          "font-semibold",
          "uppercase",
          "bg-surface-light",
          "rounded-lg",
          "border-2",
          "border-[#E9EAEE]",
        )}
        onClick={() => {
          document.body.classList.remove(
            "absolute",
            "w-screen",
            "overflow-hidden"
          )

          setSidebarSlide((prev) => !prev)
        }}
      >
        <Icon
          name="chevron-down"
          className={classNames(
            "rotate-90"
          )}
        />
      </Button>
    </Flex>
  )
}

function Body({
  router
}) {
  const [visible, setvisible] = useState(false)

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

                  onClick={() => {
                    setvisible(!visible)
                  }}
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
          "h-12",
          "flex",
          "items-center",
          "justify-center",
          "py-3",
          "px-6",
          "border-t-2",
        )}
      >
        <Typography
          type="h6"
          className={classNames(
            "!text-sm",
            "font-medium",
            "text-center",
            "capitalize",
          )}
        >
          © {new Date().getFullYear()}, {" "}
          Mahim Farhad. Inc
        </Typography>
      </Box>
    </Box>
  )
}

function Sidebar() {
  const {
    wrapperRef,
    sidebarSlide,
    setSidebarSlide
  } = useSidebarSlider()

  const router = usePathname()

  return (
    <aside
      ref={wrapperRef}
      className={classNames(
        "z-50",
        "fixed",
        "top-0",
        "left-0",
        "bottom-0",
        { ["-translate-x-80"]: !sidebarSlide },
        { ["translate-x-0"]: sidebarSlide },
        "flex",
        "flex-col",
        "flex-shrink-0",
        "w-80",
        "h-full",
        "min-h-screen",
        "bg-surface-light",
        "border-r-2",
        "transition-all",
        "duration-300",
        "ease-in-out",
      )}
    >
      <Header setSidebarSlide={setSidebarSlide} />

      <Body router={router} />

      <Footer />
    </aside>
  )
}

export default Sidebar
