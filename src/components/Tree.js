import React, {useEffect, useState} from 'react';
import values from 'lodash/values';
import PropTypes from 'prop-types';
import TreeNode from './TreeNode';
import {nanoid} from "nanoid";

const data = {
    '/root': {
        path: '/root',
        type: 'folder',
        isRoot: true,
        children: ['/root/david', '/root/jslancer'],
    },
    '/root/david': {
        path: '/root/david',
        type: 'folder',
        children: ['/root/david/readme.md'],
    },
    '/root/david/readme.md': {
        path: '/root/david/readme.md',
        type: 'file',
        content: 'Thanks for reading me me. But there is nothing here.'
    },
    '/root/jslancer': {
        path: '/root/jslancer',
        type: 'folder',
        children: ['/root/jslancer/projects', '/root/jslancer/vblogs'],
    },
    '/root/jslancer/projects': {
        path: '/root/jslancer/projects',
        type: 'folder',
        children: ['/root/jslancer/projects/treeview'],
    },
    '/root/jslancer/projects/treeview': {
        path: '/root/jslancer/projects/treeview',
        type: 'folder',
        children: [],
    },
    '/root/jslancer/vblogs': {
        path: '/root/jslancer/vblogs',
        type: 'folder',
        children: [],
    },
}

function Tree({onSelect}) {
    // export default class Tree extends Component {
    const [nodes, setNodes] = useState(data);
    // state = {
    //     nodes: data,
    // };

    useEffect(() => {
        console.log('use')
    }, [nodes]);

    const getRootNodes = () => {
        console.log('root')
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
            return node.children.map(path => nodes[path]);
        }
    }

    // getChildNodes = (node) => {
    //     // const {nodes} = this.state;
    //     if (!node.children) return [];
    //     return node.children.map(path => nodes[path]);
    // }

    const onToggle = (node) => {
        console.log('move-huy')
        nodes[node.path].isOpen = !node.isOpen;
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
    console.log('render-huy')
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

// Tree.propTypes = {
//     onSelect: PropTypes.func.isRequired,
// };
