import React from 'react'
import styled from 'styled-components'
import { useTheme, useThemeUpdate } from '@contexts/ThemeContext'

const StyledButton = styled.button`
  padding: 0.5em 0.8em;
  font-size: 1.3em;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme.color.text};
  border: 3px solid ${props => props.theme.color.text};
  border-radius: 0.5rem;
  margin: 2rem 0;
  transition: 300ms;

  &:hover {
    color: ${props => props.theme.color.background};
    background: ${props => props.theme.color.text};
  }
`

const StyledContainer = styled.div`
  padding: 2rem;
`

const StyledDescription = styled.div`
  margin-bottom: 5rem;
  h1 {
    margin-top: 1rem;
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
