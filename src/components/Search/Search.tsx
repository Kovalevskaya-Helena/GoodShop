import React, { useState, useEffect, useCallback } from 'react'
import { Input,Button,Row,List} from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';

import { Api, type Good } from 'api';

import css from './search.module.css'

const api = new Api();

export const Search: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showInput = () => {
    setVisible(true);
  };
  
  const hideInput = () => {
    setVisible(false);
  };

 const [value, setValue] = useState('')
 const [options, setOptions] = useState<Good[]>([]);

 const getSearchGoods = useCallback(debounce((value) => api.getSearch(value).then(({ items }) => { setOptions(items) }), 1500), []);

  useEffect(() => {
    if (value.length > 2) {
      getSearchGoods(value);
    } else {
      getSearchGoods.cancel();
    }
  }, [value]);

  const onhandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Row style={{ whiteSpace:'nowrap' }}>
      <Button style={{ border:'none' }}>
        <SearchOutlined  style={{ fontSize:'20px' }} onClick={ showInput }/>
      </Button>

      {visible && (
        <div className={ css.input }>
          <Input onChange={ onhandlerChange } placeholder="search" />

          <List
            bordered
            dataSource={ options }
            renderItem={({ label, id }) => (
              <List.Item key={ id }>
                <Link to={`/good/${id}`} onClick={ hideInput }>{label}</Link>
              </List.Item>
            )}>
          </List>
        </div>
      )}
    </Row>
  )
}
