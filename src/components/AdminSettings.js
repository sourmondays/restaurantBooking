import React, { useState } from "react";
import AdminPanel from "./AdminPanel";
import { InputNumber, Button, Space } from 'antd';
import Axios from 'axios';

const Settings = () => {
    const [seats, setSeats] = useState([]);

    const changeSeats = async () => {
        const response = await Axios.post('http://localhost:4000/seats');
        console.log(response);

        setSeats(response.data.data.seats)
    }

    function onChange(value) {
        setSeats(`${value}`)
        console.log('changed', value);
    }
    return (
        <div>
            <AdminPanel />
            <div className="text-center align-items-center mt-5">
                <h1 className="mb-1">Settings</h1>
                <p className="mb-3">Here you can change max available seats for your restaurant.</p>

                <p className="">Max seats</p>
                <Space direction="horizontal">
                    <InputNumber min={1} max={90} defaultValue={3} onChange={onChange} />
                    <Button className="my-button" type="primary" onClick={changeSeats}>Update</Button>
                </Space>

            </div>
        </div>
    );
};

export default Settings;