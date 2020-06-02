import React ,{useState,useEffect} from 'react';
import Header_com from './component/Header_com'
import Slide_com from './component/Slide_com'

import Banner_page from './pages/Banner_page'
import Home_page from './pages/Home_page'
import Product_page from './pages/Product_page'
import ProductList_page from './pages/ProductList_page'
import OrderList_page from './pages/OrderList_page'
import Member_page from './pages/Member_page'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import 'antd/dist/antd.css'
import { Layout,BackTop } from 'antd'
import './scss/header.scss'

function App() {
const [toggle,setToggle]=useState(false)
const [toggleWidth,setToggleWidth]=useState(256)
  const { Header, Sider, Content } = Layout
  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  }
  useEffect(()=>{
    setToggleWidth(toggle?256:74)
  },[toggle])

  return (
    <>
    <Router>
    <Layout>
      <Header className="all-center" style={{ padding: "0 10px " }}>
      <Header_com  toggle={toggle} setToggle={(e)=>setToggle(e)} />
      </Header>
    </Layout>
    <Layout>
       <Sider width={toggleWidth}>
      <div className="ant-layout-sider ant-layout-sider-dark" style={{width:toggleWidth}}>  
        <Slide_com  style={{width:toggleWidth}} toggle={toggle} />
      </div>  
    </Sider> 
    <Content style={{padding:'25px'}}>
    
        <Switch>
          <Route exact path="/">
            <Home_page />
          </Route>
          <Route path="/banner">
            <Banner_page />
          </Route>
          <Route path="/product">
            <Product_page />
          </Route>
          <Route path="/productList">
            <ProductList_page />
          </Route>
          <Route path="/OrderList">
            <OrderList_page />
          </Route>
          <Route path="/Member">
            <Member_page />
          </Route>
          
          
        </Switch>
    </Content>
    <BackTop>
      <div style={style}>向上</div>
    </BackTop>
    </Layout>
    
    </Router>
      
      
    </>
  );
}

export default App;
