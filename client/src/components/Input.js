import React, {useState} from "react";
import useGlobal from "../store";

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
            body: JSON.stringify({ post: state.post }),
        });
        const body = await response.json();
        setState({ responseToPost: body });
        globalActions.actions.responseActions(body)

    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       value={state.post}
                       onChange={(e) => setState({post: e.target.value})}/>
            </form>
        </div>

    )
}

export default Input