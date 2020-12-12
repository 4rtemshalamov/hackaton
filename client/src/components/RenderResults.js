// import React, {useState, useEffect} from 'react';
// import './customers.css';
// import Input from "./Input";
// import useGlobal from "../store";
// import {Table, Button, Space, Tag} from 'antd';
// import { Circular } from 'styled-loaders-react'
//
//
// const RenderResults = () => {
//     const [globalState, globalActions] = useGlobal();
//     const {response, loading} = globalState
//
//     useEffect(() => {
//         if (response?.length > 0){
//             // setCustomers(response)
//             globalActions.actions.loadingActions(false)
//         }
//     }, [response])
//
//
//     const columns = [
//         {
//             title: 'URL',
//             dataIndex: 'url',
//             key: 'url',
//             width: 100,
//             fixed: 'left',
//         },
//         {
//             title: 'Заголовок',
//             dataIndex: 'title',
//             key: 'title',
//             width: 100,
//             fixed: 'left',
//         },
//         {
//             title: 'Описание',
//             dataIndex: 'description',
//             key: 'description',
//             width: 100,
//             fixed: 'left',
//         },
//     ];
//
//     const data = [];
//     for (let i = 0; i < response?.length; i++) {
//         data.push({
//             key: i,
//             url: `${response.map(el => el.url)[i]}`,
//             title: `${response.map(el => el.title)[i]}`,
//             description: `${response.map(el => el.description)[i]}`,
//         });
//     }
//
//     console.log(globalState)
//     return (
//         <div style={{width: '500px', height: '500px' }}>
//             <h2>Результаты выдачи</h2>
//                 {/*{loading ? <Circular/>*/}
//                 {/*: response?.map((el, index) =>*/}
//                 {/*        <div key={index}>*/}
//                 {/*            <div>{el.title}</div>*/}
//                 {/*            <div>{el.url}</div>*/}
//                 {/*            <div>{el.description}</div>*/}
//                 {/*        </div>*/}
//                 {/*    )*/}
//                 {/*}*/}
//                 {loading ? <Circular/>
//                 :  <Table  columns={columns} dataSource={data} bordered={true} size={'middle'}/>
//                 }
//         </div>
//     )
// }
//
// export default RenderResults;
import React, {useState, useEffect} from 'react';
import {render} from 'react-dom';
import useGlobal from "../store";

import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const RenderResults = () => {

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);


    const [rowData, setRowData] = useState(null);

    const [globalState, globalActions] = useGlobal();
    const {response, loading} = globalState

    useEffect(() => {
        if (response?.length > 0) {
            setRowData(response)
            globalActions.actions.loadingActions(false)
        }
    }, [response])

    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}>
                <AgGridColumn field="url"></AgGridColumn>
                <AgGridColumn field="title"></AgGridColumn>
                <AgGridColumn field="description"></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default RenderResults
