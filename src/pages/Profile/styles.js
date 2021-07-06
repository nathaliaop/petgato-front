import styled from 'styled-components'

export const Background = styled.div`
margin: 0;
padding: 0;
display: flex;
justify-content: center;
align-items: flex-start;
margin-top: 30px;
`

export const PictureContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
    
    img.Foto{
        align-items: initial;
        object-fit: cover;
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }

    div.containerBotao{
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin: auto;
        margin-top: 5px;

        input{
          display: none;
        }
        
        label {
          cursor: pointer;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
          margin: auto;
          margin-top: 5px;
          font-family: 'Montserrat',sans-serif;
          color: #C882B4;
          font-weight: 500;
          
        }

        a{
            font-family: 'Montserrat',sans-serif;
            color: #C882B4;
            font-weight: 500;
            margin-left: 10px;
            margin-top: 3px;
        }
        
        img.Botao{
            width: 20px;
            height: 20px;
            margin: 0;
            padding: 0;
            margin-right: 10px;
        }

    }
`   

export const Form = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 50%;
  margin-left: 100px;
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

export const ButtonContainer = styled.div`
  display: inline-flex;
  
  Button {
      margin-top: 30px;
      border-radius: 10%;
      border: 2px solid var(--rosa-media);
  }
`

export const InputContainer = styled.div`
  display: grid;
  gap: 5px 10px;  
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    ". ."
    ". .";
  margin-top: 10px; 

  Input{
      margin: 0;
      width: 100%;
      &[disabled] {
        cursor: not-allowed;
        background-color: rgb(0, 0, 0, 0.10);
      }
  }
`

