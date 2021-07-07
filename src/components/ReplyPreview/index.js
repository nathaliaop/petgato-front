import React, {useState} from "react";
import * as Styled from './styles';
import api from '../../services/api';
import Button from "../../components/Button";
import WhiteButton from "../../components/Contact Button";
import ThreeDots from '../../assets/Icon feather-more-horizontal.svg';

const ReplyPreview = ({ reply }) => {
    const token = localStorage.getItem('token');
    //Esconde a denúncia da resposta
    const [hiddenReport, setHiddenReport] = useState([]);
    const handleHideReport = (id) => {
      hiddenReport.includes(id) ? setHiddenReport([hiddenReport.filter(item => (item !== id))]) : setHiddenReport([...hiddenReport,id]);
    }
    //Conserta a exibição da data de criação da postagem
    const arrumaData = (date) => {
      let array = date.split('T')[0];
      return `Postado no dia ${array.split('-')[2]}/${array.split('-')[1]}/${array.split('-')[0]}`
    }

    const sendReplyReport = async (e) => {
      e.preventDefault(); // não recarregar a página
  
  
      api.post('/reports',{
          reportable_type: "Reply",
          reportable_id: reply.id
      }, {
          headers:{
              'Authorization': `${token}`,
      }})
      .then(() => {
          alert('Denúncia enviada com sucesso!');
          setHiddenReport(hiddenReport.filter(item => (item !== reply.id)))
      })
      .catch(error => {
          console.error(error);
          alert('Ocorreu um erro! Tente novamente.');
      });
  }

    console.log(reply)
    return (
        <Styled.ReplyPreview>
            {reply.user_reply.photo !== null ? 
       <Styled.Image src={reply.user_reply.photo} />
        : 
        <Styled.Image src='https://img.icons8.com/cotton/2x/gender-neutral-user--v2.png' />
        }
        <Styled.Reply>
        <h5>{reply.user_reply.name}</h5>
          <Styled.Date>{arrumaData(reply.created_at)}</Styled.Date>
          <p>{reply.description}</p>
        </Styled.Reply>
          <div>
            <img src={ThreeDots} onClick={() => handleHideReport(reply.id)}/>
            {hiddenReport.map(hidden => (reply.id ===  hidden) ?
              <div>
                <WhiteButton onClick={sendReplyReport}>Denunciar</WhiteButton>
              </div>
             : <></>)}
          </div>
        </Styled.ReplyPreview>
    )
  };
  
  export default ReplyPreview;