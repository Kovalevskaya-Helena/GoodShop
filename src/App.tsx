import {useEffect,useState} from 'react'
import { Header } from 'components/Header'
import {Routes,Route} from 'react-router-dom'
import { RegistrationForm } from 'components/RegistrationPage'
import { Api } from 'api'
/*import { CardCategory } from 'components/CardCategory'*/
import { CategoryPage } from 'components/CategoryPage'

import { useSelector, useDispatch } from "react-redux";
import { goodSelectors ,actions} from 'store'

export function App() {
   /*const [data,setData]=useState({})

   const good=useSelector(goodSelectors.getGood)
   const dispatch=useDispatch();

   /*const api=new Api();*/

  /*useEffect(()=>{
    // @ts-ignore
    dispatch(actions.fetchGood('8'))

    /*api.getGoodsByCategory('6').then((data)=>setData(data))
  }


   /* fetch('/api/goods?categoryTypeIds=2').then(r=>r.json()).then(({items})=>setData(items))
  },[])


  console.log(good)*/

 

  
  
  

  
  







  return (<>

  <Header/>
   <div>GoodShop
     
     <CategoryPage/>

    </div>
    <Routes>
     <Route path="/registration" element={<RegistrationForm />} /> 
    </Routes>
    
  </>
  
 
  );
}


