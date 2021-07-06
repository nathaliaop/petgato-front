import React from "react";
import * as Styled from './styles';

const CommentPreview = ({ user_name, user_photo, comment }) => {
      //Conserta a exibição da data de criação da postagem
      const arrumaData = (date) => {
        let array = date.split('T')[0];
        return `Postado no dia ${array.split('-')[2]}/${array.split('-')[1]}/${array.split('-')[0]}`
    }
    console.log(comment);
    return (
      <Styled.CommentPreview>
        {user_photo !== null ? 
       <Styled.Image src={user_photo} />
        : 
        <Styled.Image src='https://img.icons8.com/cotton/2x/gender-neutral-user--v2.png' />
        }
      <Styled.Comment>
          <h5>{user_name}</h5>
          <Styled.Date>{arrumaData(comment.created_at)}</Styled.Date>
          <p>{comment.description}</p>
      </Styled.Comment>
      </Styled.CommentPreview>
    )
  };
  
  export default CommentPreview;