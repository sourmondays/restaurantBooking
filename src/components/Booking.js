import React from "react";
import moment from 'moment';
import { DatePicker, Space, Select, Button, InputNumber, Input } from "antd";
import { Link } from "react-router-dom";
// import { convertLegacyProps } from "antd/lib/button/button";


const Booking = () => {
  //Datepicker



  //Not possible to select dates before today
  function disabledDate(current) {
    return current && current < moment().subtract(1, 'day');
  }

  //Select
  const { Option } = Select;

  function handleChange(value) {
    console.log(value.format());
  }
    function onChange(date) {
    console.log(date);
  }

    function handleChangeFirstName(value) {
    console.log(value.target.value);
  }
     function handleChangeLastName(value) {
    console.log(value.target.value);
  }  
     function handleChangeEmail(value) {
    console.log(value.target.value);
  }
       function handleChangePhone(value) {
    console.log(value.target.value);
  }

  

 
  return (
    <>
      <div className="text-center align-items-center m-5">
        <h1>Table Booking</h1>
        <div className="container-booking">
          <form>
            <div className="form-row justify-content-center">
              <div className="form-group col-md-6">
                <Space direction="horizonta">
                  <Input type="text" name="firstName" onChange={handleChangeFirstName} placeholder="First name" />
                  <Input type="text" name="lastName" onChange={handleChangeLastName} placeholder="Last name" />
                </Space>
              </div>
            </div>
            <div className="form-row justify-content-center">
              <div className="form-group col-md-6">
                <Space direction="horizonta">
                  <Input type="email" name="email" onChange={handleChangeEmail} placeholder="Email" />
                  <Input type="tel" name="phone" onChange={handleChangePhone} placeholder="Phone" />
                </Space>
              </div>
            </div>
            <div className="form-row justify-content-center">
              <div className="form-group col-md-6">
                <Space direction="horizontal">
                  <DatePicker format="YYYY-MM-DD" disabledDate={disabledDate} onChange={onChange} />
                  <Select
                    defaultValue=""
                    style={{ width: 120 }}
                    onChange={handleChange}
                  >
                    <Option value="18.00">18.00</Option>
                    <Option value="21.00">21.00</Option>
                  </Select>
                  <InputNumber
                    min={1}
                    max={6}
                    defaultValue={""}
                    onChange={onChange}
                    placeholder="size"
                  />
                </Space>
              </div>
            </div>
                <div className="GDPR">
                  <input
                      type="checkbox"
                      className="checkBox"
                      value=""
                      required
                  />
                  <p className="BookingGdpr">I agree to GDPR Read more here about <Link to="/privacy" >our privacy policy</Link></p>
              </div>
            <Button className="btn btn-lg" type="primary">
              Make a reservation
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;