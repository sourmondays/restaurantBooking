import React from "react";
import AdminPanel from "./AdminPanel";
import { InputNumber, Button, Space } from 'antd';

const Settings = () => {

    function onChange(value) {
        console.log('changed', value);
    }
    return (
        <div>
            <AdminPanel />
            <div className="text-center align-items-center mt-5">
                <h1 className="mb-1">Settings</h1>
                <p className="mb-5">Here you can change max available seats for your restaurant.</p>

                <p className="">Max seats</p>
                <Space direction="horizontal">
                    <InputNumber min={1} max={150} defaultValue={3} onChange={onChange} />
                    <Button className="my-button" type="primary">Update</Button>
                </Space>

            </div>
        </div>
    );
};

export default Settings;