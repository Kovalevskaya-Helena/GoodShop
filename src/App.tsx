
import { Header } from 'components/Header'
import {Routes,Route} from 'react-router-dom'
import { RegistrationForm } from 'components/RegistrationPage'
import { CategoryPage } from 'components/CategoryPage'
import { GoodsPage } from 'components/GoodsPage'

export function App() {
   

 


  return (<>

  <Header/>
   <div>GoodShop
     
     <CategoryPage/>

    </div>
    <Routes>
     <Route path="/registration" element={<RegistrationForm />} /> 
      <Route path="/goods" element={<GoodsPage />} /> 
    </Routes>
    
  </>
  
 
  );
}


