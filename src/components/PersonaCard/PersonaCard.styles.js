import styled from 'styled-components/macro'
// import media from 'styled-media-query'

export const BorderContainer = styled.div`
    padding: 15.5px 11px;
`

export const Wrapper = styled.div`
    // width: 390px;
    // height: 390px;
    // display: grid;
    // grid-template-rows: 179px auto auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: 1px solid ${props => props.theme.ui02};
    &:hover {
        border: 1px solid ${props => props.theme.brandColor};
        box-shadow: 0px 0px 15px #00000029;
    }
`
export const Name = styled.h1`
    font-size: 1.25rem;
    font-weight: inherit;
    margin-bottom: 0rem;
    margin-top: 1.5rem;
`

export const Description = styled.p`
    font-weight: light;
    margin-top: 0rem;
`

export const Image = styled.img.attrs(props => ({ src: props.image, alt: 'Persona'}))`
    height: ${props => props.height};
    width: ${props => props.width};
    object-fit: cover;
    // align-self: stretch;
`