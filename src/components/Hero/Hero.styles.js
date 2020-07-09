import styled from 'styled-components/macro'
import media from 'styled-media-query'

export const Text = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
    max-width: 269px;
    margin-bottom: 2.4rem;
    .color {
        color: ${props => props.theme.secondaryFontColor};
    }
    p {
        margin: 0rem;
    }
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        max-width: 430px;
        font-size: 2.7vw;
        margin: 0rem;
    `}
`
export const Image = styled.img.attrs(props => ({ src: props.img.url, alt: props.img.description}))`
    object-fit: cover;
    max-width: 321px;
    height: auto;
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        max-width: 509px;
    `}
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    height: calc(100vh - 67px);
    padding: 3rem 0px;
    // box-shadow: inset 0 6px 12px -6px ${props => props.theme.ui02};
    position: relative;
    z-index: 2;
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        flex-direction: row;
        height: calc(100vh - 120px);
        padding: 0rem;
    `}
`
