import styled from 'styled-components/macro'
import media from 'styled-media-query'
// import { Logo } from '../../utils/icons'

export const AuthoWrapper = styled.div``
export const SignUp = styled.a``
export const Wrapper = styled.header`
    background: white;
    max-width: 100vw;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1.6rem;
    border-bottom: 1px solid ${props => props.theme.brandColor};
    svg {
      // > * {
        width: 60.69px;
      // }
    }
    ${AuthoWrapper} {
      color: ${props => props.theme.primaryFontColor};
      width: max-content;
      a {
        color: inherit;
        text-decoration: none;
        &:hover {
          color: ${props => props.theme.primaryHover};
        }
      }
    }
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    height: 100px;
    padding: 0rem 4.6rem;
    svg {
      // > * {
        width: 87.68px;
      // }
    }
  `}
`
