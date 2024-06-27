import clsx from "clsx"

import Typography from "@components/elements/Typography"

import Main from "@components/layouts/Main"
import Section from "@components/layouts/Section"
import Container from "@components/layouts/Container"
import Box from "@components/layouts/Box"

function NotFound() {
  return (
    <Main>
      <Section
        className={clsx(
          "h-[calc(100vh-80px)]",
        )}
      >
        <Container>
          <Box
            className={clsx(
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
              className={clsx(
                "mb-3",
                "!text-8xl",
                "tracking-widest",
              )}
            >
              404
            </Typography>

            <Typography
              type="h3"
              className={clsx(
                "mb-6",
              )}
            >
              Page Not Found
            </Typography>
          </Box>
        </Container>
      </Section>
    </Main>
  )
}

export default NotFound
