import React from 'react'
import { Table,Button } from 'antd'

function Member_com() {
    
const columns = [
    {
      title: '會員名稱',
      dataIndex: 'name',
      width: 300,
    },
    {
      title: '年齡',
      dataIndex: 'age',
      width: 300,
    },
    {
      title: '地址',
      dataIndex: 'address',
      width: 600,
    },
    {
        title: '',
        dataIndex: '',
        key: 'x',
        render: () => <Button type="danger">Delete</Button>,
    },
    {
        title: '',
        dataIndex: '',
        key: 'edit',
        render: () => <Button type="primary">Edit</Button>,
    }
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
      let rndNum=Math.random()*10
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: Math.ceil(32+rndNum),
      address: `London, Park Lane no. ${i}`,
    });
  }

    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }}  />
        </div>
    )
}
export default Member_com