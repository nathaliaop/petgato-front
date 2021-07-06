import React from 'react';
import * as Styled from './styles.js';

const Comentario = ({ children, onChange=null, value='' }) => {
    return (
        <Styled.Message 
            placeholder="Deixe uma mensagem legal UwU"
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            {children}
        </Styled.Message>
    );
}

export default Comentario;