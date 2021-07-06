import React, { useLayoutEffect, useContext, useState, useEffect, createContext} from 'react';
import * as styled from './styles';
import api from '../../services/api';

import Cintia from './Cintia.jpg';
import CameraIcon from './Camera.svg';

import WhiteButton from '../../components/WhiteButton';
import WhiteInputText from '../../components/WhiteInputText';



const Profile = () => {
    
    const [profileImage, setProfileImage] = useState('')
    const [previewprofileImage, setPreviewProfileImage] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newpasswordConfirmation, setNewPasswordConfirmation] = useState('')
    
    useEffect(() => {
        api.get('/users/' + localStorage.getItem('user_id'), {
            headers: {
                Authorization : localStorage.getItem('token') 
            },
        })
        .then(res => {
            console.log(res.data)
            setName(res.data.name)
            setEmail(res.data.email)
            setPreviewProfileImage(res.data.photo)
        })
    }, [])

    if(!previewprofileImage){
        setPreviewProfileImage('https://img.icons8.com/cotton/2x/gender-neutral-user--v2.png')
    }

    const imageHandler = (e) =>{
        setProfileImage(e.target.files[0]) 
        const reader = new FileReader();
        reader.onload = () => { 
            if(reader.readyState === 2)
                setPreviewProfileImage(reader.result)
        }
    reader.readAsDataURL(e.target.files[0])
    }
    
    const submitHandler = () => {
        const formData = new FormData();
        const token = localStorage.getItem('token');
        formData.append('name', name);
        formData.append('password', newPassword);
        formData.append('password_confirmation', newpasswordConfirmation);
        
        if(profileImage){
            formData.append('photo', profileImage, profileImage.name )
        }
    
        api.post('/login', {
            email, password
        })
        .then(res => {
            api.put('/users/' + res.data.user.id, formData, {
                headers : {
                    Authorization : res.data.token
                }
            }).then(res => {
                console.log(res.data)
                alert('Informações alteradas com sucesso!');

            }).catch(error => alert('Senha inválida!'))
        }).catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        })

    }

        

    return (
    <>
    <styled.Background>
        <styled.PictureContainer>
            <img src={previewprofileImage} class='Foto' />
            <div class='containerBotao'>
                <label for='file' >
                    <img src={CameraIcon} class='Botao' />
                    Alterar foto de perfil
                    <input type='file' id='file' onChange={imageHandler} /> 
                </label>
                {/* <a> Alterar foto de perfil </a> */}
            </div>
        </styled.PictureContainer>
    <styled.Form >
        <styled.Title> SUA CONTA </styled.Title>
        <styled.Subtitle> Edite seu perfil </styled.Subtitle>
        <styled.InputContainer >
            <WhiteInputText value={name} onChange={(e) => {setName(e.target.value)}} children='Nome' />
            <WhiteInputText value={email} disabled/>
            <WhiteInputText password value={newPassword} onChange={(e) => {setNewPassword(e.target.value)}} children='Nova senha' />
            <WhiteInputText password value={newpasswordConfirmation} onChange={(e) => {setNewPasswordConfirmation(e.target.value)}} children='Confirme sua senha' />
            <WhiteInputText password value={password} onChange={(e) => {setPassword(e.target.value)}} children='Senha atual' />
        </styled.InputContainer>
        <styled.ButtonContainer>
          <WhiteButton children='Salvar' onClick={submitHandler}/>
        </styled.ButtonContainer>  
      </styled.Form>
    </styled.Background>
    </>
    )
    }


export default Profile
