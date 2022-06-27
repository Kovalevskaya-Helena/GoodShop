
import { Divider } from 'antd';
import {List } from 'antd';
import {CardItem} from '../Card'
import  { ArrowLeftOutlined} from '@ant-design/icons'
import { Button } from 'antd';
import { Spinner } from 'components/Spinner';
import { ErrorAlert } from 'components/ErrorAlert';
import { useSelectedCategoryPage } from './useSelectedCategoryPage';


export const SelectedCategoryPage:React.FC=()=>{

  const data=useSelectedCategoryPage()


   return (<>
   {data.loading&&<Spinner/>}
   {data.error&&<ErrorAlert/>}
   
      {data.loaded&& <><Divider><div >
        <Button type="text" onClick={data.goBack}><ArrowLeftOutlined /></Button>
        {data.category[0].categoryLabel}</div></Divider>
   
   <Divider></Divider>
   <List grid={{ gutter:40,column:4 }} 
   dataSource={data.category}
   renderItem={item => (
      <div>
      <List.Item>
        <CardItem label={item.label} id={item.id} price={item.price} img={item.img}/>
      </List.Item></div>
    )}
   >
   </List>
   </>}

   </>)
   
}