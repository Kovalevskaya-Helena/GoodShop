import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Col, Row, Image, Button, Space, Breadcrumb,Divider } from 'antd';
import { PlusOutlined,MinusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux";

import { AppDispatch, selectorsGood, actionsGood, actionsCart, selectorsCart } from 'store';
import { Good } from 'api';

import { Spinner } from 'components/Spinner';
import { ErrorAlert } from 'components/ErrorAlert';

import css from './productpage.module.css';

export const ProductPage: React.FC = () => {
  const { idGood } = useParams() as { idGood: string };
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const good = useSelector(selectorsGood.getGood);
  const loading = useSelector(selectorsGood.getIsLoading);
  const loaded = useSelector(selectorsGood.getIsLoaded);
  const error = useSelector(selectorsGood.getIsError);
  const goodInCart = useSelector(selectorsCart.getGoodById(good.items[0]?.id));

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(actionsGood.fetchProduct(idGood));
  }, [idGood]);


  const goBack = () => navigate(-1);

  const addToCartHandler = (product: Good) => {
    dispatch(actionsCart.addToCart(product));
  };

  const removeToCartHandler = (product: Good) => {
    dispatch(actionsCart.removeFromCart(product));
  };

  if (loading) {
    return <Spinner/>
  }

  const { items } = good;

  if (!items.length && loaded) {
    return <div>Нет товара</div>;
  }

  const [currentGood = {} as Good] = items;
  const { img, price, description, label } = currentGood;

  console.log({ currentGood })

  return (
    <>
      {error && <ErrorAlert />}
      {loaded && (
        <Row>
          <Col span={ 24 }>
            <Breadcrumb style={{ margin:'0 0 0 50%' }}>
            <Breadcrumb.Item onClick={ goBack }>Category</Breadcrumb.Item>
            <Breadcrumb.Item>{label}</Breadcrumb.Item>
            </Breadcrumb>
            <Divider />
          </Col>

          <Col span={ 12 }>
            <Image
              preview={{ visible: false }}
              width={ 400 }
              src={ img }
              onClick={ () => setVisible(true) }
            />
            <div style={{ display: 'none' }}>
              <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                <Image src={ img } />
                <Image src={ img } />
                <Image src={ img } />
              </Image.PreviewGroup>
            </div>
          </Col>

          <Col span={ 12 }>
            <Space direction="vertical" size="middle">
              <div>
                <Space direction="vertical" size="middle">
                  <div className={ css.title }>{label}</div>
                  <div className={ css.price }>{price}</div>
                  <div>{description}</div>
                </Space>
              </div>
              <Space direction="vertical" size="middle" style={{ display: 'flex', margin:'2% 0 0 0' }}>
                <div>
                  <Space>
                    <Button icon={ <PlusOutlined /> } onClick= {() => addToCartHandler(currentGood) } />
                    <span className={ css.count }>{goodInCart?.count ?? 0}</span>
                    <Button icon={ <MinusOutlined /> } onClick={ () => removeToCartHandler(currentGood) }/>
                  </Space>
                </div>
              </Space>
            </Space>
          </Col>
        </Row>
      )}
    </>
  );
};
