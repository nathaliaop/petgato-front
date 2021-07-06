import React, { useState } from 'react'
import styled from 'styled-components'
import Rightnav from '../Navbar/Rightnav'

const StyledBurguer = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 99;
    display: none;
    @media (max-width: 768px) {
        cursor: pointer;
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div{
        width: 2rem;
        height: 0.25rem;
        box-shadow: 0px 0px 4px pink;
        background-color: ${({open}) => open? '#fff' : '#fff'}; 
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.2s linear;
        &:nth-child(1){
            transform: ${({open}) => open? 'rotate(45deg)' :  'rotate(0)'};
        }
        &:nth-child(2){
            transform: ${({open}) => open? 'translateX(100%)' :  'translateX(0)'};
            opacity: ${({open}) => open? '0':'1'};
        }
        &:nth-child(3){
            transform: ${({open}) => open? 'rotate(-45deg)' :  'rotate(0)'}
        }
    }
`

const Burguer = ({backoffice}) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <StyledBurguer open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurguer>
            <Rightnav backoffice={backoffice} open={open}/>
        </>
    )
}

export default Burguer
