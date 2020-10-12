import React from "react";
import AdminPanel from "./AdminPanel";
import { DatePicker, Space, Select, Button, Table, Row, Col } from 'antd';
// import Table from "ant-responsive-table";

const Bookings = () => {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  // TABLE
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Customers', dataIndex: 'customers', key: 'customers' },
    {
      title: 'Action',
      dataIndex: '',
      render: () => <Space orientation="right" direction="horizontal"><Button type="primary">Edit</Button> <Button type="danger">Delete</Button>  </Space>,
    },
  ];

  // Fake data tables
  const data = [
    {
      key: 1,
      name: 'John Brown',
      date: "2020-10-12",
      phone: "060-3884848",
      customers: 2,
    },
    {
      key: 2,
      name: 'Jim Green',
      date: "2020-10-12",
      phone: "060-3884848",
      customers: 2,
    },
    {
      key: 3,
      name: 'Not Expandable',
      date: "2020-10-12",
      phone: "060-3884848",
      customers: 2,
    },
    {
      key: 4,
      name: 'Joe Black',
      date: "2020-10-12",
      phone: "060-3884848",
      customers: 4,
    },
  ];


  return (
    <div>
      <AdminPanel />
      <div className="text-left mt-2 ml-5">
        <h1>Bookings</h1>
        <p>Here you can see all bookings for your restaurant and also see who booked at a specfic date.</p>

        <Space direction="horizontal">
          <DatePicker onChange={onChange} />
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">18.00</Option>
            <Option value="lucy">21.00</Option>
          </Select>
          <Button className="my-button" type="primary">Filter</Button>
        </Space>

      </div>

      <div className="text-center align-items-center mt-5 ml-5 mr-5">
        <Row>
          <Col span={24}>    <Table
            columns={columns}
            dataSource={data}
            pagination={false}
          /></Col>
        </Row>

      </div>

    </div>
  );
};

export default Bookings;