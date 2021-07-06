import React, { useState, useEffect } from "react";
import * as Styled from "./styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


import InputFile from "../../components/InputFile";
import ButtonMain from "../../components/Button";
import api from '../../services/api';
import {useHistory, useParams} from 'react-router-dom';


const EditPublication = () => {

    const [name, setName] = useState('');
    const [content, setContent] = useState({});
    const [banner_image, setImage] = useState({});
    const [views, setViews ] = useState(0);

    // const [lista, setLista] = useState({
    //     name: '',
    //     content: '',
    //     banner_image: {},
    //     views: 0
    // });

    // let history = useHistory();
    let {id} = useParams();

    useEffect(() => {
        api.get(`/posts/${id}`)
        .then((response) => {
            setName(response.data.title);
            setContent(response.data.content.body);
            setImage(response.data.banner_image);
            console.log(response);
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });

        
    },[])

    

    const submitForm = () => {
        const formData = new FormData();
        const token = localStorage.getItem('token');
        formData.append('title', name);
        formData.append('content', content);
        formData.append('banner_image', banner_image);
        formData.append('views', views);

        api.put(`/posts/${id}`, formData , {
            headers:{
                'Authorization': `${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {
            alert('Post editado com sucesso');
            // limpa os campos preenchidos
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });

    }

    const handleOnChange = (text) => {
        setContent(text);
    };

    const handleTitle = (title) => {
        setName(title.target.value)
    };

    const handleOnImage = (image) => {
        setImage(image.target.files[0]);
    };

    return (
        <Styled.Pagina>
            <Styled.Conteudo>
            <Styled.EstiloPar2> BACKOFFICE</Styled.EstiloPar2>
            <Styled.EstiloPar1> Editar Publicação</Styled.EstiloPar1>
            <p>Titulo da Publicação:</p>
            <Styled.SimpleInputText type='text' value={name} onChange={handleTitle}/>
            <ReactQuill
            theme="snow"
            defaultValue={content}
            value={content}
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
            
            <InputFile onChange={handleOnImage} />
            {/* <InputFile value={image} onChange={(e) => setBannerImage(e.target.files[0])}>Enviar</InputFile> */}
            {/* <input type='file' onChange={(e) => setBannerImage(e.target.files[0])} /> */}
            <ButtonMain onClick={submitForm}> Modificar </ButtonMain>
        </Styled.Conteudo>
        </Styled.Pagina>
    );
};

export default EditPublication;