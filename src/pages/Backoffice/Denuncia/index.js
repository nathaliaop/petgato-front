import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import api from '../../../services/api';
import { Modal,Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const BackofficeReport = () => {
    //Armazena todas as mensagens de contato
    const [reports, setReports] = useState([]);
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

    const apagarDenuncia = (id,key) => {
        api.delete(`reports/${id}`, {
            headers:{
                'Authorization': `${token}`,
            }
        })
        .then(() => {
            setKey(!key);
            handleClose();
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });
    }

    const apagarComentario = (id,origin_type,origin_id,key) => {
        let type
        (origin_type == "Comment" ? type = "comments" : type = "replies")
        api.delete(`${type}/${origin_id}`, {
            headers:{
                'Authorization': `${token}`,
            }
        })
        .then(() => {
            api.delete(`reports/${id}`, {
                headers:{
                    'Authorization': `${token}`,
                }
            })
            .then(() => {
                setKey(!key);
                handleClose();
            })
            .catch(error => {
                console.error(error);
                alert('Ocorreu um erro! Tente novamente.');
            });
        })
        .catch(error => {
            console.error(error);
            alert('Ocorreu um erro! Tente novamente.');
        });
    }
    //Conteúdo do Modal
    const ModalContent = () => {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Comentário de {modalInfo.user.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{modalInfo.origin.description}</p>
                </Modal.Body>
                <Modal.Footer style={{justifyContent: "space-between"}}>
                    <Button variant = 'secondary' onClick={() => apagarDenuncia(modalInfo.id,key)} style={{backgroundColor: '#BA66A3', border:'none'}}>
                        Ignorar Denúncia
                    </Button>
                    <Button variant = 'secondary' onClick={() => apagarComentario(modalInfo.id,modalInfo.reportable_type,modalInfo.reportable_id,key)} style={{backgroundColor: '#BA66A3', border:'none'}}>
                        Apagar Comentário
                    </Button>
                    <Button variant = 'secondary' onClick={handleClose} style={{backgroundColor: '#BA66A3', border:'none'}}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    //Colunas a serem usadas na tabela
    const columns = [{
        text: '#',
        formatter: (rowContent, row) => {
            return (
              <div>
                <p>{row.id}</p>
              </div>
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
        text: 'Publicação',
        formatter: (rowContent, row) => {
            console.log(row.origin.description)
            return (
                <Styled.Overflow dangerouslySetInnerHTML={{ __html: row.origin.description }}>
                </Styled.Overflow>
            );
        }
      },{
        text: 'Autor',
        formatter: (rowContent, row) => {
            return (
                <Styled.Overflow dangerouslySetInnerHTML={{ __html: row.user.name }}>
                </Styled.Overflow>
            );
        }
      },{
        text: '',
        formatter: (rowContent, row) => {
            return (
              <Styled.Div>
                <Button style={{backgroundColor: '#BA66A3', border:'none'}} onClick={() => openModal(row)}>Exibir</Button>
              </Styled.Div>
            );
      }
    }
    ];

    //Faz a requisição à API da lista de mesagens de contato
    useEffect(() => {
    api.get(`reports`, {
        headers:{
            'Authorization': `${token}`,
        }
    })
    .then((response) => {
        setReports(response.data);
    })
    .catch(error => {
        console.error(error);
        alert('Ocorreu um erro! Tente novamente.');
    });
    },[key])

    //Lógica para deleter uma mensagem
    const handleDelete = (id,token,key) => {
        api.delete(`reports/${id}`, {
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
                <Styled.Subtitle>Denúncias</Styled.Subtitle>
                <BootstrapTable
                    striped='true'
                    keyField='id'
                    data={reports}
                    columns={columns}
                    pagination={paginationFactory({
                        sizePerPage: 5,
                        sizePerPageList: [{
                            text: '5', value: 5
                        }, {
                            text: '10', value: 10
                        }, {
                            text: 'All', value: reports.length
                        }]
                    })
                }/>
            </Styled.Backoffice>
            {show?<ModalContent/>:null}
        </div>
    );
}

export default BackofficeReport;