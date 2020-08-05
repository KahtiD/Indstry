import styled, { keyframes } from 'styled-components/macro'
// import media from 'styled-media-query'

const wobble = keyframes`
0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
`

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
        animation: ${wobble} 1s both;
        background: ${props => props.theme.brandColor};
        box-shadow: 0px 1px 20px ${props => props.theme.brandColor};
        svg {
            path {
                fill: ${props => props.theme.ui04};
            }
            
        }
    }
`  
  