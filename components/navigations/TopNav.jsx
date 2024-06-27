"use client"

import clsx from "clsx"

import { useToggleSidebar } from "@contexts/SidebarProvider"

import Typography from "@components/elements/Typography"
import Button from "@components/elements/Button"

import Container from "@components/layouts/Container"
import {
  Grid,
  GridItem
} from "@components/layouts/Grid"
import Flex from "@components/layouts/Flex"

function TopNav() {
  const { openSidebar } = useToggleSidebar()

  return (
    <nav
      className={clsx(
        "z-20",
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
          className={clsx(
            "grid-cols-2",
            "items-center",
          )}
        >
          <GridItem
            className={clsx(
              "col-span-1",
            )}
          >
            <Flex
              className={clsx(
                "gap-x-4",
                "items-center",
              )}
            >
              <Typography
                type="h6"
                className={clsx(
                  "mr-auto",
                  "font-medium",
                  "leading-normal",
                )}
              >
                Dashboard
              </Typography>
            </Flex>
          </GridItem>

          <GridItem
            className={clsx(
              "col-span-1",
              "text-end",
            )}
          >
            {
              <Button
                size="xs"
                variant="outlined"
                color="secondary"
                onClick={openSidebar}
              >dfs</Button>
            }
          </GridItem>
        </Grid>
      </Container>
    </nav>
  )
}

export default TopNav
