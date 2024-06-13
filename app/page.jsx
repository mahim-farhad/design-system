import clsx from "clsx";

import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";

import Auth from "@components/forms/Auth";
import Link from "@components/elements/Link";

function Home() {
  return (
    <Main>
      <Section
        className={clsx(
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
          "h-full",
          "min-h-[calc(100vh)]",
          "md:p-16",
        )}
      >
        <Container>
          <Auth />

          <Link href="/"></Link>
        </Container>
      </Section>
    </Main>
  );
}

export default Home;
