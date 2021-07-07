import React from 'react';
import * as Styled from './styles.js';

const Resposta = ({ children, onChange=null, value='' }) => {
    return (
        <Styled.Message 
            placeholder="Diga oi :3"
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            {children}
        </Styled.Message>
    );
}

export default Resposta;