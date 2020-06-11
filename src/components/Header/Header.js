import React from 'react'
import * as S from './Header.styles'
import { Logo } from '../../utils/icons'

const Header = () => {
  return (
    <S.Wrapper>
      <Logo />
      <S.AuthoWrapper>
        <S.SignUp href="/#">Sign Up</S.SignUp>
      </S.AuthoWrapper>
    </S.Wrapper>
  )
}

export default Header;
