import { Link } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"

const Quote = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border-left: 6px double MediumBlue;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  font-size: 1rem;
  position: relative;
  float: right;
  clip-path: circle(50%);
  margin: 0 auto;
`

const RainbowText = styled.p`
  z-index: 2;
  line-heigth: 1.4em;
  padding: 1rem;
  font-size: 0.9em;
  margin-top: 80px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    to bottom,
    #5d00ff,
    #5d00ff 52px,
    #ff008a 82px,
    #ff008a 94px,
    #0031ad 86px,
    #0031ad
  );
`

const Intro = () => (
  <>
    <div
      style={{
        display: `grid`,
        justifyContent: `center`,
      }}
    >
      <Quote>
        <RainbowText>
          <i>Mary Wollstonecraft said of herself:</i>
          <br />
          <p style={{ fontSize: `1.6em`, lineHeight: `1em` }}>
            "I am then going to be the first of a new genus …"
          </p>
        </RainbowText>
      </Quote>
    </div>
    <main style={{ fontFamily: `Helvetica`, paddingBottom: `8rem` }}>
      <h3
        style={{
          textAlign: `center`,
          paddingTop: `-5%`,
          fontFamily: `Archivo Black`,
          fontSize: `1.6rem`,
          letterSpacing: `1px`
        }}
      >
        Who is <h1 style={{fontFamily: `Archivo Black`, letterSpacing: `1px` }}>Mary Wollstonecraft?</h1>
      </h3>

      <article style={{ padding: `5% 10% 3% 10%` }}>
      <p style={{ letterSpacing: `2px`, lineHeight: `2` }}>
          By Di Sherlock for her role as Mary Wollstonecraft in Di’s Midsummer
          Night Party, 2000, Stoke Newington Midsummer Festival
        </p>

        <p style={{ lineHeight: `1.6` }}>
          '18th century Feminist writer and mother of Mary Shelley, author of
          Frankenstein, Wollstoncraft was born Spitalfields, London, but her
          father turned to drink after losing the family fortunes, scraping a
          living as a farmer in Essex, Yorkshire and Wales. Together with Fanny
          Blood, Wollstonecraft ran a school for girls on Newington Green where
          she was soon welcomed by Dr Price into the local circle of dissenters.
          The school folded when Fanny got married. After a spell as a Governess
          in Ireland, Wollstonecraft was befriended by publisher Joseph Johnson
          who set her up with a job and lodgings. She wrote{" "}
          <i style={{ fontSize: `1.4rem`, letterSpacing: `2px` }}>
            A Vindication of the Rights of Woman (1792)
          </i>
          , was a fiery feminist polemic railing against the ‘bitter bread of
          dependence’ which kept women either ‘domestic slaves’ or ‘alluring
          mistresses’ in a time when they were denied civil, political and
          sexual rights. She demanded ‘JUSTICE for one half of the human race’.
          Her demands that women be restored ‘to their lost dignity and …
          labour’ prompted Walpole to call her ‘a hyena in petticoats’. In her
          private life she opted for ‘tumultuous passions’ as opposed to ‘the
          cold dictates of prudence’ which led to a disastrous relationship with
          American Gilbert Imlay, the birth of their daughter, Fanny, while
          alone in Paris during the revolution ( which she also documented, her
          account forming the basis of Carlyle’s French Revolution 40 years
          later) and a suicide attempt off Putney Bridge. She later married
          philosopher William Godwin and died a few days after giving birth to
          Mary (Shelley).'
        </p>
      </article>
    </main>
  </>
)

export default Intro
