import React from 'react'
import styled from 'styled-components/macro'
import { Profile, Comment, Like, Retweet, Share } from '../../utils/icons'
import * as S from './Tweet.styles'

const Tweet = ({className, comments, retweets, likes, date, tweetNumber, author, tweet, link }) => {
  
  return (
    <S.Container className={className}>
      <Profile />
      <S.Heading>
        Can a Tweet get an A2TheYeah 
        <p>
            @#{tweetNumber}
            <S.Dot />
            {date}
        </p>
      </S.Heading>
      <S.Text>
          {tweet}
        <S.Author href={link}>{`-${author}`}</S.Author>
      </S.Text>
      <S.Wrapper>
        <S.CommentWrap><Comment />{comments}</S.CommentWrap>
        <S.RetweetWrap><Retweet />{retweets}</S.RetweetWrap>
        <S.LikeWrap><Like />{likes}</S.LikeWrap>
        <Share />
      </S.Wrapper>
    </S.Container>
  )
}

export default styled(Tweet)``;