import React from 'react';
// import './styles.css';
import * as Styled from './sytles.js';

const ButtonMain = ({children, onClick}) => {
    return (
        <Styled.ButtonPrin onClick={onClick}>
            {children}
        </Styled.ButtonPrin>
    );
}

export default ButtonMain;