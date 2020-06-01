import React,{useEffect,useState} from 'react'
import { Table, Button, Space } from 'antd'


 function OrderList_page() {
     
const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    orderNum: 'asdfa354n',
    total: 8000,
    buyerName: 'Alex',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-5`,
            price:8000,
            count:1,
        }
    ],
    address:'台北市信義區基隆路一段195-1號',
  },
  {
    key: '2',
    orderNum: 'za5dfda54n',
    total: 10000,
    buyerName: 'Bill',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-9`,
            price:10000,
            count:1,
        }
    ],
    address:'台北市松山區健康路156號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 2000,
    buyerName: 'Carter',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:2000,
            count:1,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 20000,
    buyerName: 'Dell',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:10000,
            count:2,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 15000,
    buyerName: 'Eric',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:5000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 9000,
    buyerName: 'Frank',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:3000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 9000,
    buyerName: 'Grand',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:3000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 9000,
    buyerName: 'Hank',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:3000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 9000,
    buyerName: 'Ivy',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:3000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 9000,
    buyerName: 'Joyce',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:3000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 9000,
    buyerName: 'Kenny',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:3000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 9000,
    buyerName: 'Louis',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:3000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 9000,
    buyerName: 'Mark',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:3000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 9000,
    buyerName: 'News',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:3000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 9000,
    buyerName: 'Otis',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:3000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 9000,
    buyerName: 'Parker',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:9000,
            count:1,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 1000,
    buyerName: 'Quee',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:1000,
            count:1,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 45000,
    buyerName: 'Carter',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:15000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 9000,
    buyerName: 'Carter',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:3000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 2000,
    buyerName: 'Carter',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:6000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 15000,
    buyerName: 'Carter',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:5000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 9000,
    buyerName: 'Carter',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:3000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  },
  {
    key: '3',
    orderNum: 'wer4df354',
    total: 9000,
    buyerName: 'Carter',
    orderList:[
        {
            showImg: 'garmin.jpg',
            name: `Forerunner 245 Music-20`,
            price:3000,
            count:3,
        }
    ],
    address:'新北市三重區三和路二段27-1號',
  }
];


const [compare,setCompare]=useState(false)
useEffect(()=>{
console.log('compare',compare)
},[compare])
const columns = [
    {
      title: 'orderNum',
      dataIndex: 'orderNum',
      width: 400,
    },
    {
    title: 'buyerName',
    dataIndex: 'buyerName',
    width: 400,
    },
    {
    title: 'address',
    dataIndex: 'address',
    width: 600,
    },
    {
    title: 'total',
    dataIndex: 'total',
    sorter: (a, b) => a.total - b.total|| b.total - a.total,
    width: 200,
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <Button type="danger">Delete</Button>,
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'edit',
        render: () => <Button type="primary">Edit</Button>,
    }
  ];
    return (
        <div>
            <Table dataSource={data} columns={columns} >
                <ColumnGroup title="訂單">
                    <Column title="orderNum" dataIndex="orderNum" key="orderNum" />
                    <Column title="buyerName" dataIndex="buyerName" key="buyerName" />
                    <Column title="address" dataIndex="address" key="address" />
                    <Column title="total" dataIndex="total" key="total" />
                </ColumnGroup>
            </Table>
        </div>
    )
}
export default OrderList_page



