import React from 'react'
import styled from 'styled-components/macro'
import ReactHtmlParser from 'react-html-parser'
import * as S from './ExperienceCard.styles'

const ExperienceCard = ({className, heading, link, image}) => {
  console.log(link)
  return (
    <S.Wrapper className={className}>
      <S.Text>{ReactHtmlParser(heading)}</S.Text>
      <S.Link href={link}>
        <S.Image img={image}/>
      </S.Link>
    </S.Wrapper>
  )
}

export default styled(ExperienceCard)``;