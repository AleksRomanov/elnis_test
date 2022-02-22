import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import JsonData from '../../utils/examp.json';

function DataJson() {
    // const data = JsonData[0].contents[0].contents;
    const data = Object.entries(JsonData)[0];
    const bil = data[1].contents;
    // console.log(data);
    // if (data) {
    const DisplayData = bil.map(
        (info: any, i: any) => {
            // console.log(info)
            return (
                <tr key={i}>
                    <th>{info.type}</th>
                    <th>{info.name}</th>
                    <th>{info.size}</th>
                </tr>
            )
        }
    )
    // }


    // console.log(JsonData[0].contents[0].contents);
    // console.log(JsonData[0].contents[0].contents);
    return (
        <table>
            <thead>
            <tr>
                <td>{DisplayData.type}</td>
                <td>File name</td>
                <td>size</td>
            </tr>
            </thead>
            <tbody>
            {/*{DisplayData}*/}
            <TreeView aria-label="file system navigator" defaultCollapseIcon={<ExpandMoreIcon/>} defaultExpandIcon={<ChevronRightIcon/>} sx={{border: '1px solid red', height: 600, flexGrow: 1, width: 200, overflowY: 'auto'}}>
                <TreeItem nodeId="1" label={DisplayData}>
                    <TreeItem nodeId="2" label={DisplayData}>
                        <TreeItem nodeId="3" label={DisplayData}/>
                    </TreeItem>
                </TreeItem>
            </TreeView>
            </tbody>
        </table>

    )
}

export default DataJson;
