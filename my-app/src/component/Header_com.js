import React, {useState} from 'react'
import '../scss/header.scss'
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css'
import { MenuOutlined} from '@ant-design/icons'
import { Layout} from 'antd'
function Header_com(props) {
   
    return (
      <>
      <MenuOutlined onClick={()=>props.setToggle(!props.toggle)} style={{fontSize:'35px',color:'#fff',padding:'0 5px'}}/>
        
      </>
        
            
    )
}
export default Header_com