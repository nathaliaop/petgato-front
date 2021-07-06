import React from 'react';
import * as styled from './styles';

import WhiteInputText from '../../../components/WhiteInputText';
import Button from '../../../components/Button';
import WhiteButton from '../../../components/Contact Button';


function EditarTag() {
  return (
    <styled.Background>
      <styled.Form>
        <styled.Title> BACKOFFICE </styled.Title>
        <styled.Subtitle> Editar Tag </styled.Subtitle>
        <styled.InputContainer>
          <WhiteInputText children='Nome da Tag' />
          <WhiteInputText children='Descrição da Tag' />
        </styled.InputContainer>
        <styled.ButtonContainer>
          <Button children='Salvar' />
          <WhiteButton children='Voltar' />
        </styled.ButtonContainer>
      </styled.Form>
    </styled.Background>
      
    
  )
}

export default EditarTag;
