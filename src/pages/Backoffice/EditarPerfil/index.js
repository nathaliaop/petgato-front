import React from 'react';
import { useHistory } from 'react-router-dom';
import * as styled from './styles';

import WhiteInputText from '../../../components/WhiteInputText';
import Button from '../../../components/Button';
import WhiteButton from '../../../components/Contact Button';

function BackofficeEditarUsuario() {
  const history = useHistory();

  return (
    <>
    <styled.Background >
      <styled.Form>
        <styled.Title> BACKOFFICE </styled.Title>
        <styled.Subtitle> Editar Usuário </styled.Subtitle>
          <styled.InputContainer >
            <WhiteInputText children='Nome' />
            <WhiteInputText children='Email' disabled />
            <select>
              <option children='Tipo de Usuário'>
                Administrador
              </option>
                <option>Usuário</option>
            </select>
            <WhiteInputText children='Data de ingresso' disabled />
          </styled.InputContainer>
        <styled.ButtonContainer>
          <Button children='Salvar' />
          <WhiteButton onClick={() => history.push('/backofficeUsuario')} children='Voltar' />
        </styled.ButtonContainer>  
      </styled.Form>
    </styled.Background> 
    </>
  )
}

export default BackofficeEditarUsuario;
