import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import JsonData from '../../example.json';
import {useEffect} from 'react';
import {useFetchJsonDataQuery} from '../../store/api-reducer';

// type dataType = {
//     data: any,
//     bil: any
//     JsonData: any
// }


// async function readFile(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, 'utf8', function (err, data) {
//             if (err) {
//                 reject(err);
//             }
//             resolve(data);
//         });
//     });
// }
//
//     await readFile("path/to/file");


function DataManager() {
    const {data: JsonData}: any = useFetchJsonDataQuery(undefined);

    useEffect(() => {
        if (JsonData) {
            console.log(data);
        }
    }, [JsonData, data]);


    // const data = c;
    // const data = Object.entries(JsonData)[0];
    // const bil = data[1].contents;
    // console.log(data);
    // if (data) {
    const DisplayData = data.map(
        (info: any, i: any) => {
            return (
                <table>
                    <tr key={i}>
                        <th>{info.type}</th>
                        <th>{info.name}</th>
                        <th>{info.size}</th>
                    </tr>
                </table>
            )
        }
    )
    // }


    // console.log(JsonData[0].contents[0].contents);
    // console.log(JsonData[0].contents[0].contents);
    return (
        <>
            <h1>!!!!</h1>

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
