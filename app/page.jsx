import classNames from "classnames"

import Button from "@components/elements/Button"

import Main from "@components/layouts/Main"
import Section from "@components/layouts/Section"
import Container from "@components/layouts/Container"
import { Grid, GridItem } from "@components/layouts/Grid"
import Flex from "@components/layouts/Flex"

function Home() {
  return (
    <Main>
      <Section>
        <Container className="max-w-[1000px]">
          <Grid
            className={classNames(
              "grid-cols-1",
              "gap-y-16",
            )}
          >
            <GridItem>
              <Flex
                className={classNames(
                  "gap-4",
                )}
              >
                <Button
                  variant="filled"
                  color="primary"
                >
                  Custom Button
                </Button>

                <Button
                  variant="filled"
                  color="secondary"
                >
                  Custom Button
                </Button>

                <Button
                  variant="filled"
                  color="info"
                >
                  Custom Button
                </Button>

                <Button
                  variant="filled"
                  color="success"
                >
                  Custom Button
                </Button>

                <Button
                  variant="filled"
                  color="warning"
                >
                  Custom Button
                </Button>

                <Button
                  variant="filled"
                  color="error"
                >
                  Custom Button
                </Button>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex
                className={classNames(
                  "gap-4",
                )}
              >
                <Button
                  variant="toned"
                  color="primary"
                >
                  Custom Button
                </Button>

                <Button
                  variant="toned"
                  color="secondary"
                >
                  Custom Button
                </Button>

                <Button
                  variant="toned"
                  color="info"
                >
                  Custom Button
                </Button>

                <Button
                  variant="toned"
                  color="success"
                >
                  Custom Button
                </Button>

                <Button
                  variant="toned"
                  color="warning"
                >
                  Custom Button
                </Button>

                <Button
                  variant="toned"
                  color="error"
                >
                  Custom Button
                </Button>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex
                className={classNames(
                  "gap-4",
                )}
              >
                <Button
                  variant="gradient"
                  color="primary"
                >
                  Custom Button
                </Button>

                <Button
                  variant="gradient"
                  color="secondary"
                >
                  Custom Button
                </Button>

                <Button
                  variant="gradient"
                  color="info"
                >
                  Custom Button
                </Button>

                <Button
                  variant="gradient"
                  color="success"
                >
                  Custom Button
                </Button>

                <Button
                  variant="gradient"
                  color="warning"
                >
                  Custom Button
                </Button>

                <Button
                  variant="gradient"
                  color="error"
                >
                  Custom Button
                </Button>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex
                className={classNames(
                  "gap-4",
                )}
              >
                <Button
                  variant="outlined"
                  color="primary"
                >
                  Custom Button
                </Button>

                <Button
                  variant="outlined"
                  color="secondary"
                >
                  Custom Button
                </Button>

                <Button
                  variant="outlined"
                  color="info"
                >
                  Custom Button
                </Button>

                <Button
                  variant="outlined"
                  color="success"
                >
                  Custom Button
                </Button>

                <Button
                  variant="outlined"
                  color="warning"
                >
                  Custom Button
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                >
                  Custom Button
                </Button>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex
                className={classNames(
                  "gap-4",
                )}
              >
                <Button
                  variant="text"
                  color="primary"
                >
                  Custom Button
                </Button>

                <Button
                  variant="text"
                  color="secondary"
                >
                  Custom Button
                </Button>

                <Button
                  variant="text"
                  color="info"
                >
                  Custom Button
                </Button>

                <Button
                  variant="text"
                  color="success"
                >
                  Custom Button
                </Button>

                <Button
                  variant="text"
                  color="warning"
                >
                  Custom Button
                </Button>

                <Button
                  variant="text"
                  color="error"
                >
                  Custom Button
                </Button>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex
                className={classNames(
                  "gap-4",
                )}
              >
                <Button
                  size="xs"
                  icon="settings"
                  variant="outlined"
                  color="primary"
                >
                  Custom Button
                </Button>

                <Button
                  size="sm"
                  icon="settings"
                  variant="outlined"
                  color="secondary"
                >
                  Custom Button
                </Button>

                <Button
                  size="base"
                  icon="settings"
                  variant="outlined"
                  color="info"
                >
                  Custom Button
                </Button>

                <Button
                  size="lg"
                  icon="settings"
                  variant="outlined"
                  color="success"
                >
                  Custom Button
                </Button>

                <Button
                  size="xl"
                  icon="settings"
                  variant="outlined"
                  color="warning"
                >
                  Custom Button
                </Button>

                <Button
                  size="xs"
                  icon="settings"
                  extended
                  variant="filled"
                  color="error"
                >
                  Custom Button
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Container>
      </Section>
    </Main>
  )
}

export default Home
