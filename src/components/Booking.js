import React, { useState } from "react";
import moment from 'moment';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
// import { convertLegacyProps } from "antd/lib/button/button";


const intaialValue = {
    firstName:"",
    lastName:"",
    email:"",
    time:"",
    phone:"",
    date:"",
    noPeople:"",

}
const Booking = () => {

  return (
    <Form>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        

        
      </Row>
      <Button>Sign in</Button>
    </Form>
  );

};

export default Booking;


//   const { Option } = Select;

//   const [reservations, setReservations] = useState({});
  
//   const handleInputChange = e => {
//         console.log("Something changed, target", e.target.id, e.target.value);
//         setReservations({
//             ...reservations,
//             [e.target.id]: e.target.value
//         })
//     }
//     function onChange(date, dateString) {
//   console.log(`detta värdet ska vi ha ${dateString}`);
//   setReservations({
//     ...reservations,
//     date: dateString
//   })
// }

//     function onChangeSize(value) {
//   console.log(`detta värdet ska vi ha ${value}`);
//   setReservations({
//     ...reservations,
//     nopeople: value
//   })
// }

//     function onChangeTime (value) {
//   console.log(`detta värdet ska vi ha ${value}`);
//   setReservations({
//     ...reservations,
//     time: value
//   })
// }




//     const onFinish = (e) => {
//       e.preventDefault();
//     console.log('Success:', e.data);

//   };


//   //Not possible to select dates before today
//   function disabledDate(current) {
//     return current && current < moment().subtract(1, 'day');
//   }

 

//   //Checkbox
//   function onChangeBox(e) {
//     console.log(`checked = ${e.target.checked}`);
//   }

//   return (
//     <>
//       <div className="text-center align-items-center m-5">
//         <h1>Table Booking</h1>
//         <div className="container-booking">
//           <form onFinish={onFinish}>
//             <div className="form-row justify-content-center">
//               <div className="form-group col-md-6">
//                 <Space direction="horizontal">
//                   <Input type="text" id="firstName" name="firstName" value={reservations.firstName} onChange={handleInputChange} placeholder="First name" />
//                   <Input type="text" id="lastName" name="lastName" value={reservations.lastName} onChange={handleInputChange} placeholder="Last name" />
//                 </Space>
//               </div>
//             </div>
//             <div className="form-row justify-content-center">
//               <div className="form-group col-md-6">
//                 <Space direction="horizonta">
//                   <Input type="email" id="email" name="email" value={reservations.email} onChange={handleInputChange} placeholder="Email" />
//                   <Input type="tel" id="phone" name="phone" value={reservations.phone} onChange={handleInputChange} placeholder="Phone" />
//                 </Space>
//               </div>
//             </div>
//             <div className="form-row justify-content-center">
//               <div className="form-group col-md-6">
//                 <Space direction="horizontal">
//                   <DatePicker id="date" format="YYYY-MM-DD" disabledDate={disabledDate} onChange={onChange} />
                  
//                   <Select
//                     defaultValue=""
//                     style={{ width: 120 }}
//                     onChange={onChangeTime}
//                   >
//                     <Option value="18:00">18.00</Option>
//                     <Option value="21:00">21.00</Option>
//                   </Select>
//                   <InputNumber
//                     min={1}
//                     max={6}
//                     defaultValue={""}
//                     onChange={onChangeSize}
//                     placeholder="size"
//                   />
//                 </Space> 
//               </div>
//             </div>

//             <Checkbox onChange={onChangeBox}>I agree to GDPR Read more here about <Link to="/privacy" >our privacy policy</Link></Checkbox>
//             <br />

//             <Button className="btn btn-lg" type="primary" htmlType="submit">
//               Make a reservation
//             </Button>
//           </form>
//         </div>
//       </div>
//     </>
//   );