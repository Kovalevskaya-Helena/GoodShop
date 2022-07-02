import React from 'react';
import { PageHeader} from 'antd';
import { Divider } from 'antd';
import { Link } from 'react-router-dom';
import  {UserOutlined,ShoppingCartOutlined,SearchOutlined} from '@ant-design/icons'
import { MenuApp } from 'components/Menu';
import { Badge } from 'antd';
import { Cart } from 'components/Cart';

/*Добавить телефон*/

export const Header:React.FC=()=>{
  return(<>
  <PageHeader
    className="site-page-header"
   
    onBack={() => window.history.back()}
    title={<Link to='/' style={{ color: '#C71585' }}>BAZA Brothers</Link>}
    extra={[
      <MenuApp/>,
      <Link to='/goods'>All Goods</Link>,
        <SearchOutlined  style={{fontSize:'20px'}}/>,
        <Link to='/registration' style={{ color: '#000000' }}><UserOutlined style={{fontSize:'20px'}}/></Link>,
        <Link to='/cart'>
    <Badge size="small" count={5} style={{ backgroundColor: '#C71585' }}>
     <ShoppingCartOutlined style={{fontSize:'20px'}}/>
    </Badge>
  </Link>,
  <Cart/>
      ]} 
  />
    <Divider></Divider>
  </>)

}