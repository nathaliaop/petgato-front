import React, { useState } from 'react';
import Message from '../../components/Contact Message';
import Input from '../../components/Contact Input';
import Button from '../../components/WhiteButton';
import Doguinho from './Doguinho.jpg';


import * as Styled from './styles'
import api from '../../services/api';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault(); // não recarregar a página
        
        // verifica se os campos estão todos preeenchidos
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        api.post('/contacts', {
            name: name,
            email: email,
            description: message
        })
        .then(() => {
            alert('Mensagem enviada com sucesso!');

            // limpa os campos preenchidos
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });
    }

    return (
        <div>
        <Styled.Contact>
            <Styled.Image src={Doguinho} alt="doguinho"/>
            <Styled.Form>
                <Styled.Title> FALE CONOSCO</Styled.Title>
                <Styled.Subtitle>Envie-nos uma mensagem de cão-tato</Styled.Subtitle>
                <Styled.FormContainer>
                    <Styled.FormInput>
                        <Styled.Label>Nome</Styled.Label>
                        <Input value={name} onChange={setName} ></Input>
                    </Styled.FormInput>
                    <Styled.FormInput>
                        <Styled.Label>Email</Styled.Label>
                        <Input value={email} onChange={setEmail} ></Input>
                    </Styled.FormInput>
                </Styled.FormContainer>
                <Styled.Label>Mensagem</Styled.Label>
                <Message value={message} onChange={setMessage}></Message>
                <Styled.FormContainer>
                    <Styled.Submit>
                        <Button onClick={sendMessage}>Enviar</Button>
                    </Styled.Submit>
                </Styled.FormContainer>
            </Styled.Form>
        </Styled.Contact>
        </div>
);
}

export default Contact;