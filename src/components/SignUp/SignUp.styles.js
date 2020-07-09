import styled from 'styled-components/macro'
// import media from 'styled-media-query'

export const Wrapper = styled.button`
    border: 0;
    height: 68px;
    width: 68px;
    border-radius: 50%;
    background: ${props => props.theme.ui04};
    box-shadow: 0px 1px 20px #00000029;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background: ${props => props.theme.brandColor};
        box-shadow: 0px 1px 20px ${props => props.theme.brandColor};
        svg {
            path {
                fill: ${props => props.theme.ui04};
            }
            
        }
    }
`