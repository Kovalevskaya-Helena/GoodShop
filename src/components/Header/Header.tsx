import React from 'react';
import { PageHeader} from 'antd';
import { Divider} from 'antd';
import { Link } from 'react-router-dom';
import  {UserOutlined,ShoppingCartOutlined,SearchOutlined,TeamOutlined} from '@ant-design/icons'
import { MenuApp } from 'components/Menu';
import { Cart } from 'components/Cart';
import { Search } from 'components/Search';



export const Header:React.FC=()=>{

  return(<>
  <PageHeader
    className="site-page-header"
    onBack={() => window.history.back()}
    title={<Link to='/' style={{ color: '#C71585' }}>BAZA Brothers</Link>}
    extra={[
      <MenuApp/>,
      <Link to='/goods'>All Goods</Link>,
      <Link to='/signIn' style={{ color: '#000000' }}><TeamOutlined style={{fontSize:'20px'}}/></Link>,
     <Search/>,
        <Link to='/registration' style={{ color: '#000000' }}><UserOutlined style={{fontSize:'20px'}}/></Link>,
        ,
  <Cart/>
      ]} 
  />
    <Divider></Divider>
  </>)

}