import React, {useState, useEffect} from 'react';
import './customers.css';
import Input from "./Input";
import useGlobal from "../store";
import { Circular } from 'styled-loaders-react'


const Customers = () => {
    const [globalState, globalActions] = useGlobal();
    const [customers, setCustomers] = useState([])
    const {response, loading} = globalState

    useEffect(() => {
        if (response?.length > 0){
            setCustomers(response)
            globalActions.actions.loadingActions(false)
        }
    }, [response])


    console.log(globalState)
    return (
        <div>
            <h2>Customers</h2>
            <Input/>
            <div>
                {loading ? <Circular/>
                : customers?.map((el, index) =>
                        <div key={index}>
                            <div>{el.title}</div>
                            <div>{el.url}</div>
                            <div>{el.description}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Customers;
