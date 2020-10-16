import React, { useState } from "react";
import AdminPanel from "./AdminPanel";
// import { InputNumber, Button, Space, Form } from 'antd';
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

                <form onSubmit={handleFormSubmit}>
                    <label className="d-flex justify-content-center" htmlFor="name">Max seats</label>

                    <div className="form-group d-inline-flex justify-content-center">
                        <input for="ex1" type="text" id="maxSeats" onChange={handleInputChange} className="form-control mb-2" placeholder="Enter seats" />
                    </div>

                    <div className="button">
                        <button type="submit" className="btn btn-dark btn-sm">Update</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Settings;