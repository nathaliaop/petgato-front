import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import LeftArrow from '../../assets/Icon awesome-chevron-left.svg';
import Message from '../../components/Message';
import Button from '../../components/Button';
import CommentPreview from "../../components/CommentPreview";
import api from '../../services/api';

import Cadastro from '../../assets/Cadastro.jpg';

import * as Styled from './styles'

const VisualizacaoPost = () => {
    const [ post , setPost] = useState({content:{body:null}});
    const [data, setData ] = useState('');
    const [hora, setHora ] = useState('');
    const [message, setMessage] = useState('');
    const [comments, setComments] = useState([]);
    const [key, setKey] = useState(true);
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('user_id');

    let myStorage = window.localStorage;

    let history = useHistory();
    let {id} = useParams();

    useEffect(() => {
        api.get(`/posts/${id}`)
        .then((response) => {
            setPost(response.data);
            setData(response.data.created_at.split('T')[0]);
            setHora(response.data.created_at.split('T')[1]);
            setComments(response.data.comments);
            api.patch(`/posts/${id}`);
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });

        /* api.get('/comments')
        .then((response) => {
            setComments(response.data);
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        }); */
    },[key])
    
    const redirect = () => {
        history.push('/');
    }
    
    const nomeLegal = (data) => {
        var array = data.split('-');
        return `Postado dia ${array[2]}/${array[1]}/${array[0]}`
    }

    const sendMessage = async (e) => {
        e.preventDefault(); // não recarregar a página
        
        // verifica se os campos estão todos preeenchidos
        if (message.length === 0) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        api.post('/comments',{
            user_id: user_id,
            post_id: id,
            description: message
        }, {
            headers:{
                'Authorization': `${token}`,
        }})
        .then(() => {
            alert('Mensagem enviada com sucesso!');
            setMessage('');
            setKey(!key)
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });
    }
    console.log(comments);


    return (
        <div>
            <Styled.Page>
                <Styled.BackButton onClick={redirect}>
                    <img src={LeftArrow}/>
                    <Styled.Back>Voltar</Styled.Back>
                </Styled.BackButton>
                <Styled.Title>{post.title}</Styled.Title>
                <Styled.Date>{nomeLegal(data)}</Styled.Date>
                <Styled.Banner src={post.banner_image}></Styled.Banner>
                <Styled.Body dangerouslySetInnerHTML={{ __html: post.content.body }}>
                </Styled.Body>
                {token ?
                <div>
                <Styled.Subtitle>Gostou? Deixe um comentário abaixo: </Styled.Subtitle>
                <Message placeholder="Digite uma mensagem legal UwU" value={message} onChange={setMessage}></Message>
                <Button onClick={sendMessage}>Enviar</Button></div>: null}
                <div>
                {comments.map(comment => <CommentPreview comentario={comment} />)}
                </div>
            </Styled.Page>
            
        </div>
    );
}

export default VisualizacaoPost;