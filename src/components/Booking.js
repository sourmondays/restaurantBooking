import React, { useState } from "react";
import moment from 'moment';
import { Link } from "react-router-dom";



const intaialValue = {
    date:"",
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    noPersons:"",
    time:"",
}




const Booking = () => {

  const [reservation, setReservation] = useState(intaialValue);


  const onChange = e =>{
  console.log("log somthing to the console ",e.target.value);
    setReservation({
      ...reservation,
      [e.target.id]:e.target.value
    })
}

 const handleFormSubmit = (e) => {
        e.preventDefault();

        // mutate(seats)
        console.log("Submitting works fine");
    }
  return (<>
          <h1>Make a reservation</h1>
      <div className="container-booking">
        <form onSubmit={handleFormSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="firstName">Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="ex. Ann"
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="ex. Jonsson"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="ex. ann.jonsson@hotmail.com"
                onChange={onChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="phone">Phone </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="ex. 0701236986"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="date">Date</label>
              <input type="date" className="form-control" id="date" onChange={onChange} />
            </div>
            <div className="form-group col-md-4">
              <label for="time">Time</label>
              <select id="time" className="form-control" onChange={onChange}>
                <option selected>Choose time</option>
                <option>18:00</option>
                <option>21:00</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="sizeparty">Party size</label>
              <input
                type="number"
                className="form-control"
                id="noPersons"
                min="1"
                max="6"
                placeholder="1 - 6 people"
                onChange={onChange}
              />
            </div>
          </div>
         <button type="submit" className="btn btn-primary col-md-12">
            Make a Reservation
          </button>
        </form>
      </div>
      </>
  )

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