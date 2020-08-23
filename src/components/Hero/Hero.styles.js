import styled from 'styled-components/macro'
import media from 'styled-media-query'

export const Text = styled.div`
    font-weight: bold;
    font-size: 3.125vw;
    width: 71%;
    .color {
        color: ${props => props.theme.secondaryFontColor};
    }
    p {
        margin: 0rem;
    }
    ${media.between("414px","1025px")`
    /* screen width is between a phone and a large tablet */
        font-size: 4.5vw;
    `}
    ${media.lessThan("415px")`
    /* screen width is less than a phone */
        font-size: 6.4vw;
    `}
    ${media.greaterThan("1025px")`
        width: 37%;
    `}
`
export const Image = styled.img.attrs(props => ({ src: props.img.url, alt: props.img.description}))`
    object-fit: cover;
    width: 80%;
    height: auto;
    ${media.between("414px","1025px")`
    /* screen width is between a phone and a large tablet */
        width: 70%;
    `}
    ${media.greaterThan("1025px")`
    /* screen width is more than a large tablet */
        width: 40%;
    `}
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    height: calc(100vh - 67px);
    padding: 3rem 0rem;
    position: relative;
    z-index: 2;
    width: 100%;
    ${media.greaterThan("1025px")`
    /* screen width is less than a large tablet */
        flex-direction: row;
        height: calc(100vh - 120px);
        padding: 0rem;
    `}
`
