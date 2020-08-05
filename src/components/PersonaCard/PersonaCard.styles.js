import styled, { keyframes }  from 'styled-components/macro'
import media from 'styled-media-query'


const onHover = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.03);
    }
`
const slideIn = keyframes`
    0% {
        transform: translateY(100px);
    }
    100% {
        transform: translateY(1);
    }
`

export const BorderContainer = styled.div`
    padding: 15.5px 11px;
    display: flex;
    animation: ${slideIn} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`
export const Name = styled.h1`
    font-weight: inherit;
    margin-top: 1.5rem;
    font-family: ${props => props.theme.tertiaryFont};
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        margin-bottom: 0rem;
    `}
`

export const Description = styled.p`
    margin-top: 0rem;
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem;
    border: 1px solid ${props => props.theme.ui02};
    &:hover {
        border: none;
        box-shadow: 0px 0px 15px #00000040;
        animation: ${onHover} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    ${Name}, ${Description} {
        font-size: 0.75rem;
        text-align: center;
    }
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        padding: 4.5rem 2rem;
        ${Name}, ${Description} {
            font-size: 1.38vw;
        }
    `}
`
export const Image = styled.img.attrs(props => ({ src: props.image, alt: 'Persona'}))`
    object-fit: cover;
    max-width: 100%;
    height: auto;
    ${media.lessThan("411px")`
    /* screen width is less than 768px (medium) */
        height: 75px;
        width: auto
    `}
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        height: ${props => props.height};
        width: ${props => props.width};
    `}
`