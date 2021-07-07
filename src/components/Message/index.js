import React from 'react';
import * as Styled from './styles.js';

const Message = ({ children, onChange=null, value='', placeholder, width }) => {
    return (
        <Styled.Message
            style={{width: `${width}`}}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            {children}
        </Styled.Message>
    );
}

export default Message;