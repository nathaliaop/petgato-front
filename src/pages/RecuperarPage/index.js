import React, {useState} from 'react';
import ButtonMain from '../../components/Button';
import InputText from '../../components/InputText';
import ImageLogin from '../../assets/Esqueci minha senha.jpg';
import ImgLogo from '../../assets/gatinho_petgato.svg';
import * as Styled from './styles'
import api from '../../services/api';
import {useHistory} from 'react-router-dom';

const EsqueciPage = () => {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const sendMessage = async (e) => {
        e.preventDefault();
        
        if (email.length === 0) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        api.post('/login/reset_password', {
            email: email,
            token: token,
            password: password
        })
        .then(() => {
            alert('Conta recuperada com sucesso!');
            setEmail('');
            history.push('/login');
        })
        .catch(error => {
            console.error(error);
            alert('Email não cadastrado. Confira o email digitado!');
        });
    }

    return (
        <Styled.DivLogin>
            <Styled.ImagemLogin> 
                <img src={ImageLogin}/>
            </Styled.ImagemLogin>
            <Styled.Cadastro>
                
                <Styled.FormCadastro>
                    <a href='/'>
                        <Styled.Logo src={ImgLogo} />
                    </a>
                    <InputText value={email} onChange={setEmail}>Email</InputText>
                    <InputText value={token} onChange={setToken}>Código</InputText>
                    <InputText password value={password} onChange={setPassword}>Senha</InputText>
                    <ButtonMain onClick={sendMessage} >RECUPERAR A SENHA</ButtonMain>
                    <Styled.LadoaLado>
                            <p> Lembrou a senha? </p>
                            <a href='/login' > Faça Login </a>
                    </Styled.LadoaLado>
                </Styled.FormCadastro>
                
            </Styled.Cadastro>
        </Styled.DivLogin>
    );
}

export default EsqueciPage;