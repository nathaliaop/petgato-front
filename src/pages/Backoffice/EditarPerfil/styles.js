import styled from 'styled-components'

export const Background = styled.div`
  margin: 30px auto;
  padding: 0;
  width: 80%;
  height: 100%;
`
export const InputContainer = styled.div`
  display: grid;
  gap: 10px 50px;  
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    ". ."
    ". .";
  margin-top: 30px; 
  
  select {
    font-size: 14px;
    padding: 5px 35px 5px 5px;
    border: 2px solid #c5a5bc;
    height: 50px;
    font-family: 'Montserrat',sans-serif;
    background-color: #fff;
    outline: none;
    color: #c5a5bc;
    margin-top: 20px;
    
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    background: url('https://static.thenounproject.com/png/551749-200.png') 95% / 5% no-repeat #FFF;

    option {
      cursor: pointer;
    }
  }

  Input { 
    &:disabled {
      background-color: #ededed;
    }
  }
`

export const Title = styled.span`
  font-family: 'Montserrat',sans-serif;
  font-size: 22px;
`

export const Subtitle = styled.span`
  font-family: 'Montserrat',sans-serif;
  color: #C882B4;
  font-size: 2rem;
  font-weight: 700;
`

export const Form = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;

`

export const ButtonContainer = styled.div`
  display: inline-flex;

  a {
    color: #BA66A3;
    text-decoration: none;
  }

  button:hover + a:hover {
    color: white;
  }

  Button { 
    margin-right: 20px;
  }
`