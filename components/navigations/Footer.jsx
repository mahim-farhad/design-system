import classNames from "classnames"

import Animate from "@components/framerMotion/Animate"

import Typography from "@components/elements/Typography"
import DynamicLink from "@components/elements/DynamicLink"

import Container from "@components/layouts/Container"
import Box from "@components/layouts/Box"

function Footer() {
  return (
    <Animate>
      <footer
        className={classNames(
          "lg:ml-80",
          "bg-surface-light",
        )}
      >
        <Container
          className={classNames(
            "!max-w-full",
          )}
        >
          <Box
            className={classNames(
              "grid",
              "grid-cols-1 xl:grid-cols-2",
              "gap-3 xl:gap-0",
              "items-center",
              "xl:h-16",
            )}
          >
            <Box
              className={classNames(
                "col-span-1",
              )}
            >
              <Typography
                type="h6"
                className={classNames(
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
              className={classNames(
                "col-span-1",
              )}
            >
              <DynamicLink
                path={`/`}
                className={classNames(
                  "block",
                  "mb-1.5 xl:mb-0",
                  "!text-sm",
                  "font-medium",
                  "text-end",
                  "uppercase",
                )}
              >
                {"<Know The Developer />"}
              </DynamicLink>
            </Box>
          </Box>
        </Container>
      </footer>
    </Animate>
  )
}

export default Footer
