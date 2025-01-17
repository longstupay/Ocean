import { DropMenu, GlobalThemeProvider } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [visible, setVisible] = useState(false);

  return (
    <GlobalThemeProvider>
      <DropMenu
        setVisible={setVisible}
        visible={visible}
        data={[
          { content: 'Download' },
          { content: 'Copy' },
          { content: '关闭菜单', click: () => setVisible(false) },
        ]}
        content="Actions"
      />
    </GlobalThemeProvider>
  );
};

export default Basic;
