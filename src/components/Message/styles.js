import styled from 'styled-components'

export const Message = styled.textarea`
  width: 100%;
  height: 25vh;
  ::-webkit-input-placeholder {
    color: #C882B4;
  }
  border: 1px solid #C882B4;
  border-radius: 4px;
  padding: 6px 6px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  &:focus {
    border: 2px solid #BA66A3;
    transition: border-color 0.3s ease-in-out;
    outline: 0;
  }
`;