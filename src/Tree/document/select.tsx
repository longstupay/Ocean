import { GlobalThemeProvider, Tree, TreeItem } from 'Ocean';
import React from 'react';
const TreeItemDemo = () => {
  return (
    <GlobalThemeProvider>
      <Tree mode="preview" selectable={true}>
        <TreeItem label="第一章" id="1">
          <TreeItem label="第二章" id="2">
            <TreeItem label="第四章" id="3"></TreeItem>
          </TreeItem>
          <TreeItem label="第三章" id="4"></TreeItem>
        </TreeItem>
      </Tree>
    </GlobalThemeProvider>
  );
};

export default TreeItemDemo;
