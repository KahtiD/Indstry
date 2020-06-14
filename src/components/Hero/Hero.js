import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import * as S from './Hero.styles'

const Hero = ({image, text}) => {
  
  return (
    <S.Wrapper>
      <S.Text>{ReactHtmlParser(text)}</S.Text>
      <S.Image img={image} />
    </S.Wrapper>
  )
}

export default Hero;
