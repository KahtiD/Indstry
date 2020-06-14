import styled from 'styled-components/macro'

export const Line = styled.hr`
    margin-left: calc(-100vw / 2 + 1280px/ 2);
    margin-right: calc(-100vw / 2 + 1280px / 2);
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