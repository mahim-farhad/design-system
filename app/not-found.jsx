import classNames from "classnames"

import DynamicLink from "@components/elements/DynamicLink"
import Typography from "@components/elements/Typography"

import Main from "@components/layouts/Main"
import Section from "@components/layouts/Section"
import Container from "@components/layouts/Container"
import Box from "@components/layouts/Box"

function NotFound() {
  return (
    <Main>
      <Section
        className={classNames(
          "h-[calc(100vh-80px)]",
        )}
      >
        <Container>
          <Box
            className={classNames(
              "absolute",
              "top-1/2",
              "left-1/2",
              "-translate-y-1/2",
              "-translate-x-1/2",
              "text-center",
            )}
          >
            <Typography
              type="h1"
              className={classNames(
                "mb-3",
                "!text-8xl",
                "tracking-widest",
              )}
            >
              404
            </Typography>

            <Typography
              type="h3"
              className={classNames(
                "mb-6",
              )}
            >
              Page Not Found
            </Typography>

            <DynamicLink
              href={"/"}
              className={classNames(
                "inline-block",
                "h-12",
                "py-3",
                "px-6",
                "text-base",
                "leading-[1.65]",
                "font-medium",
                "uppercase",
                "text-gray-100",
                "bg-primary",
                "rounded-md",
              )}
            >
              Go Back To Home
            </DynamicLink>
          </Box>
        </Container>
      </Section>
    </Main>
  )
}

export default NotFound
