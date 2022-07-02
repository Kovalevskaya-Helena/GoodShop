import { Button, Drawer, Radio, Space } from 'antd';
import type { DrawerProps } from 'antd/es/drawer';
import type { RadioChangeEvent } from 'antd/es/radio';
import React, { useState } from 'react';
import { Badge } from 'antd';
import  {ShoppingCartOutlined} from '@ant-design/icons'



export const Cart:React.FC=()=>{
 const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

  const showDrawer = () => {
    setVisible(true);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Space>
 
        <Button onClick={showDrawer} style={{border:'none'}}>
          <Badge size="small" count={5} style={{ backgroundColor: '#C71585' }}>
     <ShoppingCartOutlined style={{fontSize:'20px'}}/>
    </Badge>
        </Button>
      </Space>
      <Drawer
        title="Cart"
        placement={placement}
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );

}



