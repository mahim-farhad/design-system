import classNames from "classnames";

import Animate from "@components/animation/Animate";

import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import Box from "@components/layouts/Box";

function Loading() {
  return (
    <Animate>
      <Main
        className={classNames(
          "min-h-screen",
          "ml-80",
          "bg-surface-light",
        )}
      >
        <Section
          className={classNames(
            "h-screen",
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
              Loading...
            </Box>
          </Container>
        </Section>
      </Main>
    </Animate>
  );
}

export default Loading;
