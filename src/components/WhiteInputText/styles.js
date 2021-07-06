import styled from 'styled-components'

export const InputdeTexto = styled.label`
    *,*::before, *::after{
        box-sizing: border-box;
    }
    font-family: 'Montserrat', sans-serif;
    position: relative;
    font-size: 14px;
    padding-top: 20px;
    margin-bottom: 5px;

    input{
        border: 2px solid #c5a5bc;
        -webkit-appearance: none;
        appearance: none;
        background: none;
        padding: 12px;
        border-radius: 3px;
        width: 100%;
        outline: none;
        font-size: 14px;
        transition: border-color 0.3 ease; 
    }

    span{
        position: absolute;
        left: 12px;
        top: calc(50% + 10px);
        transform: translateY(-50%);
        color: #c5a5bc;
        transition: 
            top 0.3s ease,
            font-size 0.3s ease,
            color 0.3s ease;
    }

    & input:valid + span,
    & input:focus + span{
        top: 33%;
        font-size: 10px;
        color: #BA66A3;
        background: #FFFFFF;
    }

    & input:valid + span,
    & input:focus + span{
        padding: 0 5px;
        left: 8px;
    }

    & input:valid, 
    & input:focus{
        border-color: #BA66A3;
        transition-delay: 0.1s;
    }

`;