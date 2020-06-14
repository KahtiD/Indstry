import React from 'react'
import styled from 'styled-components/macro'
import ReactHtmlParser from 'react-html-parser'
import * as S from './RichText.styles'

const RichText = ({text, className}) => {

  return (
    <S.Text className={className}>{ReactHtmlParser(text)}</S.Text>
  )
}

export default styled(RichText)``