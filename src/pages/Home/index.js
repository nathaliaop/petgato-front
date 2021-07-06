import React, {useState, useEffect} from "react";
import * as styled from "./styles";
import api from '../../services/api';

import TwitterIcon from "./Twitter.svg";
import FaceIcon from "./Facebook.svg";
import InstaIcon from "./Instagram.svg";
import SearchIcon from "./SearchIcon.svg";
import Cintia from "./Cintia.jpg";

import PostPreview from "../../components/PostPreview";

import InputText from "../../components/WhiteInputText";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get('/posts')
        .then(response => {
            setPosts(response.data);
            console.log(response.data);
        })
        .catch(error => alert('Ocorreu um erro ao carregar os posts'))
    },[])
    
  return (
    <styled.Background>
      <styled.LeftBox>
        <styled.SearchContainer>
          <InputText />
          <img src={SearchIcon} className="Botao" />
        </styled.SearchContainer>
        <styled.PhotoContainer>
          <img src={Cintia} className="Foto" />
          <styled.TextoContainer>
            <styled.Title> SOBRE A AUTORA </styled.Title>
            <styled.Subtitle> Cíntia Lorenzzo </styled.Subtitle>
            <styled.Texto>
              Sou veterinária há 5 anos, apaixonada pelo mundo animal,
              principalmente os que estão sempre conosco no dia a dia. Quando
              não estou no meu consultório ou com meus pets, estou aqui
              escrevendo conteúdo para vocês. Espero que você goste!
            </styled.Texto>
          </styled.TextoContainer>
          <styled.RedesContainers>
            <img src={TwitterIcon} className="Twitter" />
            <img src={FaceIcon} className="Facebook" />
            <img src={InstaIcon} className="Instagram" />
          </styled.RedesContainers>
        </styled.PhotoContainer>
      </styled.LeftBox>

      <styled.RightBox>
        <div>
          <h1>Miau!</h1>
          <h2>Seja bem-vinda(o) ao PetGatô! Confira nosso conteúdo mais recente:</h2>
        </div>
        
        {posts.map(post => <PostPreview post={post} />)}
      </styled.RightBox>
    </styled.Background>
  );
}

export default Home;