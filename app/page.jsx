"use client"

import { useState } from "react"

import Range from "@components/textfields/Range"

import Main from "@components/layouts/Main"
import Section from "@components/layouts/Section"
import Container from "@components/layouts/Container"
import Box from "@components/layouts/Box"

function Home() {
  const [value, setValue] = useState(50)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Main>
      <Section>
        <Container>
          <Box>
            <div>
              <Range
                min={0}
                max={100}
                value={value}
                onChange={handleChange}
              />
              <p className="mt-4 text-center">Value: {value}</p>
            </div>
          </Box>
        </Container>
      </Section>
    </Main>
  )
}

export default Home
