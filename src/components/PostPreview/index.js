import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import WhiteButton from "../WhiteButton";
import Comentario from "./Comentario.svg";
import Curtida from "./Curtida.svg";
import Visualizacao from "./Visualização.svg";

const Container = styled.div`
  width: 100%;
  height: 200px;

  display: grid;
  grid-template-columns: 200px auto;
`;

const LeftContainer = styled.div`
  background: gray url(${(props) => props.backgroundImage});
  object-fit: cover;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const RightContainer = styled.div`
  padding-left: 10px;
  padding-top: 4px;


  height: 100%;
  display: grid;
  grid-template-rows: min-content auto 50px;

  h1 {
    font-size: 26px;
    height: fit-content;
  }

  p {
    font-size: 16px;
    padding: 0;
    margin: 0%;
  }

  a {
    text-decoration: none;
    width: fit-content;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;


`;

const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  img{
    width: 25px;
    cursor: pointer;
  }

  p {
    padding: 0;
    margin: 0;
    font-size: 18px;
    color: #707070;
  }
`;

const Icon = ({ src, children }) => (
  <ContainerIcon>
    <img src={src} />
    <p>{children}</p>
  </ContainerIcon>
);

const Content = styled.div`
  width: 100%;
  max-height: 100px;
  overflow: hidden;
  word-wrap: break-word;
`

const PostPreview = ({ post }) => {
  return (
    <Container>
      <LeftContainer backgroundImage={post.banner_image||'https://static.wikia.nocookie.net/rato-royale/images/5/59/Xaropinho.png/revision/latest/top-crop/width/360/height/450?cb=20180327194729&path-prefix=pt-br'} />
      <RightContainer>
        <Link to={`/postagem/${post.id}`}>
          <h1>{post.title}</h1>
        </Link>
        <Content dangerouslySetInnerHTML={{ __html: post.content.body }}></Content>
        <FooterContainer>
          <WhiteButton>
            <Link to={`/postagem/${post.id}`}>LEIA MAIS</Link>
          </WhiteButton>
          <Icon src={Curtida}>0</Icon>
          <Icon src={Comentario}>{post.comments.length}</Icon>
          <Icon src={Visualizacao}>{post.views}</Icon>
        </FooterContainer>
      </RightContainer>
    </Container>
  );
};

export default PostPreview;
