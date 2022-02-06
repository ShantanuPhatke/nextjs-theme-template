import { useTheme, useThemeUpdate } from '@contexts/ThemeContext'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme.fontColor};
  border: 3px solid ${props => props.theme.fontColor};
  border-radius: 0.5rem;
  margin: 2rem 0;
`

const StyledContainer = styled.div`
  padding: 2rem;
`

const StyledDescription = styled.div`
  margin-bottom: 5rem;
  h1 {
    margin-top: 1rem;
    line-height: 1.5;
  }
`

const Home = () => {
  const isDarkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  return (
    <StyledContainer>
      <StyledDescription>
        <h1>
          Starter template for NextJS - Light and Dark theme setup using
          Styled-components and React Context
        </h1>
      </StyledDescription>
      <h1>Theme: {isDarkTheme ? 'Dark' : 'Light'}</h1>
      <StyledButton onClick={toggleTheme}>Toggle Theme</StyledButton>
    </StyledContainer>
  )
}

export default Home
