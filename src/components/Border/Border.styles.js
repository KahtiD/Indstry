import styled from 'styled-components/macro'

export const Line = styled.hr`
width: 100vw;
position: relative;
left: 50%;
right: 50%;
margin-left: -50vw;
margin-right: -50vw;
    color: ${props => props.theme.ui01};
    &:first-of-type {
        margin-top: 0rem;
    }
    &:nth-of-type(2) {
        color: ${props => props.theme.brandColor};
    }
    &:last-child {
        margin-bottom: 0rem;
    }
`