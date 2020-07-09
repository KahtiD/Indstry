import React from 'react'
import * as S from './Border.styles'
import styled from 'styled-components/macro'

const Border = ({className}) => {
  return (
    <S.Wrapper className={className}>
      <S.Line></S.Line>
      <S.Line></S.Line>
      <S.Line style={{padding: "0rem"}}></S.Line>
    </S.Wrapper>
  )
}

export default styled(Border)``;
