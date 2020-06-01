import React, { useState,useEffect } from 'react'
import { List,Button } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'
import '../scss/Upload_picBTN.scss'
import '../scss/ProductList_com.scss'
import {setNewItemToLocalStorage} from '../util/GetLocalStorage'
function ProductList_com() {
const [newPage,setNewPage]=useState(0)
const [minItem,setMinItem]=useState(0)
const [maxItem,setMaxItem]=useState(10)
const [newItem,setNewItem]=useState()
const [forRender,setForRender]=useState(false)

    const listData = [];
for (let i = 0; i <= 23; i++) {
  listData.push({
    showImg: 'garmin.jpg',
    name: `Forerunner 245 Music-${i}`,
    price:11490,
    count:10,
  });
  if(i===23&&listData.length===24){
    listData.push(newItem)
  }
}
console.log('listData',listData)
// let newItem=setNewItemToLocalStorage()
useEffect(() => {
    setNewItem(setNewItemToLocalStorage())
}, [])
useEffect(() => {
    console.log('newItem',newItem)
    // listData.push(setNewItemToLocalStorage())
}, [newItem])
// useEffect(() => {
//     console.log('listData',listData)
// }, [listData])
// useEffect(() => {
//     console.log('newPage',newPage)
//     console.log('minItem',minItem)
//     console.log('maxItem',maxItem)
// }, [newPage,minItem,maxItem])

const listDataBox=[]

// newItem.map((v,i)=>{
//     listDataBox.push(
//         <div className="flex product_list justify-content-around">
//         <img
//         width={272}
//         alt="logo"
//         src={'/images/'+v.showImg }
//       />
//       <div className="allcenter">
//         <List.Item key={v.name}>
//             <List.Item.Meta
//             title={<p>{v.name}</p>}
//             />
//             <p>價格：{v.price}</p>
//             <p>數量：{v.count}</p>
//         </List.Item>
//       </div>
//       <div className="flex-column margin-center">
//           <Button>編輯</Button>
//           <Button type="danger">刪除</Button>
//       </div>
//         </div>
//     )
// })
listData.map((v,i)=>{
    // console.log('minItem',minItem)
    // console.log('maxItem',maxItem)
    if(i>=minItem && i<=maxItem){
        listDataBox.push(
            <div className="flex product_list justify-content-around">
            <img
            width={272}
            alt="logo"
            src={'/images/'+v.showImg }
          />
          <div className="allcenter">
            <List.Item key={v.name}>
                <List.Item.Meta
                title={<p>{v.name}</p>}
                />
                <p>價格：{v.price}</p>
                <p>數量：{v.count}</p>
            </List.Item>
          </div>
          <div className="flex-column margin-center">
              <Button>編輯</Button>
              <Button type="danger">刪除</Button>
          </div>
            </div>
        )
    }
})


    return (
        <div>
            <List itemLayout="vertical"
            bordered="true"
            pagination={{
            onChange: page => {
                setNewPage(page)
                setMinItem(page*10-9)
                setMaxItem(page*10)
            },
            }}
            dataSource={listData}
            >
                {listDataBox}
            
            </List>
        </div>
    )
}
export default ProductList_com