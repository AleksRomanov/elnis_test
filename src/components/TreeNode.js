import React from 'react';
import {FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight} from 'react-icons/fa';
import styled from 'styled-components';
import last from 'lodash/last';
import PropTypes, {node} from 'prop-types';
import {nanoid} from "nanoid";
import values from "lodash/values";

const getPaddingLeft = (level, type) => {
    let paddingLeft = level * 20;
    if (type === 'file') paddingLeft += 20;
    return paddingLeft;
}

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  padding-left: ${props => getPaddingLeft(props.level, props.type)}px;
  &:hover {
    background: lightgray;
  }
`;

const NodeIcon = styled.div`
  font-size: 12px;
  margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
`;


// data.forEach(doc => temp['title' in doc ? 'main' : 'content'].push(doc));
// const getNodeLabel = (node) => last(node.path.split('/'));
// const [getNodeLabel] = [node].find(node => [node].name === '/home');

const getNodeLabel = (node) => node.name;
// console.log(getNodeLabel);

const TreeNode = (props) => {
    // const {node, onToggle, onNodeSelect} = props;
    const {node, getChildNodes, onToggle, onNodeSelect} = props;

    return (
        <React.Fragment key={nanoid()}>
            <StyledTreeNode type={node.type}>
                <NodeIcon onClick={() => onToggle(node)}>
                    {node.type === "directory" && (node.isOpen ? <FaChevronDown/> : <FaChevronRight/>)}
                </NodeIcon>
                <NodeIcon marginRight={10}>
                    {node.type === 'file' && <FaFile/>}
                    {node.type === 'directory' && node.isOpen === true && <FaFolderOpen/>}
                    {node.type === 'directory' && !node.isOpen && <FaFolder/>}
                </NodeIcon>
                <span role="button" onClick={() => onNodeSelect(node)}>
                    {/*{getNodeLabel(node)}*/}
                    {node.name}
                </span>
            </StyledTreeNode>

            {node.isOpen && getChildNodes(node).map(childNode => (
                <TreeNode
                {...props}
                    node={childNode}
                    // level={level + 1}
                    key={nanoid()}
                />
            ))}
        </React.Fragment>
    );
}

TreeNode.propTypes = {
    // node: PropTypes.func.isRequired,
    node: PropTypes.object.isRequired,
    getChildNodes: PropTypes.func.isRequired,
    level: PropTypes.number.isRequired,
    onToggle: PropTypes.func.isRequired,
    onNodeSelect: PropTypes.func.isRequired,
};

// TreeNode.defaultProps = {
//     level: 0,
// };

export default TreeNode;
