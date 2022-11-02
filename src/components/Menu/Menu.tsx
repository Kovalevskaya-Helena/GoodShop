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
  
  const menuHook=useMenu()

  return (
    <>
      <Space>
    
        <Button  onClick={menuHook.showDrawer}>
         <MenuOutlined />
        </Button>
      </Space>
      <Drawer
        placement={menuHook.placement}
        closable={false}
        onClose={menuHook.hideDrawer}
        visible={menuHook.visible}
        key={menuHook.placement}
      >
        <Menu >
          {menuHook.loading&&<Spinner/>}
          {menuHook.error&&<ErrorAlert/>}
          {menuHook.loaded&& menuHook.menuItems.map((item)=><MenuItem key={item.id}><Link to={`/category/${item.id}`}>{item.icon}{item.label}</Link></MenuItem>)
        }

                
        </Menu>
      </Drawer>
    </>
  );
};

