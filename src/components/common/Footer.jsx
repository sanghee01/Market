import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterDiv>
      Copyright 2023. JSCODE Team Project - Market. All rights reserved.
    </FooterDiv>
  );
};
const FooterDiv = styled.footer`
  text-align: center;
  padding-top: 30px;
  height: 80px;
  border-top: 1px solid #ececec;
  font-size: 0.8rem;
`;

export default Footer;
