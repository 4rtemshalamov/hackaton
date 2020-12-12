import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const HeaderWrapper = styled.div`
  width: auto;
  height: 400px;
  background-color: #15202b;
`
const BodyWrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: white;
`


const HeaderInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px;
`

const Title = styled.h3`
  color: #4285f4;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`

const WrapperInput = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
`

export const Styled = {MainWrapper, HeaderWrapper, BodyWrapper, HeaderInner, Title, WrapperInput};