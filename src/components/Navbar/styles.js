import styled from 'styled-components';

export const Background = styled.section`
box-sizing: border-box;
margin: 0;
padding: 0;  
overflow: hidden;
justify-content: space-between; 
box-shadow: 0px 0px 10px black;
flex-direction: column;
background-color: #BA66A3;
list-style-type: none;
height: 90px;
    ul {
        position: none;
        margin: 0;
        padding: 0;
        float: right;
        padding-right: 35px;
        text-decoration: none;
        overflow: hidden;
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        @media (max-width: 768px) {
        margin: 0;
        padding: 0;
        padding-top: 15%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-flow: column nowrap;
        font-size: 1.5rem;
        };
        
        a {
            padding: 15px;
            text-decoration: none;
            color: #fff;
            font-weight: 300;
        };
        
        a:hover {
            opacity: 1;
            position: relative;
            padding: 16px 0 5px;
            margin: 0 25px;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
            transition: 0.3s;
        };
        
        
    };
    
    li { 
        letter-spacing: 0.5px;
        margin-right: 0;
        margin-top: 35px;
        display: inline;
        float: left;
        
    @media (max-width: 768px) {
    padding: 5%;
    }
        
        
        
    };
`;

export const Logo = styled.img`
position: absolute;
z-index: 99;
margin: 0;
padding: 0;
margin-left: 4vw;
width: 100px;
height: 50px;
margin-top: 1.5%;
` 