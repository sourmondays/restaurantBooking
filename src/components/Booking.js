import React from "react";
import { DatePicker, Space, Select, Button, InputNumber, Input } from "antd";
const Booking = () => {




  //Datepicker
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  //Select
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <div className="text-center align-items-center m-5">
        <h1>Table Booking</h1>
        <div className="container-booking">
          <form onSubmit="">
            <div className="form-row justify-content-center">
              <div className="form-group col-md-6">
                <Space direction="horizonta">
                  <Input placeholder="First name" />
                  <Input placeholder="Last name" />
                </Space>
              </div>
            </div>
            <div className="form-row justify-content-center">
              <div className="form-group col-md-6">
                <Space direction="horizonta">
                  <Input placeholder="Email" />
                  <Input placeholder="Phone" />
                </Space>
              </div>
            </div>
            <div className="form-row justify-content-center">
              <div className="form-group col-md-6">
                <Space direction="horizontal">
                  <DatePicker onChange={onChange} />
                  <Select
                    defaultValue="18.00"
                    style={{ width: 120 }}
                    onChange={handleChange}
                  >
                    <Option value="18.00">18.00</Option>
                    <Option value="21.00">21.00</Option>
                  </Select>
                  <InputNumber
                    min={1}
                    max={6}
                    defaultValue={1}
                    onChange={onChange}
                  />
                </Space>
              </div>
            </div>
            <Button className="my-button" type="primary">
              Make a reservation
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;