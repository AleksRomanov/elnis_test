import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import JsonData from '../../utils/examp.json';


function DataJson() {
    const data = JsonData[0].contents[0].contents;
    // const data = Object.entries(JsonData)[0];
    // const data2 = data[1].contents;
    // console.log(data);
    // if (data) {
    const DisplayData = data.map(
        (info: any, i: any) => {
            // console.log(info)
            return (
                <tr key={i}>
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
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon/>}
            defaultExpandIcon={<ChevronRightIcon/>}
            sx={{height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto'}}
        >
            <TreeItem nodeId="1" label="Applications">
                <TreeItem nodeId="2" label="Calendar"/>
            </TreeItem>
            <TreeItem nodeId="5" label="Documents">
                <TreeItem nodeId="10" label="OSS"/>
                <TreeItem nodeId="6" label="MUI">
                    <TreeItem nodeId="8" label="index.js"/>
                </TreeItem>
            </TreeItem>
            {DisplayData}
        </TreeView>
        // <table>
        //     <thead>
        //     <tr>
        //         <th>File name</th>
        //         <th>size</th>
        //     </tr>
        //     </thead>
        //     <tbody>
        //     {DisplayData}
        //     </tbody>
        // </table>
    )
}

export default DataJson;
