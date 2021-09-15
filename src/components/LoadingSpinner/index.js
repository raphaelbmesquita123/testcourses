import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

//styles
import { Container } from './styles'
import { css } from '@emotion/react'

export function LoadingSpinner({ loading }) {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: blue;
  `
  return (
    <Container>
      <ClipLoader loading={loading} css={override} size={150} />
    </Container>
  )
}
