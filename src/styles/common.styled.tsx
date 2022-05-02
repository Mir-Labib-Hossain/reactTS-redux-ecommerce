import styled from "styled-components";

export const Header = styled.h1<{fontSize:string}>`
  color: #845EC2;
  font-size: ${({fontSize})=>fontSize};
`;

export const Paragraph = styled.p`
  color: black;
`;

export const Span = styled.span`
  color: gray;
`;

export const Row = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #00C9A7;
  border: 0;
  border-radius: 20px;
  font-weight: bolder;
  color: white;
`;
