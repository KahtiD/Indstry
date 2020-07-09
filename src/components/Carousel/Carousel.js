import React, { useState } from 'react'
import styled from 'styled-components/macro'
import * as S from './Carousel.styles'
import { Tweet } from '../../components'

const Carousel = ({className, tweets}) => {
  const [index, setIndex] = useState(0)
  const [select, setSelected] = useState(false)

  return (
    <S.Container className={className}>
        <S.Wrapper>
            <S.Button onClick={() => { index === 0 ? setIndex(tweets.length - 1) : setIndex(index - 1)}}>
                <S.Prev />
            </S.Button>
                <Tweet 
                    img={tweets[index].image}
                    // comments={items[index].comments} 
                    // retweets={items[index].retweets} 
                    // likes={items[index].likes}  
                    // date={items[index].date}  
                    // tweetNumber={items[index].tweetNumber}   
                    // author={items[index].author}   
                    // tweet={items[index].tweet}  
                    // link={items[index].link}  
                />
            <S.Button onClick={() => { index === tweets.length - 1 ? setIndex(0) : setIndex(index + 1) }}>
                <S.Next />
            </S.Button>
        </S.Wrapper>
        <S.Pagination>
            {tweets.map( (item, i) => 
                <S.Square  select={index === i ? select || true : null} onClick={() => {setIndex(i); setSelected(true);}} />
            )}
        </S.Pagination>
    </S.Container>
  )
}

export default styled(Carousel)``;