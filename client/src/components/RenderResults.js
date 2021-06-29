import React, {useState, useEffect} from 'react';
import useGlobal from "../store";
import {Circular} from 'styled-loaders-react'

import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const RenderResults = () => {

    // const [gridApi, setGridApi] = useState(null);
    // const [gridColumnApi, setGridColumnApi] = useState(null);
    //
    const [rowData, setRowData] = useState(null);
    //
    const [globalState, globalActions] = useGlobal();
    const {response, loading} = globalState
    //
    useEffect(() => {
        if (response?.length > 0) {
            setRowData(response)
            globalActions.actions.loadingActions(false)
        }
    }, [response])
    //
    // function onGridReady(params) {
    //     setGridApi(params.api);
    //     setGridColumnApi(params.columnApi);
    // }

    return (
        <div>
            <div>
                {rowData?.map(el => (
                    <p>{el?.headers}</p>
                ))}
            </div>
            <div>
                {rowData?.map(el => (
                    <p>{el?.text}</p>
                ))}
            </div>

        </div>
        // <div className="ag-theme-alpine" style={{height: 500, width: "auto", padding: '0 20% 0 20%'}}>
        //     {loading ? <Circular/> :
        //         <AgGridReact
        //             onGridReady={onGridReady}
        //             rowData={rowData}>
        //             <AgGridColumn width={400} minWidth={100} maxWidth={600} field="url"></AgGridColumn>
        //             <AgGridColumn width={400} minWidth={100} maxWidth={600} field="title"></AgGridColumn>
        //             <AgGridColumn width={400} minWidth={100} maxWidth={600} width={600}
        //                           field="description"></AgGridColumn>
        //         </AgGridReact>
        //     }
        //
        // </div>
    );
};

export default RenderResults
