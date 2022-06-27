import { Menu } from 'antd';
import { Button, Drawer, Space } from 'antd';
import React from 'react';
import  {MenuOutlined} from '@ant-design/icons'
import MenuItem from "antd/lib/menu/MenuItem";
import { Link } from "react-router-dom";
import { Spinner } from 'components/Spinner';
import { ErrorAlert } from 'components/ErrorAlert';
import { useMenu } from './useMenu';

export const MenuApp: React.FC = () => {
  
  const data=useMenu()

  return (
    <>
      <Space>
    
        <Button  onClick={data.showDrawer}>
         <MenuOutlined />
        </Button>
      </Space>
      <Drawer
        placement={data.placement}
        closable={false}
        onClose={data.onClose}
        visible={data.visible}
        key={data.placement}
      >
        <Menu >
          {data.loading&&<Spinner/>}
          {data.error&&<ErrorAlert/>}
          {data.loaded&& data.menuItems.map((item)=><MenuItem key={item.id}><Link to={`/category/${item.id}`}>{item.Icon}{item.label}</Link></MenuItem>)}

                
        </Menu>
      </Drawer>
    </>
  );
};

