import { Layout } from 'antd';
import { Header } from 'components/Header'
import {Routes,Route} from 'react-router-dom'
import { RegistrationForm } from 'components/RegistrationPage'
import { CategoryPage } from 'components/CategoryPage'
import { GoodsPage } from 'components/GoodsPage'
import { SelectedCategoryPage } from 'components/SelectedCategoryPage'; 
import {Row,Col} from 'antd'

export function App() {
  const { Footer, Content } = Layout;
   


  return (<>
   <Layout>
      <Header />
      <Layout>
        <Content>

        <Row justify="center" align='middle'>
         
    <Col span={20}>
       <Routes>
             <Route path="/" element={<CategoryPage/>
} /> 
     <Route path="/registration" element={<RegistrationForm />} /> 
    
<Route path="/category/:idCategory" element={<SelectedCategoryPage/>
} /> 
      <Route path="/goods" element={<GoodsPage />} /> 
    </Routes>
    </Col>
    
        </Row>
         
    
          </Content>
        
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    
    
  </>
  
 
  );
}


