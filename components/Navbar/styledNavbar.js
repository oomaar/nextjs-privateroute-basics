import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;

  ul {
    padding: 1rem;
    display: flex;
    gap: 0 1rem;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 1.2rem;
    color: #1e1ead;
    cursor: pointer;
  }
`;