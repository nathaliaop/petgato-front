import styled from 'styled-components'

export const DivLogin = styled.div`
    font-family: 'MontSerrat', sans-serif;
    display: flex;
    font-size: 12px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

`;

export const Cadastro = styled.div`
    background-color: #FBE9F6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;

`;

export const ImagemLogin = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-size: cover;

    img{
        width:100%;
        height:100%;
    }
`;

export const FormCadastro = styled.div`
    background-color: #FBE9F6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

`;

export const LadoaLado = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size: 16px;

    a{
        margin-left: 12px;
        margin-right: 12px;
        color: #BA66A3;
        font-weight: 700; 
    }
`;

export const Logo = styled.img`
    padding-top: 20px;
    width: 200px;
    height: 80px;
`;