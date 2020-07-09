import styled , { css } from 'styled-components/macro'
import media from 'styled-media-query'
import { Control } from '../../utils/icons'

export const Button = styled.button`
    border: 0;
    background: none;
`
export const Tweet = styled.img.attrs(props => ({ src: props.img.url, alt: props.img.description}))`

`
export const Prev = styled(Control)``
export const Next = styled(Control)``
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${Button} {
        display: none;
    }
    ${Tweet} {
        width: 343px;
    }
    ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
        ${Button} {
            display: inline-flex;
        }
        ${Prev} {
            margin-right: 2rem;
        }
        ${Next} {
            margin-left: 2rem;
        }
        ${Prev}, ${Next}  {
            &:hover {
            line {
                    stroke: ${props => props.theme.brandColor};
            } 
            }
        }
        ${Tweet} {
            width: 734px;
            height: auto;
        }
    `}
    
`
export const Pagination = styled.div`
    // width: max-content;
    display: flex;
`

export const Square = styled.div`
    width: 18px;
    height: 18px;
    border: 1px solid ${props => props.theme.ui01};
    &:not(:last-of-type) {
        margin-right: 10px;
    }
    ${props => props.select && css`
        background: ${props => props.theme.ui01};
    `}
`

