import React from 'react'
import * as S from './Footer.styles'
import { Twitter, Instagram } from '../../utils/icons'

const Footer = () => {
  return (
    <S.Wrapper>
        <S.Socials>
            <Instagram />
            <Twitter />
        </S.Socials>
        <S.Text><span role="img" aria-label="copyright icon">©️ </span>Indstry 2020</S.Text>
    </S.Wrapper>
  )
}

export default Footer;