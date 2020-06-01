export const getStrPosition = (x,y,state)=>{
    //水平
    console.log('x',x)
    //垂直
    console.log('y',y)
let getX=''
let getY=''
let newData={
    alignItems:'',
    justifyContent:'',
}
    if(x=='lineCenter'){
        newData.justifyContent='center'
    }else if(x=='left'){ 
        newData.justifyContent='flex-start'
    }else if(x=='right'){
        newData.justifyContent='flex-end'
    }
    if(y=='VerCenter'){
        newData.alignItems='center'
    }else if(y=='top'){
        newData.alignItems='flex-start'
    }else if(y=='bottom'){
        newData.alignItems='flex-end'
    }

    return newData
}
