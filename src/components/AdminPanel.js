import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
    return (
        <div>
            <div className="text-right align-items-right mt-5 mr-5">
                <Link to="/adminbookings">
                    <button type="button" class="btn btn-primary btn-sm mr-2">Bookings</button>
                </Link>

                <Link to="/admincreate">
                    <button type="button" class="btn btn-primary btn-sm mr-2">Create</button>
                </Link>

                <Link to="/adminsettings">
                    <button type="button" class="btn btn-primary btn-sm">Settings</button>
                </Link>
            </div>
        </div>
    );
};

export default AdminPanel;