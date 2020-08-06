import styled from 'styled-components/macro'
import media from 'styled-media-query'

export const Wrapper = styled.div`
    width: 100%;
`
export const Text = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1rem;
    font-weight: normal;
    font-family: ${props => props.theme.secondaryFont};
    code {
        font-family: ${props => props.theme.secondaryFont};
        font-weight: 600;
    }
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        font-size: 1.25rem;
    `}
`

export const Image = styled.img.attrs(props => ({ src: props.img.url, alt: props.img.description}))`
    object-fit: cover;
    width: inherit;
    height: auto;
    background-color: grey;
`

export const Link = styled.a`
    width: 100%;
    height: 100%;
    pointer: cursor;
` 