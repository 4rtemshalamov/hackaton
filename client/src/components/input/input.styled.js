import styled from "styled-components";


const MainWrapper = styled.div`
       width: 500px;
       height: 10px;
       background-color: white;
       border-radius: 30px;
       display: flex;
       align-items: center;
       padding: 20px;
  
  & > input {
         flex: 1;
         height: 40px;
         border: none;
         outline: none;
         font-size: 18px;
         padding-left: 10px;
  }
`



export const Styled = {MainWrapper};