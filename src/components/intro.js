import { Link } from "gatsby"
import React from "react"
import styled, { keyframes } from "styled-components"

const fadeInRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(-15px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `

const RainbowText = styled.p`
  font-family: Helvetica, Roboto, "Open Sans";
  z-index: 2;
  line-height: 1.6;
  padding: 1rem;
  font-size: 0.9em;
  margin-top: 40px;
  margin-bottom: 40px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeInRight} 1.4s ease-in-out;
  background-image: linear-gradient(
    to bottom,
    #5d00ff,
    #5d00ff 48px,
    rgba(246, 22, 210, 0.7) 1px,
    #0031ad 106px,
    #0031ad
  );
`

const QuotationMarks = styled.p`
  line-height: 1.8;
  position: relative;
  padding: 1em 1em;
  min-height: 5em;
  &:before {
    font-family: Yeseva One;
    font-size: 3rem;
    position: absolute;
    height: 3rem;
    content: "“";
    top: -1rem;
    left: -1rem;
  }

  &:after {
    font-family: Yeseva One;
    font-size: 3rem;
    position: absolute;
    height: 3rem;
    content: "”";
    bottom: 0rem;
    right: 0.4rem;
  }
`

const Credits = styled.h5`
  font-family: Helvetica, Roboto, "Open Sans";
  letter-spacing: 2px;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.8;
`

const Intro = () => (
  <>
    <div
      style={{
        display: `grid`,
        justifyContent: `center`,
      }}
    >
      <RainbowText>
        <i style={{ paddingLeft: `1rem` }}>
          Mary Wollstonecraft said of herself:
        </i>
        <br />
        <p
          style={{
            fontSize: `1.4em`,
            letterSpacing: `2px`,
            fontWeight: `normal`,
            paddingLeft: `1rem`,
          }}
        >
          "I am then going to be the first of a new genus …"
        </p>
      </RainbowText>
    </div>
    <main
      style={{
        fontFamily: `Helvetica, Roboto, 'Open Sans'`,
        paddingBottom: `8rem`,
      }}
    >
      <h1
        style={{
          textAlign: `center`,
          paddingTop: `-5%`,
          fontFamily: `'Archivo Black', Impact`,
          fontSize: `1.4rem`,
          letterSpacing: `1px`,
          lineHeight: `1.3`,
          marginBottom: `4rem`,
          color: `#333333`,
        }}
      >
        Who is <br />
        <b style={{ fontSize: `1.8rem` }}>Mary Wollstonecraft?</b>
      </h1>

      <article style={{ padding: `5% 8% 3% 8%` }}>
        <Credits>
          By Di Sherlock for her role as Mary Wollstonecraft <br />
          in Di’s Midsummer Night Party, 2000,
          <br /> Stoke Newington Midsummer Festival
        </Credits>

        <QuotationMarks>
          {" "}
          18th century Feminist writer and mother of Mary Shelley, author of
          Frankenstein, Wollstoncraft was born Spitalfields, London, but her
          father turned to drink after losing the family fortunes, scraping a
          living as a farmer in Essex, Yorkshire and Wales. Together with Fanny
          Blood, Wollstonecraft ran a school for girls on Newington Green where
          she was soon welcomed by Dr Price into the local circle of dissenters.
          The school folded when Fanny got married. After a spell as a Governess
          in Ireland, Wollstonecraft was befriended by publisher Joseph Johnson
          who set her up with a job and lodgings. She wrote{" "}
          <i style={{ fontSize: `1.2rem`, letterSpacing: `2px` }}>
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
          Mary (Shelley).
        </QuotationMarks>
      </article>
    </main>
  </>
)

export default Intro
