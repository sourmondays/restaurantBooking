import React, { useState } from "react";
import moment from 'moment';
import { DatePicker, Space, Select, Button, InputNumber, Input, Checkbox } from "antd";
import { Link } from "react-router-dom";
// import { convertLegacyProps } from "antd/lib/button/button";


// const initialBooking = {
// 	firstName: "",
// 	lastName: "",
//   email:"",
//   phone:"",
// }
const Booking = () => {

  const [reservations, setReservations] = useState({});
  
const handelInputChange = (e)=>{
  setReservations({
    ...reservations,
    [e.target.id]: e.target.value
  })
}

    const onFinish = (e) => {
      e.preventDefault();
    console.log('Success:', e.data);
        // axios.post('http://localhost:4000/bookings')
        // .then(response => this.setState({ articleId: response.data.id }));
  };


  //Not possible to select dates before today
  function disabledDate(current) {
    return current && current < moment().subtract(1, 'day');
  }

  //Select
  const { Option } = Select;

 

  //Checkbox
  function onChangeBox(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <>
      <div className="text-center align-items-center m-5">
        <h1>Table Booking</h1>
        <div className="container-booking">
          <form onFinish={onFinish}>
            <div className="form-row justify-content-center">
              <div className="form-group col-md-6">
                <Space direction="horizontal">
                  <Input type="text" id="firstName" name="firstName" value={reservations.firstName} onChange={handelInputChange} placeholder="First name" />
                  <Input type="text" id="lastname" name="lastName" value={reservations.lastName} onChange={handelInputChange} placeholder="Last name" />
                </Space>
              </div>
            </div>
            <div className="form-row justify-content-center">
              <div className="form-group col-md-6">
                <Space direction="horizonta">
                  <Input type="email" id="email" name="email" value={reservations.email} onChange={handelInputChange} placeholder="Email" />
                  <Input type="tel" id="phone" name="phone" value={reservations.phone} onChange={handelInputChange} placeholder="Phone" />
                </Space>
              </div>
            </div>
            <div className="form-row justify-content-center">
              <div className="form-group col-md-6">
                <Space direction="horizontal">
                  <DatePicker format="YYYY-MM-DD" disabledDate={disabledDate} onChange={handelInputChange} />
                  
                  <Select
                    defaultValue=""
                    style={{ width: 120 }}
                    onChange={handelInputChange}
                  >
                    <Option value="18:00">18.00</Option>
                    <Option value="21:00">21.00</Option>
                  </Select>
                  <InputNumber
                    min={1}
                    max={6}
                    defaultValue={""}
                    onChange={handelInputChange}
                    placeholder="size"
                  />
                </Space> 
              </div>
            </div>

            <Checkbox onChange={onChangeBox}>I agree to GDPR Read more here about <Link to="/privacy" >our privacy policy</Link></Checkbox>
            <br />

            <Button className="btn btn-lg" type="primary" htmlType="submit">
              Make a reservation
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;