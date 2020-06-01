export const setFavorToLocalStorage=()=>{
    let localStorageFavor =localStorage.getItem('showBanner')||[]
    if(localStorageFavor.length===0){
        localStorage.setItem('showBanner', [])
    }else{
        return JSON.parse(localStorageFavor)
    }
}

export const saveBanner=(txtColor,fileList,bannerText,getTextState)=>{
    setFavorToLocalStorage()
    let newItem=[txtColor,fileList,bannerText,getTextState]
    localStorage.setItem('showBanner', JSON.stringify(newItem))
}
export const setNewItemToLocalStorage=()=>{
    let localStorageFavor =localStorage.getItem('listItem')||[]
    if(localStorageFavor.length===0){
        localStorage.setItem('listItem', [])
    }else{
        return JSON.parse(localStorageFavor)
    }
}
export const creatNewItem=(img,val,showImg)=>{
    setNewItemToLocalStorage()
    console.log('val',val)
    console.log('img',img)
    console.log('showImg',showImg)
    let newItem={
        ...val,img:img,showImg:showImg
    }
    console.log('newItem',newItem)
    // let newItem=val
    localStorage.setItem('listItem', JSON.stringify(newItem))

}