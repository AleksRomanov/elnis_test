import React, {useState} from 'react';
import values from 'lodash/values';
import PropTypes from 'prop-types';
import TreeNode from './TreeNode';
import {nanoid} from "nanoid";
// import JsonData from '.././example.json';
// import {apiReducer} from './../store/api-reducer';
// import {useFetchJsonDataQuery} from './../store/api-reducer';

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

const data = {
    '/home': {
        name: '/home',
        type: 'folder',
        isRoot: true,
        children: ['/home/david', '/home/jslancer'],
    },
    '/home/david': {
        name: '/home/david',
        type: 'folder',
        children: ['/home/david/readme.md'],
    },
    '/home/david/readme.md': {
        name: '/home/david/readme.md',
        type: 'file',
        children: 'Thanks for reading me me. But there is nothing here.'
    },
    '/home/jslancer': {
        name: '/home/jslancer',
        type: 'folder',
        children: ['/home/jslancer/projects', '/home/jslancer/vblogs'],
    },
    '/home/jslancer/projects': {
        name: '/home/jslancer/projects',
        type: 'folder',
        children: ['/home/jslancer/projects/treeview'],
    },
    '/home/jslancer/projects/treeview': {
        name: '/home/jslancer/projects/treeview',
        type: 'folder',
        children: [],
    },
    '/home/jslancer/vblogs': {
        name: '/home/jslancer/vblogs',
        type: 'folder',
        children: [],
    },   
};
    // const data = [JsonData[0].contents[0]];
    // const data = useFetchJsonDataQuery();
    // const data = Object.entries(JsonData)[0];
    // const data = JsonData[0].contents[0].contents;
    // const data = JsonData[0].contents[0];


function Tree({onSelect}) {
    // export default class Tree extends Component {
    // console.log(data);
 
    // const {data: fetchJsonData, isSuccess: isSuccessFetchJsonData} = useFetchJsonDataQuery();
    const [nodes, setNodes] = useState(data);


    // state = {
    //     nodes: data,
    // };

    // useEffect(() => {
    //     console.log('use')
    // }, [nodes]);

    const getRootNodes = () => {
        return values(nodes).filter(node => node.isRoot === true);
    };
    // getRootNodes = () => {
    //     const {nodes} = this.state;
    //     return values(nodes).filter(node => node.isRoot === true);
    // }

    const getChildNodes = (node) => {
        if (!node.children) {
            return [];
        } else {
            return node.children.map(name => nodes[name]);
        }
    }

    // getChildNodes = (node) => {
    //     // const {nodes} = this.state;
    //     if (!node.children) return [];
    //     return node.children.map(path => nodes[path]);
    // }

    const onToggle = (node) => {
        nodes[node.name].isOpen = !node.isOpen;
        // setNodes(nodes);
        return setNodes({
                ...nodes,
            }
        );
    }

    // onToggle = (node) => {
    //     const {nodes} = this.state;
    //     nodes[node.path].isOpen = !node.isOpen;
    //     this.setState({nodes});
    // }

    const onNodeSelect = (node) => {
        onSelect(node);
    }

    // onNodeSelect = node => {
    //     const {onSelect} = this.props;
    //     onSelect(node);
    // }

    // const rootNodes = getRootNodes();
    return (
        <div>
            {getRootNodes().map(node => (
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
