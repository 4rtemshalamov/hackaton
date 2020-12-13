import React from "react";
import useGlobal from "../../store";
import {Styled} from './Button.styled'

const {MainButton} = Styled

const Button = () => {
    const [globalState] = useGlobal();
    const {response} = globalState

    const handleSubmit = () => {
        if (response?.length) {
            const data = JSON.stringify(response)
            let FileSaver = require('file-saver');
            let blob = new Blob([data], {type: "application/json"});
            FileSaver.saveAs(blob, "hello world.json");
        }
    }



    return(
        <MainButton onClick={handleSubmit}>Скачать в JSON</MainButton>
    )
}

export default Button