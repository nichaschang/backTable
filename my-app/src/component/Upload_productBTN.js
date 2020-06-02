import React,{useState,useEffect} from 'react'
import { Button,Input,Select } from 'antd'
import '../scss/Banner_page.scss'
import '../scss/Upload_picBTN.scss'
import {creatNewItem} from '../util/GetLocalStorage'

function Upload_productBTN() {
  const { Option } = Select;
const provinceData = ['跑步', '日常'];

  //上傳圖片
    const [fileList, setFileList] = useState([]);
  //顯示圖片
    const [showImg,setShowImg]=useState('')
    //開關
    const [forRender,setForRender]=useState(false)
    
    const [productItem,setProductItem]=useState([])

    const getFile=(val)=>{
      let newData=fileList
      if(val.target.files[0]==undefined){
        return false
      }else{
        if(val.target.files[0]){
          newData.push(val.target.files[0].name)
        }
      }
      if(fileList.length>=1){
          setShowImg(fileList[fileList.length-1])
      }
      setForRender(!forRender)
      setFileList(newData)
      }
useEffect(()=>{
console.log('productItem',productItem)
},[productItem])
      function editProductItem(e,type){
        let newData={
          name:productItem.name||'',
          price:productItem.price||'',
          count:productItem.count||'',
          sort:'跑步',
        }
        switch (type){
          case 'name':
            newData.name=e.target.value
            break
          case 'price':
            newData.price=e.target.value
            break
          case 'count':
            newData.count=e.target.value
            break
          case 'sort':
            newData.sort=e
            break
          default:
            newData={
              name:'',
              price:'',
              count:'',
              sort:'跑步',
            }
            break
        }
        setProductItem(newData)
      }

      function getProductItem(){
        creatNewItem(fileList,productItem,showImg)
        // setFileList([])
        // setShowImg('')
        // setProductItem([])
        window.location.reload()
      }

    let fileList_box=[]
    makeImg()
    function makeImg(){
      fileList.map((v,i)=>{
          console.log(v)
          console.log(showImg)
        fileList_box.push(
            <div className="flex-column">
            <img src={'images/'+v } className="show-img-s"/>
          <Button onClick={()=>setShowImg(fileList[i])} className={showImg==v?'defaultImg':''}>設為首圖</Button>
          <Button type="danger">刪除</Button>
            </div>
        )
      })
    }
    const loadImg_box=(
        <div className="loadImg_box"></div>
    )

      const loadImg=(
          <div style={{width:'300px',height:'300px',background:'#fff'}}></div>
      )
      return (
        <>
        <div className="flex upload-product">
            <div style={{width:'30%'}}>
            <div className="flex">
                <div className="show-product">
                    {showImg?(<img src={'./images/'+showImg} className="show-img"/>):loadImg}   
                    <p className="txt-l">首圖</p>
                </div>
                <div className="input-upload-type" style={{margin:'0 30px'}}>
                    <span className="input-upload-text">上傳圖片</span>
                    <input className="input-upload-list" type="file" onChange={(e)=>getFile(e)}/>
                </div>
            </div>
                <div className="flex m-3">
                {fileList_box.length==0?loadImg_box:fileList_box}
                </div>
                
            </div>

            <div style={{width:'30%'}}>
              <div className="pName-list">
              名稱：<Input type="text" onChange={(e)=>editProductItem(e,'name')}/>
              </div>
              <div className="pName-list">
              價格：<Input type="text" onChange={(e)=>editProductItem(e,'price')}/>
              </div>
              <div className="pName-list">
              數量：<Input type="text" onChange={(e)=>editProductItem(e,'count')} />
            </div>
              <div className="pName-list">
              分類：
              <Select
          defaultValue={provinceData[0]}
          style={{ width: 150 }}
          onChange={(e)=>editProductItem(e,'sort')}
        >
          {provinceData.map(province => (
            <Option key={province}>{province}</Option>
          ))}
        </Select>
            </div>
              <div className="pName-list">
                <Button type="primary" className="m-1" onClick={()=>getProductItem()}>送出</Button>
              </div>
            </div>
        </div>
        </>
      );
}
export default Upload_productBTN