import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import api from '../../../services/api';
import { Modal,Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const BackofficeContact = () => {
    //Armazena todas as mensagens de contato
    const [contacts, setContacts] = useState([]);
    //Armazena o token de autenticação do usuário
    const token = localStorage.getItem('token');
    //Armazena chave para atualizar os contatos da paǵina quando uma mesagem for deletada
    const [key, setKey] = useState(true);

    //Conserta a exibição da data de criação de uma mensagem de contato
    const arrumaData = (date) => {
        let array = date.split('T')[0];
        return `${array.split('-')[2]}/${array.split('-')[1]}/${array.split('-')[0]}`
    }

    //Lógica para abrir e fechar modal de cada coluna
    const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const toggleTrueFalse = () => setShowModal(handleShow);
    const openModal = (row) => {
        setModalInfo(row);
        toggleTrueFalse();
    }

    //Conteúdo do Modal
    const ModalContent = () => {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Mensagem: {modalInfo.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Email: </strong>{modalInfo.email}</p>
                    <p><strong>Mensagem: </strong></p>
                    <p>{modalInfo.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant = 'secondary' onClick={handleClose} style={{backgroundColor: '#BA66A3', border:'none'}}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    //Colunas a serem usadas na tabela
    const columns = [{
        dataField: 'name',
        text: 'Remetente'
      }, {
        text: 'Descrição',
        formatter: (rowContent, row) => {
            return (
              <Styled.Overflow>
                <p>{row.description}</p>
              </Styled.Overflow>
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
                <Button style={{backgroundColor: '#BA66A3', border:'none'}} onClick={() => openModal(row)}>Exibir</Button>
                <Button style={{backgroundColor: '#BA66A3', border:'none'}} onClick={() => handleDelete(row.id,token,key)}>Excluir</Button>
              </Styled.Div>
            );
      }
    }
    ];

    //Faz a requisição à API da lista de mesagens de contato
    useEffect(() => {
    api.get(`contacts`, {
        headers:{
            'Authorization': `${token}`,
        }
    })
    .then((response) => {
        setContacts(response.data);
    })
    .catch(error => {
        console.error(error);
        alert('Ocorreu um erro! Tente novamente.');
    });
    },[key])

    //Lógica para deleter uma mensagem
    const handleDelete = (id,token,key) => {
        api.delete(`contacts/${id}`, {
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
                <Styled.Subtitle>Mensagens de Contato</Styled.Subtitle>
                <BootstrapTable
                    striped='true'
                    keyField='id'
                    data={contacts}
                    columns={columns}
                    pagination={paginationFactory({
                        sizePerPage: 5,
                        sizePerPageList: [{
                            text: '5', value: 5
                        }, {
                            text: '10', value: 10
                        }, {
                            text: 'All', value: contacts.length
                        }]
                    })
                }/>
            </Styled.Backoffice>
            {show?<ModalContent/>:null}
        </div>
    );
}

export default BackofficeContact;