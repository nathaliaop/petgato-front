import React, { useState } from "react";
import * as Styled from "./styles";
import { Titulo } from "./styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


import InputText from "../../components/InputText";
import InputFile from "../../components/InputFile";
import ButtonMain from "../../components/Button";
import api from '../../services/api';
import {useHistory} from 'react-router-dom';

const CreatePubli = () => {
    // Apenas testes para tentar fazer de um jeito diferente;
    // const [name, setName] = useState('');
    // const [content, setContent] = useState('');
    // const [image, setBannerImage] = useState({});

    let history = useHistory();

    const submitForm = () => {
        const formData = new FormData();
        const token = localStorage.getItem('token');
        formData.append('title', lista.name);
        formData.append('content', lista.content);
        formData.append('banner_image', lista.banner_image);
        formData.append('views', lista.views);

        api.post('/posts', formData , {
            headers:{
                'Authorization': `${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {
            alert('Post criado com sucesso');
            // limpa os campos preenchidos
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });

    }
  
    const [lista, setLista] = useState({
        name: '',
        content: '',
        banner_image: null,
        views: 0
    });

    const handleOnChange = (text) => {
        setLista({ ...lista, content: text });
    };

    const handleOnImage = (image) => {
        setLista({ ...lista, banner_image: image.target.files[0] });
    };

    return (
        <Styled.Pagina>
        <Styled.Conteudo>
            <Styled.EstiloPar2> BACKOFFICE</Styled.EstiloPar2>
            <Styled.EstiloPar1> Criar Publicação</Styled.EstiloPar1>
            <InputText
            value={lista.name}
            onChange={(event) => {
                setLista({ ...lista, name: event });
            }}
            >
            Titulo da Publicação
            </InputText>
            <ReactQuill
            theme="snow"
            value={lista.content}
            onChange={handleOnChange}
            modules={{
                toolbar: [
                    [{ 'header': [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline','strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                    ['link'],
                    ['clean']
                ]
            }}
            />
            
            <InputFile onChange={handleOnImage}> Enviar </InputFile>
            {/* <InputFile value={image} onChange={(e) => setBannerImage(e.target.files[0])}>Enviar</InputFile> */}
            {/* <input type='file' onChange={(e) => setBannerImage(e.target.files[0])} /> */}
            <ButtonMain onClick={submitForm}> Publicar </ButtonMain>
        </Styled.Conteudo>
        </Styled.Pagina>
    );
};

export default CreatePubli;
