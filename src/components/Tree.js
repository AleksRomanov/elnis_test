import React, {useState, useEffect} from 'react';
import values from 'lodash/values';
import PropTypes  from 'prop-types';
import TreeNode from './TreeNode';
import {nanoid} from "nanoid";
// import JsonData from '.././example.json';
// import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
// import { useFetchJsonDataQuery } from '../store/api-reducer';
// import {apiReducer} from './../store/api-reducer';
import {useGettedJsonDataQuery} from './../store/api-reducer';

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

// const data = Object.assign({}, JsonData[0]);
// console.log(data);


// const data = {};
// const dataCopy = Object.assign({}, data)
// console.log(data);
// console.log(dataCopy);

    // const data = [JsonData[0].contents[0]];
    // const data = useFetchJsonDataQuery();

    // const data = JsonData[0].contents[0];
    // const data = JsonData[0].contents[0];

function Tree({onSelect}) {
    // const dispatch = useAppDispatch();
    // const data = [];
    const {data: gettedJsonData, isSuccess: isSuccessGettedJsonData} = useGettedJsonDataQuery(undefined);
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        if (isSuccessGettedJsonData && gettedJsonData) {
            setJsonData(gettedJsonData)
        }
    }, [gettedJsonData, isSuccessGettedJsonData]);

    // console.log('777777777');
    // console.log(gettedJsonData);

    // const [nodes, setNodes] = useState(getJsonData);

    const getRootNodes = () => {
        return values(jsonData).filter(node => node.isRoot === true);
    };

    const getChildNodes = (node) => {
        if (!node.contents) {
            return [];
        } else {
            return node.contents.map(name => jsonData[name]);
        }
    }

    const onToggle = (node) => {
        jsonData[node.name].isOpen = !node.isOpen;
        // setNodes(nodes);
    // console.log(setNodes);
        return setJsonData({
                ...jsonData,
            }
        );
    }
    const onNodeSelect = (node) => {
        return onSelect(jsonData);
    }

    const rootNodes = getRootNodes();
    return (
        <div>
            {rootNodes.map(node => (
                <TreeNode
                    node={node}
                    getChildNodes={getChildNodes}
                    onToggle={onToggle}
                    onNodeSelect={onNodeSelect}
                    key={nanoid()}
                />
            ))}
        </div>
    )
}

export default Tree;

Tree.propTypes = {
    onSelect: PropTypes.func.isRequired,
};
