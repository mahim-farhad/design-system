"use client"

import classNames from "classnames"

import useWindowSize from "@hooks/useWindowSize"

import { useSidebarSlider } from "@contexts/SidebarProvider"

import Typography from "@components/elements/Typography"
import Button from "@components/elements/Button"

import Container from "@components/layouts/Container"
import {
  Grid,
  GridItem
} from "@components/layouts/Grid"
import Flex from "@components/layouts/Flex"

function TopNav() {
  const windowSize = useWindowSize()

  const {
    sidebarSlide,
    setSidebarSlide
  } = useSidebarSlider()

  console.log(sidebarSlide)

  return (
    <nav
      className={classNames(
        "z-50",
        "fixed",
        "top-0",
        "right-0",
        "left-0 lg:pl-80",
        "flex",
        "items-center",
        "justify-center",
        "w-full",
        "h-16",
        "py-3 sm:py-4",
        "bg-surface-light",
        "border-b-2",
        "transition-all",
        "duration-300",
        "ease-in-out",
      )}
    >
      <Container>
        <Grid
          className={classNames(
            "grid-cols-2",
            "items-center",
          )}
        >
          <GridItem
            className={classNames(
              "col-span-1",
            )}
          >
            <Flex
              className={classNames(
                "gap-x-4",
                "items-center",
              )}
            >
              <Typography
                type="h6"
                className={classNames(
                  "mr-auto",
                  "font-medium",
                  "leading-normal",
                )}
              >
                {sidebarSlide ? 'true' : 'false'}
              </Typography>
            </Flex>
          </GridItem>

          <GridItem
            className={classNames(
              "col-span-1",
              "text-end",
            )}
          >
            {
              // windowSize <= 1024 &&
              <Button
                onClick={() => {
                  // if (windowSize <= 1024) {
                  document.body.classList.add(
                    "absolute",
                    "w-screen",
                    "overflow-hidden"
                  )

                  setSidebarSlide(true)
                  // }
                }}
                icon="settings"
                size="xs"
                color="white"
                className="bg-gray-100"
              />
            }
          </GridItem>
        </Grid>
      </Container>
    </nav>
  )
}

export default TopNav
