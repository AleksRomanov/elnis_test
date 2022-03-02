import React, {useState, useEffect} from 'react';
import values from 'lodash/values';
import PropTypes, {object} from 'prop-types';
import TreeNode from './TreeNode';
import {nanoid} from "nanoid";
// import JsonData from '.././example.json';
// import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
// import { useFetchJsonDataQuery } from '../store/api-reducer';
// import {apiReducer} from './../store/api-reducer';
import {useGottenJsonDataQuery} from '../store/api-reducer';
import {type} from "os";
import {value} from "lodash/seq";

// const data = {
//     '/root': {
//         path: '/root',
//         type: 'folder',
//         isRoot: true,
//         children: ['/root/david', '/root/jslancer'],
//     },
//     '/root/david': {
//         path: '/root/david',
//         type: 'folder',
//         children: ['/root/david/readme.md'],
//     },
//     '/root/david/readme.md': {
//         path: '/root/david/readme.md',
//         type: 'file',
//         children: 'Thanks for reading me me. But there is nothing here.'
//     },
//     '/root/jslancer': {
//         path: '/root/jslancer',
//         type: 'folder',
//         children: ['/root/jslancer/projects', '/root/jslancer/vblogs'],
//     },
//     '/root/jslancer/projects': {
//         path: '/root/jslancer/projects',
//         type: 'folder',
//         children: ['/root/jslancer/projects/treeview'],
//     },
//     '/root/jslancer/projects/treeview': {
//         path: '/root/jslancer/projects/treeview',
//         type: 'folder',
//         children: [],
//     },
//     '/root/jslancer/vblogs': {
//         path: '/root/jslancer/vblogs',
//         type: 'folder',
//         children: [],
//     },
// };

// const data = {
//     '/home': {
//         name: '/home',
//         type: 'folder',
//         isRoot: true,
//         contents: ['/home/david', '/home/jslancer'],
//     },
//     '/home/david': {
//         name: '/home/david',
//         type: 'folder',
//         contents: ['/home/david/readme.md'],
//     },
//     '/home/david/readme.md': {
//         name: '/home/david/readme.md',
//         type: 'file',
//         contents: 'Thanks for reading me me. But there is nothing here.'
//     },
//     '/home/jslancer': {
//         name: '/home/jslancer',
//         type: 'folder',
//         contents: ['/home/jslancer/projects', '/home/jslancer/vblogs'],
//     },
//     '/home/jslancer/projects': {
//         name: '/home/jslancer/projects',
//         type: 'folder',
//         contents: ['/home/jslancer/projects/treeview'],
//     },
//     '/home/jslancer/projects/treeview': {
//         name: '/home/jslancer/projects/treeview',
//         type: 'folder',
//         contents: [],
//     },
//     '/home/jslancer/vblogs': {
//         name: '/home/jslancer/vblogs',
//         type: 'folder',
//         contents: [],
//     },
// };

function Tree({onSelect}) {
    const {data: gottenJsonData, isSuccess: isSuccessGettedJsonData} = useGottenJsonDataQuery(undefined);
    const [jsonData, setJsonData] = useState([{}]);

    useEffect(() => {
        if (isSuccessGettedJsonData && gottenJsonData) {




            setJsonData(gottenJsonData)
        }
    }, [gottenJsonData, isSuccessGettedJsonData]);

    if (!isSuccessGettedJsonData) {
        return (
            <p>Loading ...</p>
        );
    }

    // const findDirectory = () => jsonData.find(({type}) => type === "directory");
    // console.log(findDirectory);

    // function getKeyByValue(jsonData, value) {
    //     return Object.keys(jsonData).find(key => object[key] === value);
    // }


    // let jsonData = [];         //jsonData
    // for (const i in jsonData) {
    //     const v = jsonData[i]
    //     jsonData.push(v + Number(i))
    // }
    //
    // return jsonData;

    // let jsonData = [];         //jsonData
    // for (const [i, v] of arr.entries()) {
    //     jsonData.push(v + i)
    // }
    // return jsonData;

    // const node = (jsonData) => {
    //     return jsonData[node].filter(name => name.isRoot === true);
    // };

    const getChildNodes = (jsonData) => {
        if (!jsonData.children) {
            return jsonData.children.map(name => jsonData[name]);
        }
    }
    // onToggle = (node) => {
    //     const { nodes } = this.state;
    //     nodes[node.path].isOpen = !node.isOpen;
    //     this.setState({ nodes });
    // }
    const onToggle = (node) => {
        console.log(node);
        console.log(jsonData);


        // nodes[node.path].isOpen = !node.isOpen;
    }

    const onNodeSelect = (jsonData) => {
        onSelect(jsonData);
    }

    return (
        <TreeNode
            node={jsonData[0]}
            // node2={jsonData[1]}
            getChildNodes={getChildNodes}
            onToggle={onToggle}
            onNodeSelect={onNodeSelect}
            key={nanoid()}
            // level={level}
        />
    )
}

export default Tree;

Tree.propTypes = {
    onSelect: PropTypes.func,
};
