import React, { useState } from "react";
import AdminPanel from "./AdminPanel";
// import { InputNumber, Button, Space } from 'antd';
import { useMutation } from 'react-query';
import { modifySeats } from '../services/SeatsApi'

const intaialValue = {
    maxSeats: null,
}

const Settings = () => {
    const [mutate] = useMutation(modifySeats);
    const [seats, setSeats] = useState(intaialValue);

    const handleInputChange = e => {
        console.log("Something changed, target", e.target.id, e.target.value);
        setSeats({
            ...seats,
            [e.target.id]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        mutate(seats)
        console.log("Submitting seats...");
    }

    return (
        <>
            <AdminPanel />
            <div className="text-center align-items-center mt-5">
                <h1 className="mb-1">Settings</h1>
                <p className="mb-3">Here you can change max available seats for your restaurant.</p>


                {/* <p className="">Max seats</p>
                <div className="form-group">
                    <Space direction="horizontal">
                        <InputNumber id="seats" type="numbers" id="seats" min={1} max={90} defaultValue={3} onChange={handleInputChange} />
                        <Button className="my-button" type="primary" >Update</Button>
                    </Space>
                </div> */}

                <form onSubmit={handleFormSubmit}>
                    <div className="form-froup">
                        <label htmlFor="name">Seats</label>
                        <input type="text" id="maxSeats" onChange={handleInputChange} className="form-control" placeholder="Enter seats" />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-dark">Change</button>
                    </div>
                </form>


            </div>
        </>
    );
};

export default Settings;