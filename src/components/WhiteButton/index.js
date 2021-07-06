import React from 'react';
import * as Styled from './sytles.js';

const WhiteButton = ({ children, onClick=null }) => {
    console.log(onClick);
    return (
        <Styled.WhiteButton onClick={onClick} >
            {children}
        </Styled.WhiteButton>
    );
}

export default WhiteButton;