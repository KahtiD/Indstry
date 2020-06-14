import styled from 'styled-components/macro'
// import media from 'styled-media-query'
import { RichText, PersonaCard, Hero, Carousel } from '../../components'

export const Title = styled.h1``
export const Bio = styled(RichText)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 127px;
    padding-right: 36px;
    p {
        margin-bottom: 0rem;
    }
`
export const Image = styled.img.attrs(props => ({ src: props.image, alt: 'Yes meme'}))`
    height: 100%;
    object-fit: cover;
`
export const Description = styled(RichText)`
    margin: 0 auto;
    padding: 3rem 0rem;
    text-align: center;
    max-width: 774px;
    p {
        margin-top: 0rem;
    }
    .color {
        p {
            margin-bottom: 0rem;
        }
    }
}   
`
export const CTAText = styled(RichText)`
    max-width: 659px;
    text-align: center;
`
export const CTAButton = styled.button`
    border: 0;
    padding: 1rem 2rem;
    background: ${props => props.theme.brandColor};
    color: ${props => props.theme.tertiaryFontColor};
    font-weight: bold;
    font-size: 1rem;
    width: max-content;
    margin: 3rem 0rem 1.5rem 0rem; 
    box-shadow: 0px 0px 11px ${props => props.theme.brandColor};
    &:hover {
        background: ${props => props.theme.primaryHover};
        box-shadow: 0px 0px 11px ${props => props.theme.primaryHover};
    }
`
export const Wrapper = styled.div`
    padding: 3rem 0rem;
    // border-top: 1px solid ${props => props.theme.ui03};
    // border-bottom: 1px solid ${props => props.theme.ui03};
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`
export const CTAContainer = styled.div`
    grid-column: span 2;
    width: 100%;
    justify-self: center;
    box-shadow: 0px 0px 22px #00000029;
    margin: 6rem 0rem 3rem 0rem;
`
export const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto) 325px;
    grid-auto-rows: auto;
    grid-template-columns: auto auto;
    ${Hero}, ${Description} {
        grid-column: span 2;
    }
    ${CTAText} {
        grid-column: span 2;
        justify-self: center;
    }
    ${Carousel} {
        justify-self: center;
        grid-column: span 2;
        margin: 2.5rem 0rem;
    }

`
export const SubGrid = styled.div`
    display: grid;
    grid-column: span 2;
    padding: 0rem 1.25rem;
    margin-bottom: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); 
    ${PersonaCard} {
        > * {
            height: 390px;
        }
        &:nth-of-type(-n+3) {
            padding-top: 0rem;
        }
        &:not(:nth-child(3n)) {
            border-right: 1px solid ${props => props.theme.brandColor};
        }
        &:not(:last-of-type) {
            border-bottom: 1px solid ${props => props.theme.brandColor};
        }
        
    }

`