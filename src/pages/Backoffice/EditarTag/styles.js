import styled from 'styled-components'

export const Background = styled.div`
  margin: auto;
  padding: 0;
  width: 80%;
  height: 100%;
`

export const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

`

export const Title = styled.a`
  font-family: 'Montserrat',sans-serif;
  font-size: 22px;
`

export const Subtitle = styled.b`
  font-family: 'Montserrat',sans-serif;
  color: #C882B4;
  font-size: 2rem;
  font-weight: 700;
`

export const InputContainer= styled.div`
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "."
    "."; 
  margin-top: 20px; 

  input{
    width: 80%;
    padding: 15px;
  }

`

export const ButtonContainer = styled.div`
  display: inline-flex;
  margin-top: 20px;

  Button{
    margin-right: 20px;
    border: 2px solid var(--rosa-media);
  }
`
