import { FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import {
  GlobalThemeProvider,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <InputGroup>
        <InputLeftAddon fontSize={'lg'}>
          <GithubOutlined />
        </InputLeftAddon>
        <Input placeholder={'A Input'} />
        <InputRightAddon fontSize={'lg'}>
          <FacebookOutlined />
        </InputRightAddon>
      </InputGroup>

      <InputGroup my={3}>
        <InputLeftAddon fontSize={'lg'}>
          <GithubOutlined />
        </InputLeftAddon>
        <Input placeholder={'A Input'} />
      </InputGroup>

      <InputGroup>
        <Input placeholder={'A Input'} />
        <InputRightAddon fontSize={'lg'}>
          <FacebookOutlined />
        </InputRightAddon>
      </InputGroup>
    </GlobalThemeProvider>
  );
};

export default Basic;
