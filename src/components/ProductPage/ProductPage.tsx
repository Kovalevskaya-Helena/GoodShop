import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Col, Row } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { selectorsGood,actionsGood} from 'store';
import { AppDispatch } from 'store';
import { Api } from 'api';
import { Image, Button,Space,Breadcrumb ,Divider} from 'antd';
import React, { useState } from 'react';
import css from './productpage.module.css'
import { PlusOutlined,MinusOutlined } from '@ant-design/icons';

const api = new Api()


///добавить страничку заглушку,если товар не найден

export const ProductPage: React.FC = () => {

  const { idGood } = useParams() as { idGood: string };
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(actionsGood.fetchProduct(idGood))
  }, []);

  const dispatch = useDispatch<AppDispatch>()
  const good = useSelector(selectorsGood.getGood)

  const loading = useSelector(selectorsGood.getIsLoading)
  const loaded = useSelector(selectorsGood.getIsLoaded)
  const error = useSelector(selectorsGood.getIsError)
  const navigate=useNavigate()
  const goBack=()=>navigate(-1);

  const { items: [item] } = good

  console.log(item);
  return (<>
    <Row>
      <Col span={24}  >
        <Breadcrumb style={{margin:'0 0 0 50%'}}>
         <Breadcrumb.Item onClick={goBack} >Category</Breadcrumb.Item>
         <Breadcrumb.Item>{item.label}</Breadcrumb.Item>
        </Breadcrumb>
        <Divider/>
      </Col>
      <Col span={12}> <>
        <Image
          preview={{ visible: false }}
          width={400}
          src={`${item.img}`}
          onClick={() => setVisible(true)}
        />
        <div style={{ display: 'none' }}>
          <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
            <Image src={`${item.img}`} />
            <Image src={`${item.img}`} />
            <Image src={`${item.img}`} />
          </Image.PreviewGroup>
        </div>
      </></Col>
      <Col span={12}>
        <Space direction="vertical" size="middle" > <div>
          <Space direction="vertical" size="middle" >
        <div className={css.title}>{item.label}</div>
        <div className={css.price}>{`${item.price}$`}</div>
        <div>{item.description} </div>
        </Space>
      </div>
      <Space direction="vertical" size="middle" style={{ display: 'flex', margin:'2% 0 0 0' }}>
        <div>
            <Space> <Button  icon={<PlusOutlined />} />
            <span className={css.count}>1</span>
          <Button  icon={<MinusOutlined />} /></Space>
           
          </div>
        
          <Button size="large">
            Add to cart
          </Button>
      </Space>
       
        </Space>
        </Col>

    </Row>

  </>)
};