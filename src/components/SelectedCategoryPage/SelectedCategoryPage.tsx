
import { Divider } from 'antd';
import {List } from 'antd';
import {Card} from '../Card'
import  { ArrowLeftOutlined} from '@ant-design/icons'
import { Button } from 'antd';
import { Spinner } from 'components/Spinner';
import { ErrorAlert } from 'components/ErrorAlert';
import { useSelectedCategoryPage } from './useSelectedCategoryPage';


export const SelectedCategoryPage:React.FC=()=>{

  const categoryHook=useSelectedCategoryPage()


   return (<>
   {categoryHook.loading&&<Spinner/>}
   {categoryHook.error&&<ErrorAlert/>}
   
      {categoryHook.loaded&& <><Divider><div >
        <Button type="text" onClick={categoryHook.goBack}><ArrowLeftOutlined /></Button>
        {categoryHook.category[0].categoryLabel}</div></Divider>
   
   <Divider></Divider>
   <List grid={{ gutter:40,column:4 }} 
   dataSource={categoryHook.category}
   renderItem={item => (
      <div>
      <List.Item>
        <Card label={item.label} id={item.id} price={item.price} img={item.img}/>
      </List.Item></div>
    )}
   >
   </List>
   </>}

   </>)
   
}