import styled from 'styled-components'

export const CommentPreview = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  font-family: 'Montserrat',sans-serif;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Image = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const Date = styled.label`
  color: gray
`;

export const Replies = styled.div`
  margin-left: 5rem;
`;