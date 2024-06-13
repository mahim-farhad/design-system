import clsx from "clsx";

import Animate from "@components/animation/Animate";

import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import Box from "@components/layouts/Box";

function Loading() {
  return (
    <Animate>
      <Main
        className={clsx(
          "min-h-screen",
          "ml-80",
          "bg-surface-light",
        )}
      >
        <Section
          className={clsx(
            "h-screen",
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
              Loading...
            </Box>
          </Container>
        </Section>
      </Main>
    </Animate>
  );
}

export default Loading;
