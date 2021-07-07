import React, {useState} from "react";
import * as Styled from './styles';

const ReplyPreview = ({ reply }) => {
      //Conserta a exibição da data de criação da postagem
      const arrumaData = (date) => {
        let array = date.split('T')[0];
        return `Postado no dia ${array.split('-')[2]}/${array.split('-')[1]}/${array.split('-')[0]}`
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
        </Styled.ReplyPreview>
    )
  };
  
  export default ReplyPreview;