import React from 'react'
import * as S from './PersonaCard.styles'
import styled from 'styled-components/macro'

const PersonaCard = ({image, name, description, width, height, className}) => {
    
  return (
    <S.BorderContainer className={className}>
        <S.Wrapper>
            <S.Image image={image && image.url} width={width} height={height} />
            <S.Name>{name}</S.Name>
            <S.Description>{description}</S.Description>
        </S.Wrapper>
    </S.BorderContainer>
  )
}

export default styled(PersonaCard)``;