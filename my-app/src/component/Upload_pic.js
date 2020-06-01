import React,{useState,useEffect} from 'react'
import { Button  } from 'antd'
import '../scss/Banner_page.scss'
import {getStrPosition} from '../util/TxtPosition'
import {setFavorToLocalStorage,saveBanner} from '../util/GetLocalStorage'

function Upload_pic() {
  //上傳圖片
    const [fileList, setFileList] = useState([]);
  //顯示圖片
    const [showImg,setShowImg]=useState('')
    //開關
    const [forRender,setForRender]=useState(false)
    //顯示文字內容
    const [bannerText,setBannerText]=useState('')
    
    //顯示文字位置
    const [getLeft,setGetLeft]=useState('left')
    const [getTop,setGetTop]=useState('top')
    const [getTextState,setGetTextState]=useState({
      alignItems:'center',
      justifyContent:'center',
    })
    const [txtColor,setTxtColor]=useState('#fff')
    
    useEffect(()=>{
setGetTextState(getStrPosition(getLeft,getTop,getTextState))
    },[getLeft,getTop])

useEffect(()=>{
  setFavorToLocalStorage()
},[])
    const getFile=(val)=>{
      let newData=fileList
      if(val.target.files[0]==undefined){
        return false
      }else{
        if(val.target.files[0]){
          newData.push(val.target.files[0].name)
        }
      }
      setForRender(!forRender)
      setFileList(newData)
      }
      //  存置localStorage
    function transImg(){
      saveBanner(txtColor,fileList,bannerText,getTextState)
    }

    let fileList_box=[]
    makeImg()
    function makeImg(){
      fileList.map((v,i)=>{
        fileList_box.push(
          <img src={'images/'+v } style={{width:'100px',heigth:'100px',margin:'0 10px'}} onClick={()=>setShowImg(fileList[i])} />
        )
      })
    }
    function getTxt(e){
      setBannerText(e.target.value)
    }

      const loadImg=(
          <div style={{width:'800px',height:'500px',background:'#fff'}}></div>
      )
      return (
        <>
        <div className="show-banner" id="show-banner">
          {showImg?(<img src={'./images/'+showImg} style={{width:'800px',height:'500px'}}/>):loadImg}
          <div className="txt" style={getTextState}>
          <span style={{color:txtColor}}>{bannerText}</span>
          </div>
          
        </div>
        
        <p>預覽圖片 
        {fileList_box}</p>
        
        <div className="input-upload-type">
          <span className="input-upload-text">上傳圖片</span>
          <input className="input-upload-list" type="file" onChange={(e)=>getFile(e)}/>
          </div>
        <p>文字位置</p>
        <div className="flex">
          <Button style={{margin:'5px 10px 5px 0'}} onClick={()=>setGetTop('top')}>上</Button>
          <Button style={{margin:'5px 10px 5px 0'}} onClick={()=>setGetTop('bottom')}>下</Button>
          <Button style={{margin:'5px 10px 5px 0'}} onClick={()=>setGetLeft('left')}>左</Button>
          <Button style={{margin:'5px 10px 5px 0'}} onClick={()=>{
            setGetLeft('right')
          }}>右</Button>
          <Button style={{margin:'5px 10px 5px 0'}} onClick={()=>setGetTop('VerCenter')}>縱向置中</Button>
          <Button style={{margin:'5px 10px 5px 0'}} onClick={()=>{
            setGetLeft('lineCenter')
          }}>橫向置中</Button>
          <Button style={{margin:'5px 10px 5px 0'}} onClick={()=>{
            setGetTop('VerCenter')
            setGetLeft('lineCenter')
          }
          }>全部置中</Button>

        </div>
          
  <div className="flex" style={{marginTop:'20px'}}>
  <p>字體顏色</p>
          <div className="color-box red" onClick={()=>setTxtColor('#f00')}></div>
          <div className="color-box green" onClick={()=>setTxtColor('#090')}></div>
          <div className="color-box blue" onClick={()=>setTxtColor('#009')}></div>
          <div className="color-box white" onClick={()=>setTxtColor('#fff')}></div>
          <div className="color-box black" onClick={()=>setTxtColor('#000')}></div>
  </div>
  <br/>
  <br/>
          <span style={{marginRight:'10px'}}>顯示文字</span>
          <input type="text" onChange={(e)=>{
            getTxt(e)  
          }}/>
          <br/>
          <br/>
        <Button type="primary" onClick={()=>transImg()}>送出</Button>
        <br/><br/>
        </>
      );
}
export default Upload_pic