import React from 'react';
import * as Styled from './styles.js';

const Message = ({ children, onChange=null, value='' }) => {
    return (
        <Styled.Message 
            placeholder="Digite aqui a sua meow-sagem..."
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            {children}
        </Styled.Message>
    );
}

export default Message;