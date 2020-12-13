import React from 'react';
import {Styled} from '../src/App.styled'
import Customers from "./components/RenderResults";
import Input from "./components/Input";
import Button from "./components/button/Button";
import useGlobal from "./store";


const {MainWrapper, HeaderWrapper, BodyWrapper, HeaderInner, Title, WrapperInput} = Styled

const App = () => {
    const [globalState, globalActions] = useGlobal();
    const {response} = globalState
    return (
        <MainWrapper>
            <HeaderWrapper>
                <HeaderInner>
                    <Title>Парсинг выдачи по поиску</Title>
                    <img style={{width: '130px', paddingLeft: '10px'}} src={`${process.env.PUBLIC_URL}logo.png`}
                         alt=""/>
                    <WrapperInput>
                        <Input/>
                        <Button/>
                    </WrapperInput>
                    {response?.length ?
                    <p style={{color: 'white',}}>Количество найденных результатов: {response?.length}</p> : null
                    }
                </HeaderInner>
            </HeaderWrapper>
            <BodyWrapper>
                <Customers/>
            </BodyWrapper>

        </MainWrapper>
    )
}
export default App

