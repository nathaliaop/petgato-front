import React, {useState, useEffect} from "react";
import * as Styled from './styles';
import ReplyPreview from "../../components/ReplyPreview";
import Button from "../../components/Button";
import WhiteButton from "../../components/Contact Button";
import Message from '../../components/Message';
import api from '../../services/api';
import ThreeDots from '../../assets/Icon feather-more-horizontal.svg';

const CommentPreview = ({ comentario }) => {
  const token = localStorage.getItem('token');
  const user_id = localStorage.getItem('user_id');
  const [comment, setComment] = useState(comentario);
  const [message, setMessage] = useState('');
  //Esconde a denúncia do comentário
  const [hiddenReport, setHiddenReport] = useState([]);
    const handleHideReport = (id) => {
      hiddenReport.includes(id) ? setHiddenReport(hiddenReport.filter(item => (item !== id))) : setHiddenReport([...hiddenReport,id]);
    }
  //Esconde o input da resposta
  const [hidden, setHidden] = useState([]);
  const handleHide = (id) => {
    setMessage('');
    hidden.includes(id) ? setHidden(hidden.filter(item => (item !== id))) : setHidden([...hidden,id]);
  }
      //Conserta a exibição da data de criação da postagem
      const arrumaData = (date) => {
        let array = date.split('T')[0];
        return `Postado no dia ${array.split('-')[2]}/${array.split('-')[1]}/${array.split('-')[0]}`
    }

    const sendReply = async (e) => {
      e.preventDefault(); // não recarregar a página
      
      // verifica se os campos estão todos preeenchidos
      if (message.length === 0) {
          alert('Por favor, preencha todos os campos!');
          return;
      }


      api.post('/replies',{
          user_id: user_id,
          comment_id: comment.id,
          description: message
      }, {
          headers:{
              'Authorization': `${token}`,
      }})
      .then(() => {
          alert('Mensagem enviada com sucesso!');
          setMessage('');
          api.get(`/comments/${comment.id}`)
          .then((response) => {
            setComment(response.data);
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

  const sendCommentReport = async (e) => {
    e.preventDefault(); // não recarregar a página


    api.post('/reports',{
        reportable_type: "Comment",
        reportable_id: comment.id
    }, {
        headers:{
            'Authorization': `${token}`,
    }})
    .then(() => {
        alert('Denúncia enviada com sucesso!');
        setHiddenReport(hiddenReport.filter(item => (item !== comment.id)))
    })
    .catch(error => {
        console.error(error);
        alert('Ocorreu um erro! Tente novamente.');
    });
}

    return (
      <div>
      <Styled.CommentPreview>
        {comment.user.photo !== null ? 
       <Styled.Image src={comment.user.photo} />
        : 
        <Styled.Image src='https://img.icons8.com/cotton/2x/gender-neutral-user--v2.png' />
        }
        
      <Styled.Comment>
          <h5>{comment.user.name}</h5>
          <Styled.Date>{arrumaData(comment.created_at)}</Styled.Date>
          <p>{comment.description}</p>
          <Button key={comment.id} onClick={() => handleHide(comment.id)}>Responder</Button>
          {hidden.map(hidden => (comment.id ===  hidden) ?
          <div>
            <Message width="200%" placeholder="Diga oi :3" key={comment.id} value={message} onChange={setMessage}></Message>
            <Button onClick={sendReply}>Enviar</Button>
          </div>
          : <></>)}
      </Styled.Comment>
      <div>
        <img src={ThreeDots} onClick={() => handleHideReport(comment.id)}/>
          {hiddenReport.map(hidden => (comment.id ===  hidden) ?
          <div>
            <WhiteButton onClick={sendCommentReport}>Denunciar</WhiteButton>
          </div>
          : <></>)}
      </div>
      </Styled.CommentPreview>
      <Styled.Replies>
      {comment.replies.map(reply => <ReplyPreview reply={reply}/>)}
      </Styled.Replies>
      </div>
    )
  };
  
  export default CommentPreview;