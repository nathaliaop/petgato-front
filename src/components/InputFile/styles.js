import styled from 'styled-components'

export const InputdeFile = styled.div`
    display:flex;
    color:black;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    font-family: 'Montserrat', sans-serif;

    input{
        font-family: 'Montserrat', sans-serif;
        margin:15px 0px;
    }

    span{
        margin: 50px 0px 10px 0px;
        color: #BA66A3;
        font-weight: bold;
    }

    input::-webkit-file-upload-button{
        width:1vw;
        visibility:hidden;
    }

    input{
        width:100%;
        outline: none;
        color: #444143;
        font-size: 1.2vw;
    }

    input::before {
    content: 'Escolher arquivo';
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #C882B4;
    outline: none;
    box-sizing: border-box;
    padding: .8vw 2vw;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    color: #444143;
    font-weight: 300;
    font-size: 1.2vw;
}

`