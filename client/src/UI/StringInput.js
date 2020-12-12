import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components/macro';

const StyledInput = styled(Input)`
  .ant-input {
    width: 315px;
    height: 60px;
    background: #f2f2f2;
    border-radius: 4px;
    padding-left: 10px;
    padding-top: 25px;
  }

  .ant-input:focus {
    background: #f2f2f2;
    border: 2px solid #bdbdbd;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: none;
  }

  .ant-input::placeholder {
    color: transparent;
  }

  .ant-input:hover {
    background: #f2f2f2;
    border: 2px solid #bdbdbd;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: none;
  }
`;

const StringInput = (props) => {
    return <StyledInput {...props} />;
};

export default StringInput;
