import React from 'react'
import '../scss/home_page.scss'
import Home_page_list from '../component/Home_page_list'
function Home_page() {
    return (
    <>
        <div className="home-page-box">
            <div className="home-title-img">
            {/* <img src="./images/trek.jpg"/> */}
            </div>
            <div className="home-page-content">
                <h1>關於我們</h1>
                    <p>
                    Garmin 成立於 1989 年，註冊地為瑞士沙夫豪森，研發總部位在美國，是全球最具指標性的 GPS 企業。近 30 年前，Garmin 以尖端的航空 GPS 導航產品進入市場，而後在航空、航海、車用市場都有完整的產品佈局，目前已是航空、航海、車用、運動健身產品等市場熟悉的領導品牌。結合驚豔設計、卓越質量與優異可靠度，創造絕佳的產品體驗，搭配完整的產品生態圈，Garmin 矢志成為熱愛生活者的理想品牌。
                    </p>
            </div>
            <div className="home-page-img">
                <img src="https://www.garmin.com.tw/m/buzz/about/images/Garmin-office-04.jpg"/>
                <img src="https://www.garmin.com.tw/m/buzz/about/images/Garmin-office-01.jpg"/>
                <img src="https://www.garmin.com.tw/m/buzz/about/images/Garmin-office-02.jpg"/>
            </div>
            <div className="home-page-img flex w-75 block-centr">
                <div className="home-page-img-list">
                    <img src="https://www.garmin.com.tw/m/buzz/about/images/mission.svg"/>
                    <h1>OUR MISSION</h1>
                    <p>我們的使命是成為一個永續經營的公司；在汽車、航空、航海、戶外休閒、以及運動各領域，提供客戶生活中不可或缺的卓越產品。</p>
                </div>
                <div className="home-page-img-list">
                    <img src="https://www.garmin.com.tw/m/buzz/about/images/vision.svg"/>
                    <h1>OUR VISION</h1>
                    <p>我們的願景是要在每一個市場領域都成為全球的領導者；以驚豔的設計，卓越的質量，以及超越的價值廣受客戶喜愛。</p>
                </div>
                <div className="home-page-img-list">
                    <img src="https://www.garmin.com.tw/m/buzz/about/images/values.svg"/>
                    <h1>OUR VALUES</h1>
                    <p>我們的企業文化是建立在誠實、廉正與尊重的基礎上；抱持决心全力以赴的精神，以實踐對同仁、客戶與合作夥伴的承諾。</p>
                </div>
            </div>
            <div className="flex home-page-create">
                <img src="./images/garmin.jpg" />
                    <div className="home-page-create-content">
                        <h1>創辦緣起</h1>
                        <h5>OUR FOUNDERS</h5>
                        <p>Garmin 創立於 1989 年，由台灣南投竹山出生的高民環博士 (Dr. Min Kao) 與 Gary Burrell 共同創立。高民環博士 與 Gary Burrell 曾經是一起共事，兩人分別專精於航太、 GPS、導航與航空航海電子相關領域。共事時發現導航相關技術的巨大潛力，爾後一起攜手創業，矢志要成為成為全球航空、航海、車用及戶外導航和其他電子產品市場的領導者。品牌名稱 Garmin，正是兩人名字的組合 — Gary 與 Min。
                        <br />
                        <br />
                        創業初期產品就以一體式設計整合的 GPS100 導航設備大受好評，逐步將相關通訊與導航技術應用至航空、航海及車用導航、戶外及健身市場。
                        <br />
                        <br />
                        兩位創辦人相當重視事情的本質，而且以「求難、不求易」的經營哲學帶領 Garmin 走過 30 年各種起伏艱難挑戰。並以研發、生產製造、行銷、售後的「垂直整合」策略創造出極高的顧客滿意度。</p>
                    </div>
            </div>
            <h1 className="m-t-60">歷史沿革</h1>
            <h5 className="m-t-30">HISTORY</h5>
        </div>
        <Home_page_list />
        <div className="home-title-img-second"></div>
        <div className="flex home-footer">
            <img src="https://www.garmin.com.tw/m/buzz/about/images/tech_2.jpg"/>
            <div className="home-footer-content">
            <h1>探索極智 豈止創新</h1>
            <h5>INNOVATIONS</h5>
            <h3>「垂直整合」是 Garmin 一大特色。</h3>
<p>
親力親為，從研發、製造、銷售到客服，每個環節都不假手他人，讓我們創造了巨大的產品優勢。
研發與製造的密切溝通，讓我們得以深入掌握材質、零件及製程的環節並達到優化；
透過機構設計，消除不同裝置彼此間的干擾、甚至採用更高容量的電池，卻不因此犧牲輕薄；
透過加速度計、陀螺儀與磁力計搭配共同使用，就可明確感測出本身移動的方向和角度等資訊，
上下樓梯、運動方式等，説明 GPS 增加定位精準度。
</p>

            </div>
            <img src="https://www.garmin.com.tw/m/buzz/about/images/tech_1.jpg"/>
        </div>
    </>
    )
}
export default Home_page