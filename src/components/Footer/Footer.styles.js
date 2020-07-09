import styled from 'styled-components/macro'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 104px;
    max-width: 100vw;
    background: ${props => props.theme.ui05};
    padding: 0rem 1.6rem;
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        padding: 0rem 4.6rem;
    `}
`
export const Text = styled.p``
export const Socials = styled.p`
    svg {
        &:not(:last-child) {
            margin-right: 1.6rem;
        }
    }
`