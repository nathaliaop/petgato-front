import styled from "styled-components";

export const Background = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  min-height: calc(100vh - 90px - 40px);
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 400px;
  flex-direction: column;
  border-right: solid 1px lightgray;
  height: 90%;
  margin: 10% 0;
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  background-color: #fbe9f6;
  img.Foto {
    position: relative;
    margin-top: -2rem;
    object-fit: cover;
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }

  a {
    text-decoration: none;
  }
`;

export const TextoContainer = styled.div`
  display: flex;
  font-family: "MontSerrat", sans-serif;
  width: 80%;
  text-align: center;
  margin: 0;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1em;
`;

export const Title = styled.p`
  font-family: "MontSerrat", sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  color: #707070;
  padding: 0;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-family: "MontSerrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #c882b4;
  padding: 0;
  margin: 0;
`;

export const Texto = styled.p`
  font-family: "MontSerrat", sans-serif;
  font-weight: 350;
  font-size: 0.87rem;
  margin-top: 0.6rem;
  color: #707070;
  padding: 0;
  margin: 0;
`;

export const RedesContainers = styled.div`
  display: flex;
  width: 40%;
  height: 25px;
  margin-top: 10px;
  justify-content: space-between;

  img.Twitter {
    cursor: pointer;
    border-style: solid;
    border-color: #ffff;
  }

  img.Facebook {
    cursor: pointer;
    border-style: solid;
    border-color: #ffff;
  }

  img.Instagram {
    cursor: pointer;
    border-style: solid;
    border-color: #ffffff;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 40px;

  img.Botao {
    width: 25px;
    height: 25px;
    margin-left: -2rem;
    margin-top: 1rem;
    z-index: 1;
  }
`;

export const RightBox = styled.div`
  width: calc(100% - 50px);
  padding: 5% 25px;
  font-family: MontSerrat;
  display: flex;
  flex-direction: column;
  gap: 25px;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 30px;
    color: #c882b4;
  }

  h2 {
    margin: 0;
    padding: 8px 0;
    font-weight: 300;
    font-size: 20px;
    color: #707070;
  }
`;
