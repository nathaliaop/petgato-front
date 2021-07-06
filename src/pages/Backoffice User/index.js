import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import * as Styled from './styles';
import api from '../../services/api';
import {Modal,Button} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const BackofficeUser = () => {
    //Armazena todos usuários
    const [users, setUsers] = useState([]);
    //Armazena o token de autenticação do usuário
    const token = localStorage.getItem('token');
    //Armazena chave para atualizar os contatos da paǵina quando um usuário for deletado
    const [key, setKey] = useState(true);

    let history = useHistory();

    //Conserta a exibição da data de criação do usuário
    const arrumaData = (date) => {
        let array = date.split('T')[0];
        return `${array.split('-')[2]}/${array.split('-')[1]}/${array.split('-')[0]}`
    }

    //Colunas a serem usadas na tabela
    const columns = [{
        dataField: 'name',
        text: 'Remetente'
      }, {
        text: 'Descrição',
        formatter: (rowContent, row) => {
            return (
                <p>{row.is_admin ? 'Administrador' : 'Usuário'}</p>
            );
        }
      },{
        text: 'Data de Envio',
        formatter: (rowContent, row) => {
            return (
              <div>
                <p>{arrumaData(row.created_at)}</p>
              </div>
            );
        }
      },{
        text: '',
        formatter: (rowContent, row) => {
            return (
              <Styled.Div>
                <Button style={{backgroundColor: '#BA66A3', border:'none'}} onClick={() => redirectUser(row.id)}>Editar</Button>
                <Button style={{backgroundColor: '#BA66A3', border:'none'}} onClick={() => handleDelete(row.id,token,key)}>Excluir</Button>
              </Styled.Div>
            );
      }
    }
    ];

    //Faz a requisição à API da lista de usuários
    useEffect(() => {
    api.get('users', {
        headers:{
            'Authorization': `${token}`,
        }
    })
    .then((response) => {
        setUsers(response.data);
    })
    .catch(error => {
        console.error(error);
        alert('Ocorreu um erro! Tente novamente.');
    });
    },[key])

    //Lógica para deleter um usuário
    const handleDelete = (id,token,key) => {
        api.delete(`users/${id}`, {
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

    const redirectUser = (user_id) => {
        history.push(`/editarUsuario/${user_id}`);
    }

    return (
        <div>
            <Styled.Backoffice>
                <Styled.Title>BACKOFFICE</Styled.Title>
                <Styled.Subtitle>Usuários</Styled.Subtitle>
                <BootstrapTable
                    striped='true'
                    keyField='id'
                    data={users}
                    columns={columns}
                    pagination={paginationFactory({
                        sizePerPage: 5,
                        sizePerPageList: [{
                            text: '5', value: 5
                        }, {
                            text: '10', value: 10
                        }, {
                            text: 'All', value: users.length
                        }]
                    })
                }/>
            </Styled.Backoffice>
        </div>
    );
}
export default BackofficeUser;