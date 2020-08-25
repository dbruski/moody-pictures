import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/theme';
import Navbar from '../components/organisms/Navbar/Navbar';

const StyledWrapper = styled.main`
  margin-top: 10vh;
  min-height: 90vh;
  background: ${({ theme }) => theme.primary};
  overflow: hidden;
`;

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <StyledWrapper>{children}</StyledWrapper>
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
