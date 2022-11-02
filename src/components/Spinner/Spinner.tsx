import { Space, Spin } from 'antd';
import React from 'react';



export const Spinner: React.FC = () => <Space size="middle">
    
    <Spin size="large" style={{position:'absolute', top:'50%', left:'50%'}}/>
  </Space>