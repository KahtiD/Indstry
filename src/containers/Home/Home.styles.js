import styled, { keyframes, css } from 'styled-components/macro'
import media from 'styled-media-query'
import { RichText, PersonaCard, Carousel, SignUp, Border, ExperienceCard } from '../../components'

export const Title = styled.h1``

export const BioText = styled(RichText)`
    font-size: 1rem;
    padding-bottom: 3rem;
    p {
        margin-bottom: 0rem;
        code {
            font-family: ${props => props.theme.tertiaryFont};
        }
    }
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        font-size: 1.25rem;
        max-width: 457px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0rem;
    `}
`
export const Image = styled.img.attrs(props => ({ src: props.image, alt: 'Yes meme'}))`
    width: 80%;
    height: auto;
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        max-height: 338px;
        object-fit: cover;
    `}
`
export const BioWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 3rem 2rem;
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        flex-direction: row;
        // padding: 3rem 2rem;
    `}
`
export const BorderExt = styled(Border)`
    hr:nth-of-type(2):after {
        border-top: 1px solid ${props => props.theme.ui02} !important;
    }
`
export const Description = styled(RichText)`
    padding: 3rem 2rem;
    font-size: 1rem;
    p {
        margin-top: 0rem;
    }
    .color {
        p {
            margin-bottom: 0rem;
            font-family: ${props => props.theme.secondaryFont};
            font-weight: 600;
        }
    }
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        padding: 4rem 3.5rem;
        font-size: 1.25rem;
    `}
}   
`

export const CTAButton = styled.button`
    border: 0;
    padding: 1rem 1.5rem;
    background: ${props => props.theme.ui02};
    color: ${props => props.theme.tertiaryFontColor};
    font-weight: bold;
    font-size: 1rem;
    width: max-content;
    margin: 2rem 0rem 1.5rem 0rem; 
    box-shadow: 0px 0px 11px ${props => props.theme.ui02};
    &:hover {
        background: ${props => props.theme.primaryHover};
        box-shadow: 0px 0px 11px ${props => props.theme.primaryHover};
    }
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        padding: 1rem 2rem;
    `}
`
export const CTAText = styled(RichText)`
    text-align: center;
    font-size: 1rem;
    color: ${props => props.theme.primaryFontColor};
    // padding: 3rem 1.5rem 1.5rem 1.5rem;
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        font-size: 1.25rem;
    `}
`
export const CTAWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        padding: 4.5rem 0rem;
    `}
    ${media.greaterThan("1280px")`
    /* screen width is less than 768px (medium) */
        border-left: 1px solid ${props => props.theme.brandColor};
        border-right: 1px solid ${props => props.theme.brandColor};
    `}
`
export const CTAContainer = styled.div`
    > * {
        z-index: 1;
    }
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 12px 20px -4px ${props => props.theme.ui02};
    padding: 2rem;
    .emphasis {
        font-family: ${props => props.theme.tertiaryFont};
        color: black;
    }
    &:after {
        content: '';
        width: 100vw;
        height: 100%;
        background-color: white;
        position: absolute;
        // box-shadow: 0 12px 20px -4px ${props => props.theme.ui02};
    }
`
export const ExperienceText = styled(RichText)`
    code {
        font-family: ${props => props.theme.tertiaryFont};
    }
    padding-bottom: 3rem; 
    font-size: 1rem;
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        font-size: 1.25rem;
    `}
`
export const ExperiencesContainer = styled.div`
    padding: 3rem 2rem;
    background: ${props => props.theme.ui05};
    display: grid;
    box-shadow: inset 0 -6px 12px -6px ${props => props.theme.ui02};
    grid-template-rows: auto;
    grid-template-columns: auto;
    ${ExperienceCard} {
        width: 80%;
        justify-self: center;
    }
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        padding: 0rem 3.5rem; 
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: none;
        grid-column-gap: 3.5rem;
        ${ExperienceCard} {
            margin-bottom: 4.5rem;
            width: 343px;
        }
        ${ExperienceText} {
            grid-column: span 3;
            margin-top: 4.5rem;
        }
    `}
`

export const Grid = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto;
    box-shadow: inset 6px 6px 12px -6px ${props => props.theme.ui02}, inset -6px 0 12px -6px ${props => props.theme.ui02};
    ${Border} {
        z-index: 10;
    } 
    ${SignUp} {
        position: fixed; 
        bottom: 4rem;
        z-index: 10;
        right: 1rem;
    }
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        ${CTAText} {
            justify-self: center;
        }
        ${Carousel} {
            justify-self: center;
            margin: 2.5rem 0rem;
        }
        ${SignUp} {
            right: 2rem;
            bottom: 6rem;
        }
    `}
`
export const PersonaGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    padding: 0rem 1rem 3rem 1rem;
    ${PersonaCard} {
        > * {
            width: 100%;
        }
        &:nth-of-type(-n+2) {
            padding-top: 0rem;
        }
        &:not(:nth-of-type(even)) {
            border-right: 1px solid ${props => props.theme.brandColor};
        }
        &:not(:last-of-type) {
            border-bottom: 1px solid ${props => props.theme.brandColor};
        }
        &:last-of-type {
            padding-bottom: 0rem;
        }
    }
    ${media.greaterThan("855px")`
        padding: 0rem 2rem;
        margin-bottom: 3rem;
        // grid-auto-rows: 424px;
        grid-template-columns: repeat(3, 1fr); 
        ${PersonaCard} {
            > * {
                width: 100%;
                background-color: white;
            }
            &:nth-of-type(-n+3) {
                padding-top: 0rem;
            }
            &:nth-of-type(even) {
                border-right: 1px solid ${props => props.theme.brandColor};
            }
            &:nth-of-type(3n) {
                border-right: 0rem;
            }
            &:not(:nth-child(3n)):not(nth-child(3)) {
                border-right: 1px solid ${props => props.theme.brandColor};
            }
            &:last-of-type {
                grid-column: 2 / 3;
            }
            &:nth-child(3), :nth-child(6) {
                padding-right: 0rem;
            }
            &:nth-child(1), :nth-child(4) {
                padding-left: 0rem;
            }
        }
        &:before {
            content: '';
            border-right: 1px solid ${props => props.theme.brandColor};
            grid-row: 3 / span 1;
            grid-column: 1 / 2;
        }
    `}
`
const reveal = keyframes`
    0% {
    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: inset 0 0 22px 0px rgba(0, 59, 255, 0.5);
  }
`
const fadeOut = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(50px);
        opacity: 0;
    }
`

export const CloseButton = styled.button`
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        top: 0;
        right: 0;
        margin-right: 3.125rem;
        margin-top: 3.125rem;
        padding: 0rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: none;
        // &:hover {
        //     svg {
        //          * > {
        //             stroke: ${props => props.theme.brandColor};
        //           }  
        //     }
        // }
`
export const DetailsImage = styled.img.attrs(props => ({ src: props.img.url, alt: 'Yes meme'}))`
    object-fit: cover;
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        margin-bottom: 3.125rem;
    `}
`
export const DetailsName = styled.h1`
        font-size: 0.9rem;
        font-family: ${props => props.theme.tertiaryFont};
        margin: 0rem;
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        font-size: 1.25rem;
    `}
`
export const DetailsDescription = styled.p`
        margin: 0rem;
        font-size: 0.9rem;
        ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        font-size: 1.25rem;
    `}
`
export const DetailsText = styled(RichText)`
        font-size: 1rem;
        margin: 2rem;
        margin-top: 0rem;
        .colour {
            color: ${props => props.theme.brandColor};
        }
        code {
            font-family: ${props => props.theme.tertiaryFont};
        }
        ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        margin: 0rem;
        width: 56%;
    `}
`
export const DetailsPersonaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 24%;
    margin-top: 2rem;
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        width: 17%;
        margin: 0rem;
    `}
`
export const DetailsContainer = styled.div`
    background-color: ${props => props.theme.ui04};
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    animation: ${reveal} 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    // animaition-delay: 0.8s;
    ${props => props.fadeOut && css`
        animation: ${fadeOut} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    `}
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        font-size: 1.25rem;
        flex-direction: row;
        height: 100vh;
    `}
`

  