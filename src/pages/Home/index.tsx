import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  margin-block-end: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Главная страница</Title>
      <p>Добро пожаловать на наш сайт!</p>
    </HomeContainer>
  );
};

export default Home;
