"use client";

import clsx from "clsx";

import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";

import Auth from "@components/forms/Auth";

function Home() {
  return (
    <Main>
      <Section
        className={clsx(
          "flex flex-col",
          "items-center justify-center",
          "h-full min-h-[calc(100vh)]",
          "md:p-16"
        )}
      >
        <Container>
          <Auth />
        </Container>
      </Section>
    </Main>
  );
}

export default Home;
