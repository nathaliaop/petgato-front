import styled from 'styled-components';

export const AboutUs = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

export const Text = styled.div`
  margin-left: 3rem;
  width: 55%;
  height: 60%;
`

export const ImageGrid = styled.div`
  width: 30%;
  height: 60%;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ImageTop = styled.img`
  object-fit: cover;
  width: 100%;
  height: 65%;
  margin-bottom: 1rem;
`

export const ImageBottom = styled.img`
  width: 48%;
  height: 70%;
`

export const Title = styled.span`
  font-family: 'Montserrat',sans-serif;
  font-size: 22px;
  color: #707070;
`

export const Subtitle = styled.h1`
  font-family: 'Montserrat',sans-serif;
  color: #C882B4;
`

export const Paragraph = styled.p`
  font-family: 'Montserrat',sans-serif;
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`

export const Icon = styled.img`
  cursor: pointer;
  margin-right: 1rem;
`