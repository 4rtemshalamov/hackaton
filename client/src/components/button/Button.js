import React, {useState, useEffect} from "react";
import useGlobal from "../../store";
import {Styled} from './Button.styled'

const {MainButton} = Styled

const Button = () => {
    const [globalState, globalActions] = useGlobal();
    const [disabled, setDisabled] = useState(true)

    const {response} = globalState


    // useEffect(() => {
    //     if (response?.length){
    //         setDisabled(true)
    //     }
    // },)

    const handleSubmit = () => {
        if (response?.length) {
            const data = JSON.stringify(response)
            let FileSaver = require('file-saver');
            let blob = new Blob([data], {type: "application/json"});
            FileSaver.saveAs(blob, "hello world.json");
        }
    }



    return(
        <MainButton value={'скачать'} onClick={handleSubmit}>Скачать в JSON</MainButton>
    )
}

export default Button