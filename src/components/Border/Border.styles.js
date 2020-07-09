import styled from 'styled-components/macro'

export const Wrapper = styled.div`
    background-color: white;
`

export const Line = styled.hr`
    border-top: 0px;
    &:after {
        content: '';
        position: absolute;
        border-top: 1px solid ${props => props.theme.ui02};
        border-bottom: 0px;
        width: 100%;
        transform: translateX(-50%);
        left: 50%;
    }
    &:first-of-type {
        margin-top: 0rem;
    }
    &:nth-of-type(2) {
        &:after {
            border-top: 1px solid ${props => props.theme.brandColor}; 
        }
    }
    &:last-of-type {
        margin-bottom: 0rem;
    }
`