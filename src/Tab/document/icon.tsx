import { AndroidFilled, AppleOutlined } from '@ant-design/icons';
import { Button, GlobalThemeProvider, Tabs } from 'Ocean';
import React from 'react';
import { TabItem } from '../index';

const items: TabItem[] = [
  {
    key: '1',
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
    icon: <AppleOutlined />,
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
    icon: <AndroidFilled />,
  },
];

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Tabs
        items={items}
        extraContent={<Button>Content</Button>}
        bodyStyle={{
          minHeight: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></Tabs>
    </GlobalThemeProvider>
  );
};

export default Basic;
