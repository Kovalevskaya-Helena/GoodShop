import React from 'react';
import { PageHeader } from 'antd';
import { Divider } from 'antd';
import { Link } from 'react-router-dom';
import  {UserOutlined,ShoppingCartOutlined,EnvironmentOutlined} from '@ant-design/icons'


export const Header:React.FC=()=>{
  return(<>
  <PageHeader
    className="site-page-header"
    onBack={() => window.history.back()}
    title="BAZA Brothers"
    extra={[
        <Link to='/home'>BAZA Brothers</Link>,
        <EnvironmentOutlined style={{fontSize:'20px'}}/>,
        <UserOutlined style={{fontSize:'20px'}}/>,
        <ShoppingCartOutlined style={{fontSize:'20px'}}/>
      
      ]} 
  /><Divider></Divider>
  </>)

}