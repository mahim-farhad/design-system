"use client"

import classNames from "classnames"

import useWindowSize from "@hooks/useWindowSize"

import { SidebarSlider } from "@contexts/SidebarProvider"

import Typography from "@components/Typography"
import Button from "@components/Button"

import Container from "@components/layouts/Container"
import Flex from "@components/layouts/Flex"
import {
  Grid,
  GridItem
} from "@components/layouts/Grid"

function TopNav() {
  const windowSize = useWindowSize()

  const {
    sidebarSlide,
    setSidebarSlide
  } = SidebarSlider()

  return (
    <nav
      className={classNames(
        "z-50",
        "fixed",
        "top-0",
        "right-0",
        "left-0 lg:left-80",
        "flex",
        "items-center",
        "justify-center",
        "w-full",
        "h-16 lg:h-20",
        "py-3 sm:py-4",
        "bg-background-light",
        "border-b-2",
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
            <Button
              onClick={() => {
                if (windowSize.width <= 1024) {
                  document.body.style.position = "absolute"
                  document.body.style.width = "100vw"
                  document.body.style.overflow = "hidden"

                  setSidebarSlide(true)
                }
              }}
              icon="settings"
              size="xs"
            />
          </GridItem>
        </Grid>
      </Container>
    </nav>
  )
}

export default TopNav
