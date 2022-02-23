import React, {useState} from 'react';
import styled from 'styled-components';
import Tree from './Tree';

const StyledFileExplorer = styled.div`
  // width: 800px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;  
`;

const TreeWrapper = styled.div`
  width: 250px;
`;

function FileExplorer() {
    const [selectedFile, setSelectedFile] = useState(null);
    // state = {
    //     selectedFile: null,
    // };

    const onSelect = (file) => {
        console.log('213223414124')
        setSelectedFile({selectedFile: file})
    };
    // onSelect = (file) => this.setState({selectedFile: file});

    // const {selectedFile} = this.state;

    return (
        <StyledFileExplorer>
            <TreeWrapper>
                <Tree onSelect={onSelect}/>
            </TreeWrapper>
            <div>
                {selectedFile && selectedFile.type === 'file' && selectedFile.content}
            </div>
        </StyledFileExplorer>
    )
}

export default FileExplorer;
