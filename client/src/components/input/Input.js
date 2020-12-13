import React, {useState} from "react";
import useGlobal from "../../store";
import {Styled} from './input.styled'

const {MainWrapper} = Styled

const Input = () => {
    const [globalState, globalActions] = useGlobal();
    const [state, setState] = useState({
        response: '',
        post: '',
        responseToPost: '',
    })
    const handleSubmit = async (e) => {
        globalActions.actions.loadingActions(true)
        e.preventDefault();
        const response = await fetch('/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({post: state.post}),
        });
        const body = await response.json();
        setState({responseToPost: body});
        globalActions.actions.responseActions(body)
    };





    return (
        <form onSubmit={handleSubmit}>
            <MainWrapper>
                <i style={{color: '#4285f4'}} className="fa fa-search" aria-hidden="true"></i>
                <input type="text"
                       value={state.post}
                       onChange={(e) => setState({post: e.target.value})}/>
            </MainWrapper>

        </form>

    )
}

export default Input