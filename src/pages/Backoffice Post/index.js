import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import * as Styled from './styles';
import api from '../../services/api';
import ButtonMain from '../../components/Button';
import {Button} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const BackofficePost = () => {
    //Armazena todas as postagens
    const [posts, setPosts] = useState([]);
    //Armazena o token de autenticação do usuário
    const token = localStorage.getItem('token');
    //Armazena chave para atualizar os contatos da paǵina quando uma postagem for deletada
    const [key, setKey] = useState(true);

    let history = useHistory();


    //Conserta a exibição da data de criação da postagem
    const arrumaData = (date) => {
        let array = date.split('T')[0];
        return `${array.split('-')[2]}/${array.split('-')[1]}/${array.split('-')[0]}`
    }

    //Colunas a serem usadas na tabela
    const columns = [{
        dataField: 'id',
        text: '#'
      },{
        text: 'Data',
        formatter: (rowContent, row) => {
            return (
              <div>
                <p>{arrumaData(row.created_at)}</p>
              </div>
            );
        }
      },
      {
        text: 'Título',
        formatter: (rowContent, row) => {
            console.log(row)
            return (
              <Styled.Overflow dangerouslySetInnerHTML={{ __html: row.content.body }}>
                
              </Styled.Overflow>
            );
        }
      },{
        text: '',
        formatter: (rowContent, row) => {
            return (
              <Styled.Div>
                <Button style={{backgroundColor: '#BA66A3', border:'none'}} onClick={() => redirectPost(row.id)}>Editar</Button>
                <Button style={{backgroundColor: '#BA66A3', border:'none'}} onClick={() => handleDelete(row.id,token,key)}>Excluir</Button>
              </Styled.Div>
            );
      }
    }
    ];

    const redirectPost = (id) => {
        history.push(`/editarPubli/${id}`)
    }

    const handleNewPost = () => {
        history.push(`/criarPubli`)
    }

    //Faz a requisição à API da lista de postagens
    useEffect(() => {
    api.get(`posts`, {
        headers:{
            'Authorization': `${token}`,
        }
    })
    .then((response) => {
        setPosts(response.data);
    })
    .catch(error => {
        console.error(error);
        alert('Ocorreu um erro! Tente novamente.');
    });
    },[key])

    //Lógica para deleter uma postagem
    const handleDelete = (id,token,key) => {
        api.delete(`posts/${id}`, {
            headers:{
                'Authorization': `${token}`,
            }
        })
        .then(() => {
            setKey(!key);
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });      
    }

    return (
        <div>
            <Styled.Backoffice>
                <Styled.Title>BACKOFFICE</Styled.Title>
                <Styled.Subtitle>Publicações</Styled.Subtitle>
                <BootstrapTable
                    striped='true'
                    keyField='id'
                    data={posts}
                    columns={columns}
                    pagination={paginationFactory({
                        sizePerPage: 5,
                        sizePerPageList: [{
                            text: '5', value: 5
                        }, {
                            text: '10', value: 10
                        }, {
                            text: 'All', value: posts.length
                        }]
                    })
                }/>
                <div>
                <ButtonMain onClick={() => handleNewPost()}>Nova Publicação</ButtonMain>
                </div>
            </Styled.Backoffice>
        </div>
    );
}
export default BackofficePost;