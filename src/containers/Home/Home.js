import React from 'react'
import * as S from './Home.styles'
import { Hero, Border, PersonaCard, Tweet, Carousel } from '../../components'
import { useQuery } from '@apollo/react-hooks';
import { LANDINGPAGE_QUERY } from '../../utils/queries'

const Home = () => {
  const {loading, data }= useQuery(LANDINGPAGE_QUERY)
  if (loading) return 'Loading...';
  const hero = data.landingPage.hero
  const text = data.landingPage
  const personas = data.landingPage.personas
  const tweets = data.landingPage.tweets
  console.log(tweets)
  return (
    <S.Grid>
      <Hero image={hero.image} text={hero.body.html}/>
      {/* <Border /> */}
      <S.Description text={text.description.html} />
      <S.SubGrid>
        {personas.map( (persona, i) => (
          <PersonaCard
            key={i}  
            name={persona.name}
            description={persona.description}
            image={persona.image}
            width={persona.width}
            height={persona.height}

          />
        ))}
      </S.SubGrid>
      <S.Bio text={text.bio.body.html}/>
      <S.Image image={text.bio.image.url} />
      {/* <Border /> */}
      <S.CTAContainer>
        <S.Wrapper>
          <S.CTAText text={text.cta.body.html}/>
          <S.CTAButton>{text.cta.buttonText}</S.CTAButton>
        </S.Wrapper>
      </S.CTAContainer>
      <S.CTAText text={text.twitterIntro}/>
      <Carousel items={tweets}/>
    </S.Grid>
  )
}

export default Home;
