import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  background: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.quaternary};
  width: 200px;
  @media (min-width: 1024px) {
    width: auto;
  }
`;

export default Input;
