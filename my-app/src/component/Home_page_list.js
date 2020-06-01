import React from 'react'

function Home_page_list() {

const listData=[
    {
        img:"https://www.garmin.com.tw/m/buzz/about/images/history_diving_400x265.jpg",
        time:"2018",
        describe:"推出第一支專業潛水錶 Descent MK1，跨足潛水錶市場。",
    },{
        img:"https://www.garmin.com.tw/m/buzz/about/images/history_nmea_400x265.jpg",
        time:"2017",
        describe:"航海產品獲頒 NMEA (美國國家海洋電子協會) 8 項大獎，並連續 3 年蟬聯最佳製造商。",
    },{
        img:"https://www.garmin.com.tw/m/buzz/about/images/history_vivomove_400x265.jpg",
        time:"2016",
        describe:"推出指針式智慧錶 vívomove,，跨足混合智慧穿戴市場。",
    },{
        img:"https://www.garmin.com.tw/m/buzz/about/images/history_red_bull_400x265.jpg",
        time:"2015",
        describe:"成為 Red Bull Air Race 空中競技飛行世界錦標賽贊助夥伴，於日本千葉縣舉行亞洲專屬飛行賽。",
    },{
        img:"https://www.garmin.com.tw/m/buzz/about/images/history_connectiq_400x265.jpg",
        time:"2014",
        describe:"推出為 Garmin 產品打造的開放平台 Connect IQ。",
    },
]
let list_dom=[]
listData.map((v,i)=>{
    list_dom.push(
        <div className="page-list-card">
            <div className="page-list-card-img">
                <img src={v.img} />
            </div>
            <div className="page-list-card-content">
                <h3>{v.time}</h3>
                <p>{v.describe}</p>
            </div>
        </div>
    )
})

    return (
        <>
        <div className="flex">
            {list_dom}
        </div>
        </>
    )
}
export default Home_page_list