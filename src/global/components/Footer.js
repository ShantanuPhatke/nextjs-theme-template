import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: 2rem;
  font-size: 1.5em;

  a {
    font-weight: 600;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      by{' '}
      <a href="https://www.shan10u.com/" target="_blank" rel="noreferrer">
        Shantanu Phatke
      </a>
    </StyledFooter>
  )
}

export default Footer
