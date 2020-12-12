import React, {useState, useEffect} from 'react';
import './customers.css';
import Input from "./Input";
import useGlobal from "../store";


const Customers = () => {
    const [globalState, globalActions] = useGlobal();
    const [customers, setCustomers] = useState([])
    const {response} = globalState

    useEffect(() => {
        if (response?.length){
            setCustomers(response)
        }
    }, [response])


    console.log(customers)
    return (
        <div>
            <h2>Customers</h2>
            <Input/>
            <ul>
                {customers?.map((el, index) =>
                    <div>
                        <div>{el.title}</div>
                        <div>{el.url}</div>
                        <div>{el.description}</div>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Customers;
