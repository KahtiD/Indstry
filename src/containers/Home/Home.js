import React from 'react'
import * as S from './Home.styles'
import { Hero, Border, PersonaCard, Tweet, Carousel, SignUp, ExperienceCard } from '../../components'
import { useQuery } from '@apollo/react-hooks';
import { LANDINGPAGE_QUERY } from '../../utils/queries'

const Home = () => {
  const {loading, data }= useQuery(LANDINGPAGE_QUERY)
  if (loading) return 'Loading...';
  const hero = data.landingPage.hero
  const text = data.landingPage
  const personas = data.landingPage.personas
  const experienceCards = data.landingPage.experienceCards
  const tweets = data.landingPage.tweets
  console.log(experienceCards)
  return (
    <S.Grid>
      <Hero image={hero.image} text={hero.body.html}/>
      <Border />
      <S.Description text={text.description.html} />
      <S.PersonaGrid>
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
      </S.PersonaGrid>
      <Border />
      <S.BioWrapper>
        <S.BioText text={text.bio.body.html}/>
        <S.Image image={text.bio.image.url} />
      </S.BioWrapper>
      <S.BorderExt />
      <S.CTAContainer>
        <S.CTAWrapper>
          <S.CTAText text={text.cta.body.html}/>
          <S.CTAButton>{text.cta.buttonText}</S.CTAButton>
        </S.CTAWrapper>
      </S.CTAContainer>
      <S.ExperiencesContainer>
        <S.ExperienceText text={text.experienceText.html} />
        {experienceCards.map( card => (
            <ExperienceCard 
              key={card.id}
              heading={card.heading.html}
              image={card.image}
              link={card.link}
            />
          )
        )}
        {/* <S.ExperienceText text={text.tweetCta.html} /> */}
        {/* <Carousel items={tweets}/> */}
        {/* <SignUp /> */}
      </S.ExperiencesContainer>
      
    </S.Grid>
  )
}

export default Home;
