import clsx from "clsx"

import Animate from "@components/animation/Animate"

import Typography from "@components/elements/Typography"
import Link from "@components/elements/Link"

import Container from "@components/layouts/Container"
import Box from "@components/layouts/Box"

function Footer() {
  return (
    <Animate>
      <footer
        className={clsx(
          "lg:ml-80",
          "bg-surface-light",
        )}
      >
        <Container
          className={clsx(
            "!max-w-full",
          )}
        >
          <Box
            className={clsx(
              "grid",
              "grid-cols-1 xl:grid-cols-2",
              "gap-3 xl:gap-0",
              "items-center",
              "xl:h-16",
            )}
          >
            <Box
              className={clsx(
                "col-span-1",
              )}
            >
              <Typography
                type="h6"
                className={clsx(
                  "!text-sm",
                  "font-medium",
                  "text-center xl:text-start",
                )}
              >
                Copyright
                © {new Date().getFullYear()}, {" "}
                {"<Mahim Farhad />"}
              </Typography>
            </Box>

            <Box
              className={clsx(
                "col-span-1",
              )}
            >
              <Link
                path={`/`}
                className={clsx(
                  "block",
                  "mb-1.5 xl:mb-0",
                  "!text-sm",
                  "font-medium",
                  "text-end",
                  "uppercase",
                )}
              >
                {"<Know The Developer />"}
              </Link>
            </Box>
          </Box>
        </Container>
      </footer>
    </Animate>
  )
}

export default Footer
