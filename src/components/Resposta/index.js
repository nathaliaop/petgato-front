import React from 'react';
import * as Styled from './styles.js';

const Resposta = ({ children, onChange=null, value='', placeholder }) => {
    return (
        <Styled.Message
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            {children}
        </Styled.Message>
    );
}

export default Resposta;