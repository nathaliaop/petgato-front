import styled from 'styled-components'

export const WhiteButton = styled.button`
    
    /* As cores a serem usadas: */
    --cinza-escuro: #444143;
    --cinza-claro:  #707070;
    --rosa-claro:   #FBE9F6;
    --rosa-media:   #C882B4;
    --rosa-escuro:  #BA66A3;
    --branco:       #FFFFFF;
    
    
    background-color:var(--branco);
    color: var(--cinza-escuro);
    padding: 1.75% 2.25%;
    border: none;
    outline: none;
    position: relative;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    font-family: 'MontSerrat', sans-serif;
    border: 3px solid var(--rosa-media);
    a{ 
        text-decoration: none;
        color: var(--cinza-escuro);  
    }
    

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background-color: var(--rosa-escuro);
        border: none;

        transition: transform 300ms ease-in-out;
        transform: scaleY(0);
        transform-origin: left ;
    }

    &:hover::before,
    &:focus::before{
        transform: scaleY(1);
    }

    &{
        transition: color 300ms ease-in-out, border 300ms;
        z-index: 1;
    }

    &:hover,
    &:focus{
        color:var(--branco);
        border: 10%;
    }
`;

