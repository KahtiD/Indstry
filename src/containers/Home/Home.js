import React from 'react'
import * as S from './Home.styles'
import { Hero, Border, PersonaCard } from '../../components'
import { useQuery } from '@apollo/react-hooks';
import { LANDINGPAGE_QUERY } from '../../utils/queries'

const Home = () => {
  const {loading, data }= useQuery(LANDINGPAGE_QUERY)
  if (loading) return 'Loading...';
  const hero = data.landingPage.hero
  const text = data.landingPage
  const personas = data.landingPage.personas
  console.log(personas)
  return (
    <>
      <Hero image={hero.image} text={hero.body.html}/>
      <Border />
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
      <Border />
    </>
  )
}

export default Home;
