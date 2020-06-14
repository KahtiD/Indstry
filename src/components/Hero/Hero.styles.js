import styled from 'styled-components/macro'
// import media from 'styled-media-query'


export const Wrapper = styled.div`
margin: 0 auto; 
display: flex;
padding: 0px 8.4rem;
align-items: center;
height: calc(100vh - 123px);
box-sizing: border-box;
`
export const Text = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    max-width: 430px;
    .color {
        color: ${props => props.theme.secondaryFontColor};
    }
    p {
        margin: 0rem;
    }
`

export const Image = styled.img.attrs(props => ({ src: props.img.url, alt: props.img.description}))`
    width: 576px;
    object-fit: cover;
    padding-left: 3rem;
`