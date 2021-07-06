import React, {useState} from 'react';
import ButtonMain from '../../components/Button';
import InputText from '../../components/InputText';
import ImageLogin from '../../assets/Login.jpg';
import ImgLogo from '../../assets/gatinho_petgato.svg';
import * as Styled from './styles'
import api from '../../services/api';
import {useHistory} from 'react-router-dom';


const LoginPage = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');

    let history = useHistory();
    

    // // verifica se os campos estão todos preeenchidos
    // if (nome.length === 0 || email.length === 0 || senha.length === 0 || confirmSenha.length === 0) {
    //     alert('Por favor, preencha todos os campos!');
    //     return;
    // }

    const sendMessage = async (e) => {
        e.preventDefault(); // não recarregar a página
        
        // verifica se os campos estão todos preeenchidos
        if (nome.length === 0 || email.length === 0 || senha.length === 0 || confirmSenha.length === 0) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // console.log(nome);
        // console.log(email);
        // console.log(senha);
        // console.log(confirmSenha);

        api.post('/users', {
            name: nome,
            email: email,
            password: senha,
            password_confirmation: confirmSenha,
        })
        .then(() => {
            alert('Cadastro efetuado com sucesso');

            // limpa os campos preenchidos
            setNome('');
            setEmail('');
            setSenha('');
            setConfirmSenha('');
            history.push('/login');
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
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
                    <InputText value={nome} onChange={setNome}>Nome</InputText>
                    <InputText value={email} onChange={setEmail}>Email</InputText>
                    <InputText password value={senha} onChange={setSenha}>Senha</InputText>
                    <InputText password value={confirmSenha} onChange={setConfirmSenha}>Confirme sua senha</InputText>
                    <ButtonMain onClick={sendMessage} >CADASTRAR</ButtonMain>
                    <Styled.LadoaLado>
                            <p> Já possui conta? </p>
                            <a href='/login' > Faça Login </a>
                    </Styled.LadoaLado>
                </Styled.FormCadastro>
                
            </Styled.Cadastro>
        </Styled.DivLogin>
    );
}

export default LoginPage;