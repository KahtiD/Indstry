import styled from 'styled-components/macro'
import { TweetContainer } from '../../utils/svgs'
import { Profile } from '../../utils/icons'
// import media from 'styled-media-query'

export const Heading = styled.h1`
    font-size: 1rem;
    // font-family: 'Indie Flower'
    font-weight: normal;
    grid-column: 2 / span 4;
    p {
        display: inline-flex;
        align-items: center;
        font-weight: normal;
        padding-left: 0.5rem;
    }
`
export const Text = styled.p`
    // margin-top: 0rem;
`
export const Author = styled.a`
    text-decoration: none;
    color: inherit;
    font-family: inherit;
`
export const CommentWrap = styled.div``
export const LikeWrap = styled.div``
export const RetweetWrap = styled.div``
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    svg {
        width: 1rem !important;
        padding-right: 1rem;
    }
`

export const Dot = styled.span`
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: ${props => props.theme.brandColor};
    margin: 0rem 0.5rem;
`

export const Container = styled.div`
    background: url('${TweetContainer}') no-repeat;
    background-size: cover;
    // border: 1px solid ${props => props.theme.brandColor};
    width: 100%;
    display: grid;
    padding: 2rem 3.375rem;
    grid-column-gap: 1rem;
    color: ${props => props.theme.brandColor};
    grid-template-columns: repeat(5, auto);
    grid-temaplte-rows: repeat(3, auto);
    ${Heading}, ${Text}, ${Wrapper} {
        grid-column: 2 / end;
    }
    svg {
        width: 50px;
        grid-column: 1 / span 1;
        align-self: center;
    }
`

