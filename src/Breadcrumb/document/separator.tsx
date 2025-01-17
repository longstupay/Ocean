import { HomeFilled, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Breadcrumb, BreadcrumbItem } from 'Ocean';
import React from 'react';

const Basic = () => {
  const style = {
    marginBottom: '20px',
  };
  return (
    <>
      <div style={style}>
        <Breadcrumb separator={<RightOutlined />}>
          <BreadcrumbItem icon={<HomeFilled />}>Home</BreadcrumbItem>
          <BreadcrumbItem>Application1</BreadcrumbItem>
          <BreadcrumbItem>Application2</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <Breadcrumb separator={<LeftOutlined />}>
          <BreadcrumbItem icon={<HomeFilled />}>Home</BreadcrumbItem>
          <BreadcrumbItem>Application1</BreadcrumbItem>
          <BreadcrumbItem>Application2</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </>
  );
};
export default Basic;
