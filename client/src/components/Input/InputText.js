import React, { useState } from 'react';
import { Styled } from './InputText.styled';

// import useGlobal from '../../../../store';
import StringInput from '../../UI/StringInput'

const { LocalInputWrapper, LocalMainWrapper } = Styled;

const InputText = () => {
    const [userData, setUserData] = useState({
        heading: '',
    });

    const [focused, setFocused] = useState({
        heading: false,
    });
    // const [, globalActions] = useGlobal();

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
        const headers = event.target.value;
        // globalActions.actions.headersActions(headers);
    };

    const handleFocus = (event) => {
        setFocused({
            ...userData,
            [event.target.name]: true,
        });
    };

    const handleBlur = (event) => {
        setFocused({
            ...userData,
            [event.target.name]: false,
        });
    };

    return (
        <LocalMainWrapper>
            <LocalInputWrapper>
                <StringInput
                    name="heading"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={{ margin: '0 auto' }}
                />
                <span
                    className={`inline-placeholder-login 
                        ${userData.heading ? 'open' : 'close'}
                        ${focused.heading ? 'focused' : ''}
                        `}
                >
          Введите запрос в поле поиска
        </span>
            </LocalInputWrapper>
        </LocalMainWrapper>
    );
};

export default InputText;
