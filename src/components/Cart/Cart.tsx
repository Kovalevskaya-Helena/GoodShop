import { Button, Drawer, Space } from 'antd';
import type { DrawerProps } from 'antd/es/drawer';
import React, { useState } from 'react';
import { Badge,Row,Col,Image,Divider } from 'antd';
import  {ShoppingCartOutlined} from '@ant-design/icons'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectorsCart, actionsCart } from 'store/sliceCart';
import { AppDispatch } from 'store';
import { Spinner } from 'components/Spinner';
import { ErrorAlert } from 'components/ErrorAlert';
import { PlusOutlined,MinusOutlined } from '@ant-design/icons';
import { Good } from 'api';



export const Cart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cart = useSelector(selectorsCart.getCart);

  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');


  const loading = useSelector(selectorsCart.getIsLoading);
  const loaded = useSelector(selectorsCart.getIsLoaded);
  const error = useSelector(selectorsCart.getIsError);
  useEffect(() => {
    dispatch(actionsCart.fetchCart());
  }, [dispatch])

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const addToCartHandler = (product: Good) => {
    dispatch(actionsCart.addToCart(product));
  };

  const removeToCartHandler = (product: Good) => {
    dispatch(actionsCart.removeFromCart(product));
  };

  
  if (loading) {
    return <Spinner/>
  }


  

  console.log(cart);
  
  

  return (
    
    <>
    
      <Space>
 
        <Button onClick={showDrawer} style={{border:'none'}}>
          <Badge size="small" count={cart.reduce((acc,item)=>acc+item.count,0)} style={{ backgroundColor: '#C71585' }}>
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
        {error && <ErrorAlert />}
        {(!cart.length && loaded)&&<div>Корзина пуста</div>}
        {loaded && <>
        <Row>
           {cart.map(({good,count})=> <Space size="middle" style={{ display: 'flex',margin:'10% 0 0 0' }}>
          <Col span={24}>
            <Image
    width={200}
    src={good.img}
  />
            </Col>
            <Col span={24}>
              <Col span={24}>{good.label}</Col>
              <Col span={24}><Space>
                    <Button icon={ <PlusOutlined /> } onClick= {() => addToCartHandler(good) } />
                    <Button icon={ <MinusOutlined /> } onClick={ () => removeToCartHandler(good) }/>
                  </Space>
                  </Col>
                  <Col span={24}>{`${good.price} x ${count}` }</Col>
              
            </Col> 
            </Space>

            
            
           
           
          )}

        </Row>
        <Divider/>
        <Space>
           <Row justify="center" align='middle'>
            <Col span={18}>TOTAL AMOUNT:</Col>
            <Col span={6}><div>{cart.reduce((acc,item)=>acc+item.count*item.good.price,0)} </div></Col>
            </Row>
        </Space>
        

        

       
        </>}
        
      </Drawer>
    </>
  );

}



