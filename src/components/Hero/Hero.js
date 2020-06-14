import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import styled from 'styled-components/macro'
import * as S from './Hero.styles'

const Hero = ({image, text, className}) => {
  
  return (
    <S.Wrapper className={className}>
      <S.Text>{ReactHtmlParser(text)}</S.Text>
      <S.Image img={image} />
    </S.Wrapper>
  )
}

export default styled(Hero)``;
