import React from 'react';
// import TreeView from '@mui/lab/TreeView';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import TreeItem from '@mui/lab/TreeItem';
import {useEffect} from 'react';
import {useFetchJsonDataQuery} from '../../store/api-reducer';

function DataManager() {
    const {data: fetchJsonData, isSuccess: isSuccessFetchJsonData} = useFetchJsonDataQuery(undefined);

    useEffect(() => {
        if (isSuccessFetchJsonData && fetchJsonData) {
            console.log("777777777");
        }
    }, [fetchJsonData, isSuccessFetchJsonData]);


    // const data = c;
    // const data = Object.entries(JsonData)[0];
    // const bil = data[1].contents;
    // console.log(data);
    // if (data) {
    // const displayData = fetchJsonData.map(
    //     (info: any, i: any) => {
    //         return (
    //             <tr key={i}>
    //                 <th>{info.type}</th>
    //                 <th>{info.name}</th>
    //                 <th>{info.size}</th>
    //             </tr>
    //         )
    //     }
    // )
    // }


    // console.log(JsonData[0].contents[0].contents);
    // console.log(JsonData[0].contents[0].contents);
    return (
        <>
            <h1>!!!!</h1>
            {/*{displayData}*/}
            {/*<thead>*/}
            {/*<tr>*/}
            {/*    <td>{DisplayData}</td>*/}
            {/*    <td>File name</td>*/}
            {/*    <td>size</td>*/}
            {/*</tr>*/}
            {/*</thead>*/}
            {/*<tbody>*/}
            {/*/!*{DisplayData}*!/*/}
            {/*<TreeView aria-label="file system navigator" defaultCollapseIcon={<ExpandMoreIcon/>} defaultExpandIcon={<ChevronRightIcon/>} sx={{border: '1px solid red', height: 600, flexGrow: 1, width: 200, overflowY: 'auto'}}>*/}
            {/*    <TreeItem nodeId="1" label={DisplayData}>*/}
            {/*        <TreeItem nodeId="2" label={DisplayData}>*/}
            {/*            <TreeItem nodeId="3" label={DisplayData}/>*/}
            {/*        </TreeItem>*/}
            {/*    </TreeItem>*/}
            {/*</TreeView>*/}
            {/*</tbody>*/}
        </>
    )
}

export default DataManager;
