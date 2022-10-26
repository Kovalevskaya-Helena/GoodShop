import { Layout } from 'antd';
import { Header } from 'components/Header'
import {Routes,Route} from 'react-router-dom'
import { RegistrationForm } from 'components/RegistrationPage'
import { CategoryPage } from 'components/CategoryPage'
import { GoodsPage } from 'components/GoodsPage'
import { SelectedCategoryPage } from 'components/SelectedCategoryPage'; 
import {Row,Col} from 'antd'
import { ProductPage } from 'components/ProductPage';
import { SignInForm } from 'components/SignIn';

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
              <Route path="/signIn"  element={<SignInForm/>}/> 
              <Route path="/registration" element={<RegistrationForm />} /> 
              <Route path="/category/:idCategory" element={<SelectedCategoryPage/>
} /> 
              <Route path="*" element={<RegistrationForm/>
} /> 
              <Route path="/good/:idGood" element={<ProductPage/>
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


