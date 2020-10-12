import React from "react";
import { Link } from "react-router-dom";
import { Button, Space } from 'antd';


const AdminPanel = () => {
    return (
        <div>
            <div className="text-right align-items-right mt-5 mr-5">
                <Space direction="horizontal">
                    <Link to="/adminbookings">
                        <Button type="primary">Bookings</Button>
                    </Link>
                    <Link to="/admincreate">
                        <Button type="primary">Create</Button>
                    </Link>
                    <Link to="/adminsettings">
                        <Button type="primary">Settings</Button>
                    </Link>
                </Space>
            </div>
        </div>
    );
};

export default AdminPanel;