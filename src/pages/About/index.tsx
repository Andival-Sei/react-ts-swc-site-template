import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 2rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>О нас</h1>
      <p>Информация о нашей компании</p>
    </AboutContainer>
  );
};

export default About;
