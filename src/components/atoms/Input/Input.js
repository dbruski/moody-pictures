import styled from 'styled-components';

const Input = styled.input`
  padding: 10px 20px;
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  background: transparent;
  border-bottom: 1px solid green;
`;

export default Input;
