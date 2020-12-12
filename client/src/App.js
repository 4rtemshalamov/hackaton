import React from 'react';
import {Styled} from '../src/App.styled'
import Customers from "./components/RenderResults";
import Input from "./components/Input";
import InputText from "./components/Input/InputText";


const {MainWrapper, HeaderWrapper, BodyWrapper, HeaderInner, Title, WrapperInput} = Styled

const App = () => {
    return (
        <MainWrapper>
            <HeaderWrapper>
                <HeaderInner>
                    <Title>Парсинг выдачи по поиску</Title>
                    <img style={{width: '130px', paddingLeft: '10px'}} src={`${process.env.PUBLIC_URL}logo.png`}
                         alt=""/>
                    <WrapperInput>
                        <Input/>
                    </WrapperInput>
                </HeaderInner>

            </HeaderWrapper>
            <BodyWrapper>
                <Customers/>
            </BodyWrapper>

        </MainWrapper>
    )
}
export default App

