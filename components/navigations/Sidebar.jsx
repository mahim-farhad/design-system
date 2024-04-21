"use client"

import { useState } from "react"

import { usePathname } from "next/navigation"

import classNames from "classnames"

import useWindowSize from "@hooks/useWindowSize"

import { SidebarSlider } from "@contexts/SidebarProvider"

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

import ScrollContainer from "@components/sliders/ScrollContainer"

const pageLinks = [{
  id: 1,
  path: "/",
  label: "dashboard",
  iconName: "apps-sort",
}, {
  id: 2,
  path: "/components",
  label: "components",
  iconName: "code-branch",
  nestedLinks: [{
    id: 1,
    path: "/typography",
    label: "typography",
    iconName: "",
  }, {
    id: 2,
    path: "/buttons",
    label: "buttons",
    iconName: "",
  }, {
    id: 3,
    path: "/inputs",
    label: "inputs",
    iconName: "",
  }, {
    id: 4,
    path: "/inputs",
    label: "inputs",
    iconName: "",
  }, {
    id: 5,
    path: "/inputs",
    label: "inputs",
    iconName: "",
  }],
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
        "h-16 lg:h-20",
        "py-3 lg:py-6",
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
                    { ["text-primary bg-gray-100"]: router === path },
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

                {
                  visible && nestedLinks &&
                  <List
                    className={classNames(
                      "flex",
                      "flex-col",
                      "gap-2",
                      "slider-down",
                    )}
                    style={
                      visible && {
                        height: "auto",
                        minHeight: "0px",
                        overflow: "visible",
                        transition: "height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        transitionDuration: "300ms"
                      }
                    }
                  >
                    {
                      nestedLinks?.map(({
                        id,
                        path,
                        label,
                        iconName
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
                              "font-arvo",
                              "text-base",
                              "leading-[21px]",
                              "font-medium",
                              "capitalize",
                              { ["text-[#6D7D93] bg-transparent"]: router !== path },
                              { ["text-primary bg-gray-100"]: router === path },
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
                          </DynamicLink>
                        </ListItem>
                      ))
                    }
                  </List>
                }
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
      {/* <Box
        className={classNames(
          "p-6",
          "m-6",
          "bg-primary",
          "rounded-lg",
        )}
      >
        <Typography
          type="h6"
          className={classNames(
            "-mt-[4px] lg:-mt-[6px]",
            "mb-2",
            "text-gray-100",
          )}
        >
          Get Premium Now!
        </Typography>

        <Typography
          type="p"
          className={classNames(
            "mb-4",
            "text-gray-100",
          )}
        >
          Reach our special feature by subscribing our package
        </Typography>

        <Button
          size="sm"
          color="white"
          className={classNames(
            "w-full",
          )}
        >
          Subscribe
        </Button>
      </Box> */}

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
  const windowSize = useWindowSize()

  const {
    wrapperRef,
    sidebarSlide,
    setSidebarSlide
  } = SidebarSlider()

  const router = usePathname()

  return (
    <aside
      ref={wrapperRef}
      className={classNames(
        "z-50",
        "fixed",
        "top-0",
        { ["-left-80"]: windowSize.width <= 1024 && !sidebarSlide },
        { ["left-0"]: windowSize.width >= 1024 || sidebarSlide },
        "bottom-0",
        "flex",
        "flex-shrink-0",
        "flex-col",
        "w-80",
        "h-full",
        "min-h-screen",
        "overflow-hidden",
        "bg-background-light",
        "border-r-2",
        "transition-all",
        "duration-300",
        "ease-in-out",
      )}
    >
      <Header />

      <Body
        router={router}
      />

      <Footer />
    </aside>
  )
}

export default Sidebar
