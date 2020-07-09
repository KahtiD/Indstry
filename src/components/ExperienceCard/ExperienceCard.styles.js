import styled from 'styled-components/macro'
// import media from 'styled-media-query'

export const Wrapper = styled.div`
    max-width: 343px;
`
export const Text = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.25rem;
    font-weight: normal;
    font-family: ${props => props.theme.secondaryFont};
    code {
        font-family: ${props => props.theme.secondaryFont};
        font-weight: 600;
    }
`

export const Image = styled.img.attrs(props => ({ src: props.img.url, alt: props.img.description}))`
    object-fit: cover;
    width: 343px;
    height: auto;
`

export const Link = styled.a`
    width: max-content;
    height: auto;
    pointer: cursor;
` 