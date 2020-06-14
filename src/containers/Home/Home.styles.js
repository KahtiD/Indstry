import styled from 'styled-components/macro'
// import media from 'styled-media-query'
import { RichText, PersonaCard } from '../../components'

export const Title = styled.h1``
export const Description = styled(RichText)`
    margin: 0 auto;
    padding: 3rem 0rem;
    text-align: center;
    max-width: 774px;
    p {
        margin-top: 0rem;
    }
    .color {
        p {
            margin-bottom: 0rem;
        }
    }
}   
`
export const SubGrid = styled.div`
    display: grid;
    padding: 0rem 1.25rem;
    margin-bottom: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); 
    ${PersonaCard} {
        > * {
            height: 390px;
        }
        &:nth-of-type(-n+3) {
            padding-top: 0rem;
        }
        &:not(:nth-child(3n)) {
            border-right: 1px solid ${props => props.theme.brandColor};
        }
        &:not(:last-of-type) {
            border-bottom: 1px solid ${props => props.theme.brandColor};
        }
        
    }

`