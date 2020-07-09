import React from 'react'
import styled from 'styled-components/macro'
import { Bell } from '../../utils/icons'
import * as S from './SignUp.styles'

const SignUp = ({className}) => {
  
  return (
    <S.Wrapper className={className}>
      <Bell />
    </S.Wrapper>
  )
}

export default styled(SignUp)``;