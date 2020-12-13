import styled from "styled-components";

const MainButton = styled.button`
  margin-top: 30px;
  border: none;
  padding: 24px;
  width: 220px;
  font-family: "montserrat", sans-serif;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;
  color: #fff;
  background-size: 200%;
  transition: 0.6s;
  background-image: linear-gradient(to left, #1250cb, #5b80cb, #125ccb);

  &.hover {
    background-position: right;
  }
`

export const Styled = { MainButton };