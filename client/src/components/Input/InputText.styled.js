import styled from 'styled-components';

const LocalMainWrapper = styled.div`
  .inline-placeholder-login {
    user-select: none;
    pointer-events: none;
    z-index: 1;
    font-size: 16px;
    color: #bfbfbf;
    position: absolute;
    top: 20px;
    left: 10px;
    transition: all 0.2s;
  }

  .inline-placeholder-login.close.focused {
    position: absolute;
    transform: translate3d(0, -6px, 0);
    font-size: 13px;
    color: #3c50b3
  }

  .inline-placeholder-login.close {
    color: #929fb5;
  }

  .inline-placeholder-login.open {
    position: absolute;
    transform: translate3d(0, -6px, 0);
    color: #6B8AE4;
    font-size: 13px;
  }

  & button {
    margin: 0 20px 38px;
    background: #9acad1;
    border-radius: 8px;
    width: 314px;
    height: 60px;
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    border: none;
  }

  & a {
    font-family: AvantGardeGothicC, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #6B8AE4
  }
`;

const LocalInputWrapper = styled.div`
  position: relative;
  margin: 0 auto 20px;
  border-radius: 8px;

  //& input:hover {
  //  border-radius: 8px;
  //!important;
  //  border: 2px solid #c4d0f4 !important;
  //}

  & .ant-input {
    background: #f1f3f6;
    height: 20px;
    border-radius: 15px;
    padding-top: 25px;
    width: 300px;
  }
`;

export const Styled = { LocalInputWrapper, LocalMainWrapper };
