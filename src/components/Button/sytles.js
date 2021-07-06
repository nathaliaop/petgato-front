import styled from 'styled-components'

export const ButtonPrin = styled.button`
    background-color: #C882B4;
    color: #444143;
    padding: 1.75% 2.25%;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5%;
    outline: none;
    position: relative;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    font-family: 'MontSerrat', sans-serif;
    --accent-color: #C882B4;
    --color: #BA66A3;
    --rosa-claro: #FBE9F6;
    &::before{
        content: '';
        position: absolute;
        border-radius: 5%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background-color: var(--color);
        transition: transform 300ms ease-in-out;
        transform: scaleX(0);
        transform-origin: left ;
    }
    &:hover::before,
    &:focus::before{
        transform: scaleX(1);
    }
    &{
        transition: color 300ms ease-in-out;
        z-index: 1;
    }
    &:hover,
    &:focus{
        color:var(--branco);
    }
`;