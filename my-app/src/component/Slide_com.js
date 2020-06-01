import React, {useState} from 'react'
import '../scss/header.scss'
import 'antd/dist/antd.css'
import { Layout,Menu  } from 'antd'
import {Link} from 'react-router-dom'
import {
    BankOutlined,PictureOutlined,ShopOutlined,ShoppingCartOutlined,UserOutlined,FormOutlined,AlignLeftOutlined
} from '@ant-design/icons';


function Slide_com(props) {
   
  const { Sider } = Layout
  const { SubMenu  } = Menu
    return (
        <>
      <Menu theme={"dark"} mode={"inline"} >
        <Menu.Item>
        <Link to="/">
        <BankOutlined style={{fontSize:'20px'}}/>
        {props.toggle?'公司資訊':''}
        </Link>
         
        </Menu.Item>
        <Menu.Item>
        
        <Link to="/banner">
        <PictureOutlined  style={{fontSize:'20px'}}/>
        {props.toggle?'Banner圖片管理':''}
        </Link>
        
        </Menu.Item>
        {/* <Menu.Item> */}
        <SubMenu key="sub1" icon={<ShopOutlined />} title="商品管理">
            <Menu.Item key="uploadPorduct">
              <Link to="/product">
              <FormOutlined  style={{fontSize:'20px'}} />
              {props.toggle?'新增商品':''}
              </Link> 
            </Menu.Item>
            <Menu.Item key="productList">
            <Link to="/productList">
            <AlignLeftOutlined  style={{fontSize:'20px'}} />
            {props.toggle?'商品列表':''}
            </Link>
            
            </Menu.Item>
            </SubMenu>
        {/* </Menu.Item> */}
        <Menu.Item>
        <Link to="/OrderList">
        <ShoppingCartOutlined  style={{fontSize:'20px'}}/>
        {props.toggle?'訂單管理':''}
        </Link>
        </Menu.Item>
        <Menu.Item>
        <Link to="/Member">
        <UserOutlined  style={{fontSize:'20px'}}/>
        {props.toggle?'會員管理':''}
        </Link>
        
        
        </Menu.Item>
      </Menu>

        </>
        
            
    )
}
export default Slide_com