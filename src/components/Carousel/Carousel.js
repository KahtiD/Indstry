import React, { useState } from 'react'
import styled from 'styled-components/macro'
import * as S from './Carousel.styles'
import { Tweet } from '../../components'

const Carousel = ({className, items}) => {
  const [index, setIndex] = useState(0)
  const [select, setSelected] = useState(false)
  console.log('array', items[index])
  return (
    <S.Container className={className}>
        <S.Wrapper>
            <S.Button onClick={() => { index === 0 ? setIndex(items.length - 1) : setIndex(index - 1)}}>
                <S.Prev />
            </S.Button>
                <Tweet 
                    comments={items[index].comments} 
                    retweets={items[index].retweets} 
                    likes={items[index].likes}  
                    date={items[index].date}  
                    tweetNumber={items[index].tweetNumber}   
                    author={items[index].author}   
                    tweet={items[index].tweet}  
                    link={items[index].link}  
                />
            <S.Button onClick={() => { index === items.length - 1 ? setIndex(0) : setIndex(index + 1) }}>
                <S.Next />
            </S.Button>
        </S.Wrapper>
        <S.Pagination>
            {items.map( (item, i) => 
                <S.Square  select={index === i && select} onClick={() => {setIndex(i); setSelected(true);}} />
            )}
        </S.Pagination>
    </S.Container>
  )
}

export default styled(Carousel)``;