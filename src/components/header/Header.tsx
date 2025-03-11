import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px;
  text-align: center;

  nav {
    margin-block-start: 1rem;

    ul {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    a {
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }

      @media ${({ theme }) => theme.media.mobile} {
        font-size: 0.9rem;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Мой крутой сайт</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
