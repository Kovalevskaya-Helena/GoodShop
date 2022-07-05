import React from 'react'
import { GoodCategory } from 'components/GoodCategory';
import { Row } from 'antd';
import { Spinner } from 'components/Spinner';
import { ErrorAlert } from 'components/ErrorAlert';
import { useCategoryPage } from './useCategoryPage';



export const CategoryPage:React.FC=()=>{

  const data=useCategoryPage()
  
return (<Row >
  {data.loading&&<Spinner/>}
  {data.error&&<ErrorAlert/>
  }
  {data.loaded&&data.popularCategories.map(({category:{id,label},items})=><div key={id}>
    <GoodCategory label={label} items={items}/>
    </div>)}
  
  </Row>)


}
