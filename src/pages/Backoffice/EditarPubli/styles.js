import styled from 'styled-components'

export const Pagina = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
`
export const SimpleInputText = styled.input`
    width: 50%;
    height: 20px;
    padding: 3px 3px;
`

export const Titulo = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    color: black;
    font-size: 50px;
    font-family: 'Montserrat', sans-serif;
`
export const EstiloPar1 = styled.h1`
    font-size:25px;
    margin: 10px 0px;
    color: #C882B4;
`

export const EstiloPar2 = styled.h2`
    font-size:20px;
    margin: 10px 0px;
    color: #444143;
`


export const Conteudo = styled.div`
    display:flex;
    
    justify-content: flex-start;
    align-items: baseline;
    /* background-color: #FBE9F6; */
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    margin: 25px 100px;

    .quill{
        width: 90%;
        height: 300px;
        margin: 25px 0px;
        border-color: #C882B4;
    }

   
`