import React from 'react';
import * as Styled from './styles.js'

const InputFile = ({value, onChange}) => {
    
    return (
        <Styled.InputdeFile>
            <span>Escolha uma imagem de capa:</span>
            <input value={value} onChange={onChange} type='file' accept="image/png, image/gif, image/jpeg" />
        </Styled.InputdeFile>
    );
}

export default InputFile